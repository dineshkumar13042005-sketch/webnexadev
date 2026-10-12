# WebnexaDev — Premium IT Services Startup Website

A modern, high-performance, conversion-engineered digital agency website built for **WebnexaDev** — *"Your Digital Growth Partner — Websites, Software & Smart Business Solutions."*

Designed to convert business owners into genuine project enquiries through direct WhatsApp routing (`+91 7010957511`) and a validated project enquiry backend.

---

## 🚀 Key Highlights & Features

- **Conversion-First UX & WhatsApp Integration:**
  - Direct WhatsApp links across every section with tailored, contextual pre-filled messages.
  - Floating WhatsApp action button with tooltip (`Chat with WebnexaDev`) and pulse animation.
  - Dual action enquiry form: submit to the backend API or continue on WhatsApp with formatted details.
- **Visual Design System:**
  - Modern dark-theme aesthetic (`#0B0F19` background, `#111827` cards).
  - Elegant purple (`#8B5CF6`) and cyan (`#06B6D4`) gradient accents.
  - Glassmorphic panels with subtle backdrop blur, tech grid patterns, and glowing ambient orbs.
  - Interactive hero dashboard with live metrics, CRM pipeline simulation, and Lighthouse 99 score indicator.
- **Honest, Verifiable Credibility:**
  - Strictly honest metrics: `1+ Happy Client`, verified completed production projects.
  - Zero fabricated client counts, fake revenue numbers, or misleading logos.
- **6 Core IT Services:**
  1. E-commerce Website Development
  2. Meta Ads Landing Pages
  3. Custom CRM Software
  4. Business Website Development
  5. AI Chatbots and Automation
  6. Meta Ads and Lead Generation Solutions
- **Exclusive Featured Project:**
  - **Siva Construction** (Coimbatore, Tamil Nadu) — Residential & commercial construction website.
  - Interactive **Project Preview Modal** showing desktop and mobile layouts, category filters (Villas, Commercial, Turnkey), and direct quotation flow.
  - Strictly excludes any unauthorized or unverified brands.
- **Validated Project Enquiry Backend:**
  - Fully working `/api/enquiry` App Router route with data validation, email format checking, and rapid duplicate submission prevention (HTTP 429).
  - Generates unique reference IDs (e.g. `ENQ-XXXX-XXXX`).
  - Webhook integration point for real-time notifications to Slack, Discord, Telegram, or email.
- **Technical SEO & Performance:**
  - Dynamic OpenGraph and Twitter meta cards.
  - Auto-generated `robots.txt` (`src/app/robots.ts`) and `sitemap.xml` (`src/app/sitemap.ts`).
  - Accessible semantics, keyboard navigation, and `prefers-reduced-motion` compliance.

---

## 🛠 Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

---

## 📂 Project Architecture

```
web/
├── .env.example                    # Environment variable template
├── package.json                    # Project dependencies & scripts
├── tsconfig.json                   # TypeScript configuration
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── enquiry/
│   │   │       └── route.ts        # POST endpoint for project enquiries
│   │   ├── favicon.ico
│   │   ├── globals.css             # Tailwind v4 theme, custom dark styles & glassmorphism
│   │   ├── layout.tsx              # Root HTML structure, fonts, & SEO metadata
│   │   ├── page.tsx                # Main assembled homepage
│   │   ├── robots.ts               # Automated search engine robots.txt
│   │   └── sitemap.ts              # Automated sitemap.xml generator
│   ├── components/
│   │   ├── BrandLogo.tsx           # Custom code-bracket vector logo
│   │   ├── FAQAccordion.tsx        # 10 expandable FAQ items with WhatsApp CTA
│   │   ├── FinalCTA.tsx            # Purple-cyan gradient conversion section
│   │   ├── Footer.tsx              # Site links, WhatsApp details, & Privacy Notice modal
│   │   ├── HeroSection.tsx         # Two-column hero with interactive dashboard mockup
│   │   ├── Navbar.tsx              # Sticky glassmorphic navbar with mobile drawer
│   │   ├── PortfolioSection.tsx    # Siva Construction showcase & mockups
│   │   ├── ProcessTimeline.tsx     # 4-phase horizontal/vertical delivery process
│   │   ├── ProjectEnquiryForm.tsx  # Validated form with API & WhatsApp flows
│   │   ├── ServiceCard.tsx         # Reusable individual service card with features list
│   │   ├── ServicesSection.tsx     # 6-card services grid with honest disclaimers
│   │   ├── SivaPreviewModal.tsx    # Interactive Siva Construction preview modal
│   │   ├── TrustStrip.tsx          # Verified credibility strip
│   │   ├── WhatsAppButton.tsx      # Fixed floating button & inline CTA buttons
│   │   └── WhyChooseUs.tsx         # 4 core business-first philosophy blocks
│   └── config/
│       └── site.ts                 # Central source of truth for all brand content & URLs
```

---

## 💻 Getting Started Locally

### 1. Prerequisites
Ensure you have **Node.js 18+** installed:
```bash
node -v
npm -v
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### 4. Build for Production
To test production compilation and static generation:
```bash
npm run build
npm run start
```

---

## ⚙️ Configuration & Customization

All primary brand information, phone numbers, WhatsApp pre-filled copy, services, portfolio details, and FAQs are managed in a single central file:

👉 **[`src/config/site.ts`](src/config/site.ts)**

### Changing the WhatsApp Number:
In `src/config/site.ts`:
```typescript
contact: {
  whatsappNumber: "+91 7010957511",
  whatsappRawNumber: "917010957511",
  whatsappBaseUrl: "https://wa.me/917010957511",
  ...
}
```

### Connecting Enquiry Form to Real-Time Notifications
The enquiry form posts to `/api/enquiry` (`src/app/api/enquiry/route.ts`).
To receive instant notifications whenever a user submits an enquiry:

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Add your Slack/Discord/Make/Zapier webhook URL to `ENQUIRY_WEBHOOK_URL`:
   ```env
   ENQUIRY_WEBHOOK_URL="https://hooks.slack.com/services/YOUR/WEBHOOK/URL"
   ```
Whenever an enquiry is submitted, `/api/enquiry` automatically forwards the client's information to your webhook!

---

## 🚢 Deployment Instructions (Vercel)

The fastest and most optimized way to deploy this Next.js project is on **Vercel**:

### Method 1: Deploy with Vercel Git Integration (Recommended)
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository.
4. Set the Framework Preset to **Next.js** (detected automatically).
5. Add any environment variables (e.g. `NEXT_PUBLIC_SITE_URL=https://webnexadev.com`).
6. Click **Deploy**. Vercel will build and assign an SSL-secured production URL.

### Method 2: Deploy with Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## 📋 Production Launch Checklist

Before making the website live to the public, check off the following items:

- [x] Next.js App Router & TypeScript build compiles cleanly with zero errors.
- [x] Verified WhatsApp direct link configured (`+91 7010957511`).
- [x] All 6 IT services documented with feature bullets and pre-filled WhatsApp messages.
- [x] Siva Construction featured as the only client project with interactive preview.
- [x] Project enquiry validation and duplicate submission rate limiting active.
- [x] Privacy notice modal accessible in footer.
- [ ] Connect custom production domain (e.g. `webnexadev.com`) to Vercel DNS.
- [ ] Update `NEXT_PUBLIC_SITE_URL` in `.env.local` or Vercel dashboard to the final domain.
- [ ] (Optional) Add your Slack/Discord webhook URL to `ENQUIRY_WEBHOOK_URL` to receive instant lead notifications on your phone.
- [ ] (Optional) Once Siva Construction's live production URL is deployed, update the "View Live Project" link in `src/config/site.ts`.
