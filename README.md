<div align="center">

<img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/H-PVM8LfELQ7zPFB2NEV5gzlb036Km00.png" alt="Hamza Haimeur" width="90" />

# Hamza Haimeur — Portfolio

**Design meets purpose.**
Personal portfolio of **Hamza Haimeur**, a front-end developer building clean, accessible, and professional web experiences.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-lightgrey)](#license)

[Live Demo](#) · [Report a bug](https://github.com/hamzahaimeur/hamzahaimeur-portfolio/issues) · [Contact](#contact)

</div>

---

## ✨ Overview

This repository contains the source code of my personal portfolio website — a fast, responsive, and modern single-page-style site built with **Next.js App Router**, **React 19**, and **Tailwind CSS 4**. It showcases my projects, technical skills, and a working contact form powered by **Resend**.

## 🖼️ Sections

| Section | Description |
|---|---|
| **Hero** | Introduction and quick call-to-action buttons |
| **What I Do** | A short overview of my core services |
| **Featured Projects** | A curated selection of recent work |
| **Tech Stack** | Technologies and tools I work with |
| **Stats** | Experience and project highlights |
| **Skills** (`/skills`) | Detailed breakdown of my technical toolkit |
| **Projects** (`/projects`) | Full, filterable project list |
| **Contact** (`/contact`) | Contact form that sends emails via Resend |

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) + [tw-animate-css](https://www.npmjs.com/package/tw-animate-css)
- **Components:** [shadcn/ui](https://ui.shadcn.com/) & [Base UI](https://base-ui.com/)
- **Icons:** [lucide-react](https://lucide.dev/)
- **Email:** [Resend](https://resend.com/)
- **Analytics:** [Vercel Analytics](https://vercel.com/analytics)
- **Package Manager:** [pnpm](https://pnpm.io/)

## 📁 Project Structure

```
.
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home page
│   ├── layout.tsx          # Root layout
│   ├── contact/            # Contact page
│   ├── projects/           # Projects page
│   ├── skills/             # Skills page
│   └── api/contact/        # Contact form API route (Resend)
├── components/
│   ├── home/                # Navbar, Hero, Footer, Stats, TechStack...
│   ├── projects/             # Project cards, filters, project data
│   ├── skills/                # Skills data & sections
│   └── ui/                     # Shared/reusable UI components
├── lib/                    # Utility functions
├── public/                 # Static assets (icons, CV, images)
└── next.config.mjs
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/) (this project uses `pnpm@12.3.4`)

### Installation

```bash
# Clone the repository
git clone https://github.com/hamzahaimeur/hamzahaimeur-portfolio.git
cd hamzahaimeur-portfolio

# Install dependencies
pnpm install
```

### Environment Variables

The contact form uses [Resend](https://resend.com/) to send emails. Create a `.env.local` file in the root directory:

```bash
RESEND_API_KEY=your_resend_api_key
```

> Without this variable, the contact form API will respond with a "not configured" message instead of sending an email.

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
pnpm build
pnpm start
```

## 📬 Contact Form

The `/contact` page submits to `app/api/contact/route.ts`, which validates the input (name, email, subject, message) and sends an email via Resend to the site owner, with the sender's email set as the reply-to address.

## 🌐 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/):

1. Push this repository to GitHub.
2. Import the project on [vercel.com/new](https://vercel.com/new).
3. Add the `RESEND_API_KEY` environment variable in the Vercel project settings.
4. Deploy 🎉

## 👤 Author

**Hamza Haimeur** — Front-End Developer

- GitHub: [@hamzahaimeur](https://github.com/hamzahaimeur)
- LinkedIn: [hamzahaimeur](https://www.linkedin.com/in/hamzahaimeur)
- Email: hamzahaimeur01@gmail.com

## 📄 License

This project is open source. Feel free to use it as inspiration for your own portfolio — please avoid copying the content/branding as-is.

---

<div align="center">
Made with care by Hamza Haimeur
</div>
