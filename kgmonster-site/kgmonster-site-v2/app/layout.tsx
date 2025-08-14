import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KGMonster – Mer vekst. Mer omsetning. Flere kunder.",
  description:
    "Du gjør det du gjør best, mens vi håndterer markedsføringen. Sammen tar vi bedriften til neste nivå. Enkel kontakt, tydelig resultatfokus og garanti.",
  openGraph: {
    title: "KGMonster Marketing",
    description:
      "Resultatdrevet markedsføring med PAS-struktur: Problem, Agiter, Løs.",
    url: "https://kgmonster.com",
    siteName: "KGMonster",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
    locale: "nb_NO",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
