import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KGMonster Marketing",
  description: "Resultatdrevet markedsføringsbyrå: betalt annonsering, CRO og landingssider.",
  openGraph: {
    title: "KGMonster Marketing",
    description: "Resultatdrevet markedsføring for vekst.",
    url: "https://kgmonster.com",
    siteName: "KGMonster",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
