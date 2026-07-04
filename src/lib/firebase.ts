import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import {
  connectFunctionsEmulator,
  getFunctions,
  httpsCallable,
} from "firebase/functions"
import type { ChatChunk, ChatRequest, ChatResult } from "@/lib/chat"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

const functions = getFunctions(app, "us-central1")

if (import.meta.env.DEV && import.meta.env.VITE_USE_EMULATORS === "true") {
  connectFunctionsEmulator(functions, "localhost", 5001)
}

export const sendContactEmailFn = httpsCallable<
  { name: string; email: string; message: string },
  { success: boolean }
>(functions, "sendContactEmail")

export const chatWithBradFn = httpsCallable<ChatRequest, ChatResult, ChatChunk>(
  functions,
  "chatWithBrad"
)

export const submitReviewFn = httpsCallable<
  {
    name: string
    email: string
    role: string
    message: string
    linkedInUrl: string
  },
  { success: boolean }
>(functions, "submitReview")
