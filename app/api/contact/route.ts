const SUCCESS = "Merci, votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais.";

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Message illisible." }, { status: 400 });
  }
  const data = payload && typeof payload === "object" ? (payload as Record<string, unknown>) : {};
  const nom = text(data.nom);
  const email = text(data.email);
  const message = text(data.message);
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!nom || !emailOk || message.length < 2) {
    return Response.json(
      { error: "Merci de renseigner votre nom, une adresse e-mail valide et votre message." },
      { status: 400 },
    );
  }
  return Response.json({ message: SUCCESS });
}
