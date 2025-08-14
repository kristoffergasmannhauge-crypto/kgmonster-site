'use client';

import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [status, setStatus] = useState<null | "ok" | "err">(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    try {
      setLoading(true);
      setStatus(null);
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(payload)
      });
      if (r.ok) {
        form.reset();
        setStatus("ok");
      } else {
        setStatus("err");
      }
    } catch (e) {
      setStatus("err");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-neutral-200">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3 font-semibold">
            <Image src="/logo.png" alt="KGMonster logo" width={36} height={36} className="rounded" />
            <span className="tracking-tight">KGMonster</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li><a href="#tjenester" className="hover:text-neutral-600">Tjenester</a></li>
            <li><a href="#case" className="hover:text-neutral-600">Case</a></li>
            <li><a href="#kontakt" className="hover:text-neutral-600">Kontakt</a></li>
          </ul>
          <div className="hidden md:block">
            <a href="#kontakt" className="inline-flex items-center rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium hover:bg-neutral-100 transition">Få forslag</a>
          </div>
          <button className="md:hidden group inline-flex items-center justify-center w-10 h-10 rounded-xl border border-neutral-200"
            onClick={() => {
              const m = document.getElementById('mobile');
              if (m) m.classList.toggle('hidden');
            }}
            aria-label="Åpne meny">
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-neutral-900"></span>
              <span className="block h-0.5 w-5 bg-neutral-900"></span>
              <span className="block h-0.5 w-5 bg-neutral-900"></span>
            </div>
          </button>
        </nav>
        <div id="mobile" className="md:hidden hidden border-t border-neutral-200">
          <ul className="px-4 py-3 space-y-2 text-sm">
            <li><a href="#tjenester" className="block rounded-lg px-3 py-2 hover:bg-neutral-100"
              onClick={() => document.getElementById('mobile')?.classList.add('hidden')}>Tjenester</a></li>
            <li><a href="#case" className="block rounded-lg px-3 py-2 hover:bg-neutral-100"
              onClick={() => document.getElementById('mobile')?.classList.add('hidden')}>Case</a></li>
            <li><a href="#kontakt" className="block rounded-lg px-3 py-2 hover:bg-neutral-100"
              onClick={() => document.getElementById('mobile')?.classList.add('hidden')}>Kontakt</a></li>
          </ul>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_50%_-10%,#e5e7eb,transparent)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 text-xs tracking-wide uppercase">Byrå for vekst</span>
              <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight">Mer vekst med betalt annonsering + CRO</h1>
              <p className="mt-4 text-neutral-600 text-lg">KGMonster hjelper deg å skalere kundereisen med Meta/TikTok/Google-annonser, landingssider og konverteringsoptimalisering.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#kontakt" className="inline-flex items-center rounded-xl bg-neutral-900 px-5 py-3 text-white text-sm font-medium hover:bg-neutral-800">Få gratis forslag</a>
                <a href="#tjenester" className="inline-flex items-center rounded-xl border border-neutral-200 px-5 py-3 text-sm font-medium hover:bg-neutral-100">Se tjenester</a>
              </div>
              <ul className="mt-6 text-sm text-neutral-600 space-y-2">
                <li>• 100% mobiltilpasset</li>
                <li>• Rask side, god score</li>
                <li>• Klart for SEO og deling</li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-neutral-200 to-white blur-2xl" />
              <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-6">
                <div className="aspect-video w-full rounded-xl bg-neutral-100 grid place-items-center">
                  <div className="text-center">
                    <Image src="/logo.png" alt="KGMonster" width={96} height={96} className="mx-auto mb-3 rounded" />
                    <p className="text-sm text-neutral-600">Bytt ut bildet over med et case- eller produktbilde</p>
                  </div>
                </div>
                <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
                  <div className="rounded-xl border border-neutral-200 p-3">
                    <p className="font-medium">Ytelse</p>
                    <p className="text-neutral-600">Rask og stabil</p>
                  </div>
                  <div className="rounded-xl border border-neutral-200 p-3">
                    <p className="font-medium">Design</p>
                    <p className="text-neutral-600">Rent og profesjonelt</p>
                  </div>
                  <div className="rounded-xl border border-neutral-200 p-3">
                    <p className="font-medium">Fleksibilitet</p>
                    <p className="text-neutral-600">Utvid seksjoner enkelt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="tjenester" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Tjenester</h2>
          <p className="mt-2 text-neutral-600">Velg startpakke, eller kombiner fritt. Alt er klart for å skaleres.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {title: 'Paid Social', desc: 'Meta & TikTok – struktur, kreativer og løpende optimalisering.'},
            {title: 'Google Ads', desc: 'Søk, Performance Max og YouTube – full-funnel.'},
            {title: 'CRO / Landingssider', desc: 'Konverteringsdesign som faktisk selger.'},
            {title: 'SEO Grunnmur', desc: 'Teknisk hygiene + innholdsplan.'},
            {title: 'Innhold / UGC', desc: 'Utnytt brukerinnhold for bedre ROAS.'},
            {title: 'Analyse & Tracking', desc: 'GA4, tagger, server-side (valgfritt).'},
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow transition">
              <div className="mb-4 h-10 w-10 rounded-xl bg-neutral-900" />
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case */}
      <section id="case" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Utvalgte resultater</h2>
          <p className="mt-2 text-neutral-600">Bytt ut tekstene med ekte tall, KPI-er og skjermbilder.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {quote: '34% høyere konvertering på 3 uker', author: 'D2C butikk'},
            {quote: 'ROAS 5.2 i Q2', author: 'Nettbutikk, sport'},
            {quote: 'CPA ned 41% med ny landingsside', author: 'SaaS B2B'},
          ].map((t) => (
            <figure key={t.author} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <blockquote className="text-neutral-800">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-neutral-600">{t.author}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">La oss snakke</h2>
          <p className="mt-2 text-neutral-600">Fortell kort hva du trenger, så får du et konkret forslag tilbake.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <form onSubmit={onSubmit} className="lg:col-span-2 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-4">
            <div>
              <label htmlFor="navn" className="text-sm font-medium">Navn</label>
              <input id="navn" name="navn" type="text" required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300" placeholder="Ditt navn" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="epost" className="text-sm font-medium">E‑post</label>
                <input id="epost" name="epost" type="email" required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300" placeholder="deg@firma.no" />
              </div>
              <div>
                <label htmlFor="telefon" className="text-sm font-medium">Telefon</label>
                <input id="telefon" name="telefon" type="tel" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300" placeholder="(+47) 400 00 000" />
              </div>
            </div>
            <div>
              <label htmlFor="melding" className="text-sm font-medium">Melding</label>
              <textarea id="melding" name="melding" rows={4} required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300" placeholder="F.eks. betalt annonsering + landingsside, deadline 1. sept" />
            </div>
            <button type="submit" disabled={loading} className="inline-flex items-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800 disabled:opacity-60">
              {loading ? 'Sender...' : 'Send forespørsel'}
            </button>
            {status === 'ok' && <p className="text-sm text-emerald-600">Takk! Vi tar kontakt snart.</p>}
            {status === 'err' && <p className="text-sm text-red-600">Noe gikk galt. Prøv igjen.</p>}
            <p className="text-xs text-neutral-500">Ved innsending godtar du at vi kontakter deg per e‑post/telefon.</p>
          </form>
          <aside className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Hva du får</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>• Skreddersydd strategi</li>
              <li>• Kreativer som konverterer</li>
              <li>• Data-drevet optimalisering</li>
              <li>• Transparent rapportering</li>
            </ul>
            <h3 className="mt-6 text-lg font-semibold">Leveranse</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>• Ukentlig status</li>
              <li>• Mål/KPI definert</li>
              <li>• 14 dagers feilretting på landingssider</li>
            </ul>
          </aside>
        </div>
      </section>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} KGMonster. Alle rettigheter forbeholdt.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-900">Personvern</a>
            <a href="#" className="hover:text-neutral-900">Vilkår</a>
            <a href="#home" className="hover:text-neutral-900">Til toppen ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
