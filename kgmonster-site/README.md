# KGMonster Marketing – nettside

Dette er et Next.js 14 + Tailwind prosjekt for kgmonster.com.

## Kom i gang lokalt
1. Installer Node.js 18+
2. `npm install`
3. `npm run dev` → http://localhost:3000

## Skjema/epost (Resend)
- Lag en gratis konto på https://resend.com
- Opprett API Key og verifiser avsenderdomene (kgmonster.com) senere
- Sett miljøvariabler i Vercel:
  - `RESEND_API_KEY` = din nøkkel
  - `CONTACT_TO` = e-posten som skal motta henvendelser (f.eks. hello@kgmonster.com)

## Deploy til Vercel
- Push prosjektet til GitHub
- Importer i Vercel og deploy
- Koble domenet kgmonster.com under Settings → Domains
- Pek DNS:
  - A (apex): 76.76.21.21
  - CNAME (www): cname.vercel-dns.com

## Redigere innhold
- `app/page.tsx` – alt innhold på forsiden (seksjoner/tekster)
- `public/logo.png` – logo i headeren
- `app/layout.tsx` – metadata/SEO

Lykke til!
