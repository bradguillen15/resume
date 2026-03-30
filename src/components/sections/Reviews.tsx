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
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Review {
  id: string
  name: string
  role: string
  message: string
  date: string
}

const inputClasses =
  "w-full bg-bg-secondary border border-border rounded-lg px-4 py-3 text-text-primary text-[13px] font-mono outline-none transition-colors duration-200 focus:border-accent placeholder:text-text-muted"

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
      const msg = err && typeof err === "object" && "message" in err ? String((err as { message: unknown }).message) : ""
      if (msg.includes("Demasiados")) {
        setErrorMessage("Demasiados envíos. Intenta de nuevo en 1 hora.")
      } else {
        setErrorMessage("No se pudo enviar. Intenta de nuevo.")
      }
    }
  }

  return (
    <section id="reviews" className="px-6 sm:px-8 lg:px-12 py-20 lg:py-[120px]">
      <SectionLabel number="05" label="Reviews" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        {/* Form column */}
        <div>
          <h2 className="font-display text-[26px] sm:text-[28px] font-semibold leading-[1.2] mb-3 text-text-primary">
            Leave a <span className="text-accent">review</span>
          </h2>
          <p className="text-text-secondary text-[13px] leading-[1.8] mb-6">
            Worked with me? I'd appreciate your feedback. Leave a short comment about our collaboration.
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
            <Button
              type="submit"
              disabled={submitStatus === "sending"}
              className="bg-accent text-[#0A0A0F] hover:bg-accent/90 font-mono text-[13px] tracking-[0.04em] cursor-pointer w-full sm:w-auto"
            >
              {submitStatus === "sending" ? "Sending..." : "Submit review →"}
            </Button>
            {submitStatus === "success" && (
              <p className="text-accent text-[12px]">Thanks! Your review is pending approval.</p>
            )}
            {submitStatus === "error" && errorMessage && (
              <p className="text-[#f87171] text-[12px]">{errorMessage}</p>
            )}
          </form>
        </div>

        {/* Reviews column */}
        <div className="flex flex-col gap-4">
          {loading ? (
            <Card className="border-border bg-bg-secondary">
              <CardContent className="px-6 py-10 text-center">
                <p className="text-text-muted text-[13px]">Loading reviews...</p>
              </CardContent>
            </Card>
          ) : reviews.length === 0 ? (
            <Card className="border-border bg-bg-secondary">
              <CardContent className="px-6 py-10 text-center">
                <p className="text-text-muted text-[13px] leading-[1.7]">
                  No reviews yet. Be the first to leave one!
                </p>
              </CardContent>
            </Card>
          ) : (
            reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="border-border bg-bg-secondary hover:border-border-strong transition-colors duration-200">
                  <CardContent className="px-6 py-5">
                    <p className="text-text-secondary text-[13px] leading-[1.7] mb-3 italic">
                      "{review.message}"
                    </p>
                    <div className="flex justify-between items-start gap-4">
                      <div className="min-w-0">
                        <p className="text-text-primary text-[12px] font-medium truncate">
                          {review.name}
                        </p>
                        {review.role && (
                          <p className="text-text-muted text-[11px] leading-[1.5] truncate">
                            {review.role}
                          </p>
                        )}
                      </div>
                      <span className="text-text-muted text-[11px] shrink-0 mt-0.5">{review.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
