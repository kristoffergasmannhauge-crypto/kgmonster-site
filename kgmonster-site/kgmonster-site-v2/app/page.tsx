'use client';

import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [status, setStatus] = useState<null | "ok" | "err">(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      setLoading(true);
      setStatus(null);
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (r.ok) { form.reset(); setStatus("ok"); }
      else setStatus("err");
    } catch { setStatus("err"); }
    finally { setLoading(false); }
  }

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-neutral-200">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3 font-semibold">
            <Image src="/logo.png" alt="KGMonster" width={36} height={36} className="rounded" />
            <span className="tracking-tight">KGMonster</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li><a href="#pas" className="hover:text-neutral-600">Hvorfor oss</a></li>
            <li><a href="#valg" className="hover:text-neutral-600">Dine valg</a></li>
            <li><a href="#kontakt" className="hover:text-neutral-600">Kontakt</a></li>
          </ul>
          <div className="hidden md:block">
            <a href="#kontakt" className="inline-flex items-center rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium hover:bg-neutral-100 transition">Snakk med oss</a>
          </div>
          <button className="md:hidden group inline-flex items-center justify-center w-10 h-10 rounded-xl border border-neutral-200"
            onClick={() => document.getElementById('mobile')?.classList.toggle('hidden')}
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
            <li><a href="#pas" className="block rounded-lg px-3 py-2 hover:bg-neutral-100" onClick={() => document.getElementById('mobile')?.classList.add('hidden')}>Hvorfor oss</a></li>
            <li><a href="#valg" className="block rounded-lg px-3 py-2 hover:bg-neutral-100" onClick={() => document.getElementById('mobile')?.classList.add('hidden')}>Dine valg</a></li>
            <li><a href="#kontakt" className="block rounded-lg px-3 py-2 hover:bg-neutral-100" onClick={() => document.getElementById('mobile')?.classList.add('hidden')}>Kontakt</a></li>
          </ul>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_50%_-10%,#e5e7eb,transparent)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                Mer vekst. Mer omsetning. Flere kunder. <em className="not-italic underline decoration-[var(--accent)]">Garantert.</em>
              </h1>
              <p className="mt-4 text-neutral-700 text-lg">
                Du gjør det du gjør best, mens vi håndterer markedsføringen. Sammen tar vi bedriften din til neste nivå.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#kontakt" className="inline-flex items-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800">Snakk med oss i dag</a>
                <a href="#pas" className="inline-flex items-center rounded-xl border border-neutral-200 px-5 py-3 text-sm font-medium hover:bg-neutral-100">Hvorfor dette fungerer</a>
              </div>
              <p className="mt-4 text-sm text-neutral-600">Målet med nettsiden er enkelt: få deg til å ta kontakt – uten styr.</p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-neutral-200 to-white blur-2xl" />
              <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-6">
                <div className="aspect-video w-full rounded-xl bg-neutral-100 grid place-items-center">
                  <div className="text-center px-6">
                    <Image src="/logo.png" alt="KGMonster" width={96} height={96} className="mx-auto mb-3 rounded" />
                    <p className="text-sm text-neutral-600">Enkelt, fokusert og konverteringsdrevet. Ingen unødvendige distraksjoner.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAS */}
      <section id="pas" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">Problem → Agiter → Løsning (PAS)</h2>
          <p className="mt-2 text-neutral-700">Vi strukturerer kommunikasjon og kampanjer etter PAS – det mest effektive rammeverket for å få oppmerksomhet og konvertere.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Problem</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Bedrifter vet at markedsføring gir vekst, men mangler tid, kompetanse og kapasitet til å gjøre det riktig.
            </p>
            <ul className="mt-3 text-sm text-neutral-700 space-y-2">
              <li>• Lite forutsigbar leadstrøm</li>
              <li>• Høy CPA, lav konvertering</li>
              <li>• Kampanjer uten tydelig strategi</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Agiter</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Jo lenger du venter, jo mer taper du. Konkurrentene spiser markedsandeler hver uke, og sporadiske tiltak blir dyrt.
            </p>
            <ul className="mt-3 text-sm text-neutral-700 space-y-2">
              <li>• Tid og penger i tiltak som ikke virker</li>
              <li>• Feilansettelser eller byråer som ikke prioriterer deg</li>
              <li>• Ingen eierskap til læring og data</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Løsning</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Vi tar totalansvar: strategi → produksjon → drift → optimalisering. Du fokuserer på drift – vi leverer vekst.
            </p>
            <ul className="mt-3 text-sm text-neutral-700 space-y-2">
              <li>• Skreddersydd strategi og kanalvalg</li>
              <li>• KPI-styring og kontinuerlig optimalisering</li>
              <li>• Resultatgaranti – vi deler risikoen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Options / Unique solution */}
      <section id="valg" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">Dine alternativer – og hvorfor vår løsning skiller seg ut</h2>
          <p className="mt-2 text-neutral-700">Flere veier til mål – men ikke alle er like effektive.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {title:"Gjør alt selv (DIY)",desc:"Koster minst i kroner – mest i tid. Lærerikt, men tar fokus fra kjernevirksomheten."},
            {title:"Ansett internt",desc:"Kan bli bra, men har risiko for feilansettelse og løpende faste kostnader."},
            {title:"Leie stort byrå",desc:"Ofte flinke, men små bedrifter havner bak i køen og får juniorressurser."},
          ].map(card => (
            <div key={card.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Vår unike løsning</h3>
          <ul className="mt-2 text-sm text-neutral-700 space-y-2">
            <li>• Lokal og tilgjengelig – direkte dialog uten mellomledd.</li>
            <li>• Selektiv kundeliste – vi sier nei når vi ikke ser tydelig potensial.</li>
            <li>• Alltid oppdatert – vi bygger på det som fungerer i dag, ikke i fjor.</li>
            <li>• Garanti – vi deler risikoen for å vise at resultatene betyr alt.</li>
            <li>• Fokus på salg og vekst – ikke “fine kampanjer” uten effekt.</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">Snakk med oss</h2>
          <p className="mt-2 text-neutral-700">
            Målet er enkelt: at du tar kontakt. Start med noen få felter – så tar vi resten.
          </p>
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
              <label htmlFor="beskrivelse" className="text-sm font-medium">Hva kan vi hjelpe deg med?</label>
              <textarea id="beskrivelse" name="melding" rows={4} required className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300" placeholder="Kort om utfordringen din – f.eks. 'få flere leads', 'lav ROAS', 'ny landingsside'." />
            </div>
            <button type="submit" disabled={loading} className="inline-flex items-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800 disabled:opacity-60">
              {loading ? 'Sender...' : 'Få gratis vurdering'}
            </button>
            {status === 'ok' && <p className="text-sm text-emerald-600">Takk! Vi svarer normalt innen 24 timer.</p>}
            {status === 'err' && <p className="text-sm text-red-600">Noe gikk galt. Prøv igjen senere.</p>}
            <p className="text-xs text-neutral-500">Ved innsending godtar du at vi kontakter deg per e‑post/telefon.</p>
          </form>

          <aside className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Dette får du</h3>
              <ul className="mt-2 text-sm text-neutral-700 space-y-2">
                <li>• Klar anbefaling for rask effekt (PAS-basert)</li>
                <li>• Prioritert liste over tiltak</li>
                <li>• Estimert effekt og neste steg</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Senere tillegg</h3>
              <p className="mt-2 text-sm text-neutral-700">Lead magnet + autoresponder for e-postinnsamling og oppfølging.</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer */}
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
