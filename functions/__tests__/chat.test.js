// @vitest-environment node
import { createRequire } from "node:module";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

const require = createRequire(import.meta.url);
const { HttpsError } = require("firebase-functions/v2/https");
const { validateMessages, streamGemini, toGeminiContents, mapGeminiHttpError } =
  require("../chat.js")._internal;

function geminiEvent(text) {
  return {
    candidates: [{ content: { parts: [{ text }] } }],
  };
}

function sseResponse(events) {
  const payload = events.map((event) => `data: ${JSON.stringify(event)}\n\n`).join("");
  return {
    ok: true,
    body: new ReadableStream({
      start(controller) {
        controller.enqueue(new TextEncoder().encode(payload));
        controller.close();
      },
    }),
  };
}

describe("chat function internals", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe("toGeminiContents", () => {
    it("maps assistant role to model for Gemini", () => {
      expect(
        toGeminiContents([
          { role: "user", content: "Hi" },
          { role: "assistant", content: "Hello" },
        ])
      ).toEqual([
        { role: "user", parts: [{ text: "Hi" }] },
        { role: "model", parts: [{ text: "Hello" }] },
      ]);
    });
  });

  describe("validateMessages", () => {
    it("requires the last message to be from the user", () => {
      expect(() =>
        validateMessages([{ role: "user", content: "Hi" }, { role: "assistant", content: "Hey" }])
      ).toThrow(HttpsError);
    });
  });

  describe("streamGemini", () => {
    it("emits incremental deltas and returns the full text", async () => {
      fetch.mockResolvedValue(
        sseResponse([geminiEvent("Hel"), geminiEvent("lo")])
      );

      const deltas = [];
      const fullText = await streamGemini({
        apiKey: "test-key",
        model: "gemini-2.5-flash",
        systemPrompt: "system",
        messages: [{ role: "user", content: "Hi" }],
        onDelta: (text) => deltas.push(text),
      });

      expect(deltas).toEqual(["Hel", "lo"]);
      expect(fullText).toBe("Hello");
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining("/models/gemini-2.5-flash:streamGenerateContent?alt=sse"),
        expect.objectContaining({
          headers: expect.objectContaining({ "x-goog-api-key": "test-key" }),
        })
      );
    });

    it("handles cumulative Gemini chunks without duplicating text", async () => {
      fetch.mockResolvedValue(
        sseResponse([geminiEvent("Hello"), geminiEvent("Hello world")])
      );

      const deltas = [];
      const fullText = await streamGemini({
        apiKey: "test-key",
        model: "gemini-2.5-flash",
        systemPrompt: "system",
        messages: [{ role: "user", content: "Hi" }],
        onDelta: (text) => deltas.push(text),
      });

      expect(deltas).toEqual(["Hello", " world"]);
      expect(fullText).toBe("Hello world");
    });

    it("maps Gemini 404 model errors to failed-precondition", async () => {
      fetch.mockResolvedValue({
        ok: false,
        status: 404,
        text: async () =>
          JSON.stringify({
            error: { message: "model not found", status: "NOT_FOUND" },
          }),
      });

      await expect(
        streamGemini({
          apiKey: "test-key",
          model: "gemini-2.0-flash-lite",
          systemPrompt: "system",
          messages: [{ role: "user", content: "Hi" }],
          onDelta: () => {},
        })
      ).rejects.toMatchObject({
        code: "failed-precondition",
        message: "The AI model is not available right now.",
      });
    });

    it("maps Gemini 429 errors to resource-exhausted", async () => {
      fetch.mockResolvedValue({
        ok: false,
        status: 429,
        text: async () =>
          JSON.stringify({
            error: { message: "rate limit", status: "RESOURCE_EXHAUSTED" },
          }),
      });

      await expect(
        streamGemini({
          apiKey: "test-key",
          model: "gemini-2.5-flash",
          systemPrompt: "system",
          messages: [{ role: "user", content: "Hi" }],
          onDelta: () => {},
        })
      ).rejects.toMatchObject({
        code: "resource-exhausted",
        message: "The AI is at capacity right now. Please try again in a bit.",
      });
    });
  });

  describe("mapGeminiHttpError", () => {
    it("throws unavailable for unexpected status codes", () => {
      expect(() => mapGeminiHttpError(500, "internal")).toThrow(
        expect.objectContaining({
          code: "unavailable",
          message: "The AI is unavailable right now.",
        })
      );
    });
  });
});
