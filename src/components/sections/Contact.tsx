import { useForm } from "@tanstack/react-form"
import { motion } from "framer-motion"
import { useState } from "react"
import { resume } from "@/data/resume"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { sendContactEmailFn } from "@/lib/firebase"

const inputClasses =
  "w-full bg-bg-subtle border border-border rounded-md px-4 py-3 text-text text-[13px] font-mono outline-none transition-colors duration-200 focus:border-border-hover"

export const Contact = () => {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const form = useForm({
    defaultValues: { name: "", email: "", message: "" },
    onSubmit: async ({ value }) => {
      setStatus("sending")
      setErrorMessage("")
      try {
        await sendContactEmailFn({
          name: value.name,
          email: value.email,
          message: value.message,
        })
        setStatus("sent")
      } catch (err: unknown) {
        setStatus("error")
        const code = err && typeof err === "object" && "code" in err ? (err as { code: string }).code : ""
        const message = err && typeof err === "object" && "message" in err ? String((err as { message: unknown }).message) : ""
        if (code === "functions/resource-exhausted" || message.includes("Demasiados")) {
          setErrorMessage("Demasiados envíos. Intenta de nuevo en 1 hora.")
        } else {
          setErrorMessage("Something went wrong. Try emailing directly.")
        }
      }
    },
  })

  return (
    <section id="contact" className="px-12 pt-[120px] pb-[160px]">
      <SectionLabel number="05" label="Contact" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div>
          <h2 className="font-display text-[36px] font-light leading-[1.2] mb-5 text-text">
            Let's work
            <br />
            <span className="font-medium text-accent">together.</span>
          </h2>
          <p className="text-text-muted text-[13px] leading-[1.8] mb-8">
            Open to full-time roles, contracts, and consulting. Based in Costa
            Rica, available for remote work worldwide.
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                label: "Email",
                value: resume.email,
                href: `mailto:${resume.email}`,
              },
              {
                label: "LinkedIn",
                value: "brad-guillen",
                href: `https://${resume.linkedin}`,
              },
              {
                label: "Phone",
                value: resume.phone,
                href: `tel:${resume.phone}`,
              },
              {
                label: "GitHub",
                value: resume.github,
                href: `https://${resume.github}`,
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex gap-4 items-baseline text-text-muted text-[13px] transition-colors duration-200 hover:text-text"
              >
                <span className="text-text-faint w-14 text-[11px] tracking-[0.08em] uppercase">
                  {item.label}
                </span>
                {item.value}
              </a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {status === "sent" ? (
            <div className="p-10 text-center border border-border rounded-lg">
              <div className="text-accent text-[24px] mb-3">✓</div>
              <p className="text-text-muted text-[13px]">
                Message sent. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                form.handleSubmit()
              }}
              className="flex flex-col gap-4"
            >
              <form.Field
                name="name"
                children={(field) => (
                  <input
                    placeholder="Your name"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className={inputClasses}
                  />
                )}
              />
              <form.Field
                name="email"
                children={(field) => (
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className={inputClasses}
                  />
                )}
              />
              <form.Field
                name="message"
                children={(field) => (
                  <textarea
                    placeholder="What are you working on?"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    rows={5}
                    className={`${inputClasses} resize-y`}
                  />
                )}
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className={`px-6 py-3 rounded-md text-[13px] font-mono tracking-[0.04em] transition-opacity duration-200 border-none ${
                  status === "sending"
                    ? "bg-bg-elevated text-text-muted cursor-not-allowed"
                    : "bg-accent text-[#0A0A0F] cursor-pointer hover:opacity-85"
                }`}
              >
                {status === "sending" ? "Sending..." : "Send message →"}
              </button>
              {status === "error" && errorMessage && (
                <p className="text-[#E8837A] text-[12px]">
                  {errorMessage}
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
