import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { navn, epost, telefon, melding } = await req.json();
    const resend = new Resend(process.env.RESEND_API_KEY);
    const toEmail = process.env.CONTACT_TO ?? "hello@kgmonster.com";

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set. Contact form will not send.");
      return new Response(JSON.stringify({ ok: false, error: "Email service not configured" }), { status: 500 });
    }

    await resend.emails.send({
      from: "KGMonster <no-reply@kgmonster.com>",
      to: toEmail,
      reply_to: typeof epost === "string" ? epost : undefined,
      subject: `Ny forespørsel fra ${navn ?? "ukjent"}`,
      text: `Navn: ${navn}
E-post: ${epost}
Telefon: ${telefon}

${melding}`
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ ok: false }), { status: 500 });
  }
}
