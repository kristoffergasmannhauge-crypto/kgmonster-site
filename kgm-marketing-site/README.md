# KGM Marketing – PAS-landing (Next.js 14 + Tailwind)

**Mål:** Enkel, fokusert side som konverterer besøkende til leads. Hero + PAS + alternativer/unik løsning + kontaktskjema.

## Kjør lokalt
1. Node.js 18+
2. `npm install`
3. `npm run dev` → http://localhost:3000

## Deploy på Vercel
- Sørg for at prosjektet ligger i repoets rot (eller sett *Root Directory* riktig i Vercel).
- Framework: **Next.js**.
- (Valgfritt for e-post) Miljøvariabler:
  - `RESEND_API_KEY`
  - `CONTACT_TO` (eposten som skal motta henvendelser)

## Rediger innhold
- Forside: `app/page.tsx`
- SEO/metadata: `app/layout.tsx`
- Logo/OG: `public/logo.png`, `public/og.png`
