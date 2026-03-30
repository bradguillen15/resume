# Brad Guillen — Resume

Single-page resume and portfolio site. Live at **[resume-e74cb.web.app](https://resume-e74cb.web.app/)**.

---

## Stack

| Layer | Tech |
|-------|------|
| **UI** | React 19, TypeScript, Vite 7 |
| **Styling** | Tailwind CSS 4, shadcn/ui, Framer Motion |
| **Hosting** | Firebase Hosting |
| **Data** | Firestore (reviews with pending/approved flow) |
| **Backend** | Cloud Functions (contact form via Gmail, review submission, IP rate limit) |

---

## Features

- **Contact** — Form submits to a Cloud Function; email sent via Gmail (Nodemailer). Rate limit and 1h IP block to reduce spam.
- **Reviews** — Visitors submit reviews to Firestore; only `approved` reviews are shown. Manual approval in Firebase Console.
- **Responsive** — Desktop sidebar + scrollable content; mobile header and stacked sections.

---

## Scripts

```bash
pnpm install
pnpm dev          # dev server
pnpm build        # production build
pnpm deploy:firebase   # build + deploy to Firebase (Hosting, Firestore rules, Functions)
```

---

## Project structure

```
├── src/
│   ├── components/   # layout (Nav, Footer), sections (Hero, Experience, …), ui
│   ├── data/         # resume content
│   └── lib/          # Firebase config and callables
├── functions/        # Cloud Functions (sendContactEmail, submitReview)
├── firestore.rules   # read approved reviews only; writes via Functions
└── firebase.json     # Hosting (dist), Firestore, Functions
```

---

## Env and deploy

- **Front:** Copy `.env.example` to `.env` and set `VITE_FIREBASE_*` from [Firebase Console](https://console.firebase.google.com) → Project settings → Your apps.
- **Functions:** Set `GMAIL_USER`, `GMAIL_APP_PASSWORD`, `CONTACT_TO_EMAIL` in Google Cloud Console (Cloud Run) or Firebase Functions config.

Then: `pnpm build` and `pnpm exec firebase deploy` (or `pnpm deploy:firebase`).
