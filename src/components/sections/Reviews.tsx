import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  Timestamp,
} from "firebase/firestore"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { db, submitReviewFn } from "@/lib/firebase"

interface Review {
  id: string
  name: string
  role: string
  message: string
  date: string
}

const inputClasses =
  "w-full bg-bg-subtle border border-border rounded-md px-4 py-3 text-text text-[13px] font-mono outline-none transition-colors duration-200 focus:border-accent"

const REVIEWS_LIMIT = 50

export const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [message, setMessage] = useState("")
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const q = query(
          collection(db, "reviews"),
          where("status", "==", "approved"),
          orderBy("createdAt", "desc"),
          limit(REVIEWS_LIMIT)
        )
        const snap = await getDocs(q)
        const list: Review[] = snap.docs.map((doc) => {
          const d = doc.data()
          const createdAt = d.createdAt as Timestamp | undefined
          return {
            id: doc.id,
            name: d.name ?? "",
            role: d.role ?? "",
            message: d.message ?? "",
            date: d.date ?? (createdAt ? new Date(createdAt.toMillis()).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : ""),
          }
        })
        setReviews(list)
      } catch {
        setReviews([])
      } finally {
        setLoading(false)
      }
    }
    loadReviews()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !role.trim() || !message.trim()) return

    setSubmitStatus("sending")
    setErrorMessage("")
    try {
      await submitReviewFn({
        name: name.trim(),
        email: email.trim(),
        role: role.trim(),
        message: message.trim(),
      })
      setSubmitStatus("success")
      setName("")
      setEmail("")
      setRole("")
      setMessage("")
      setTimeout(() => setSubmitStatus("idle"), 4000)
    } catch (err: unknown) {
      setSubmitStatus("error")
      const message = err && typeof err === "object" && "message" in err ? String((err as { message: unknown }).message) : ""
      if (message.includes("Demasiados")) {
        setErrorMessage("Demasiados envíos. Intenta de nuevo en 1 hora.")
      } else {
        setErrorMessage("No se pudo enviar. Intenta de nuevo.")
      }
    }
  }

  return (
    <section id="reviews" className="px-12 py-[120px]">
      <SectionLabel number="04" label="Reviews" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
        <div>
          <h2 className="font-display text-[28px] font-light leading-[1.2] mb-4 text-text">
            Leave a{" "}
            <span className="font-medium text-accent">review</span>
          </h2>
          <p className="text-text-muted text-[13px] leading-[1.8] mb-6">
            Worked with me? I'd appreciate your feedback. Leave a short comment
            about our collaboration.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={inputClasses}
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={inputClasses}
            />
            <input
              placeholder="Role / Company"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className={inputClasses}
            />
            <textarea
              placeholder="Your review..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              maxLength={500}
              className={`${inputClasses} resize-y`}
            />
            <button
              type="submit"
              disabled={submitStatus === "sending"}
              className={`px-6 py-2.5 rounded-md text-[13px] font-mono font-normal tracking-[0.04em] transition-opacity duration-200 ${
                submitStatus === "sending"
                  ? "bg-bg-elevated text-text-muted cursor-not-allowed"
                  : "bg-accent text-[#0A0A0F] cursor-pointer hover:opacity-85"
              }`}
            >
              {submitStatus === "sending" ? "Sending..." : "Submit review →"}
            </button>
            {submitStatus === "success" && (
              <p className="text-accent text-[12px]">
                Thanks! Your review is pending approval.
              </p>
            )}
            {submitStatus === "error" && errorMessage && (
              <p className="text-[#E8837A] text-[12px]">{errorMessage}</p>
            )}
          </form>
        </div>

        <div className="flex flex-col gap-4">
          {loading ? (
            <div className="px-6 py-10 border border-border rounded-lg text-center">
              <p className="text-text-faint text-[13px]">Loading reviews...</p>
            </div>
          ) : reviews.length === 0 ? (
            <div className="px-6 py-10 border border-border rounded-lg text-center">
              <p className="text-text-faint text-[13px] leading-[1.7]">
                No reviews yet. Be the first to leave one!
              </p>
            </div>
          ) : (
            reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="px-6 py-5 bg-bg-subtle border border-border rounded-lg transition-colors duration-200 hover:border-border-hover"
              >
                <p className="text-text-muted text-[13px] leading-[1.7] mb-3 italic">
                  "{review.message}"
                </p>
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="text-text text-[12px] font-normal">
                      {review.name}
                    </span>
                    {review.role && (
                      <span className="text-text-faint text-[11px] ml-2">
                        · {review.role}
                      </span>
                    )}
                  </div>
                  <span className="text-text-faint text-[11px]">
                    {review.date}
                  </span>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
