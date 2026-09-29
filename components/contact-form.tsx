"use client";

import { useState, type SyntheticEvent } from "react";
import Link from "next/link";
import { company } from "@/lib/company";

function textField(data: FormData, key: string) {
  const value = data.get(key);
  return typeof value === "string" ? value.trim() : "";
}

const SUCCESS = "Merci, votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais.";

export function ContactForm({ variant }: { variant: "home" | "devis" }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nom = textField(data, "nom");
    const email = textField(data, "email");
    const message = textField(data, "message");
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!nom || !emailOk || message.length < 2) {
      setError("Merci de renseigner votre nom, une adresse e-mail valide et votre message.");
      return;
    }
    setPending(true);
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          nom,
          prenom: textField(data, "prenom"),
          email,
          telephone: textField(data, "telephone"),
          message,
          origine: variant,
        }),
      });
      const payload: unknown = await response.json();
      const serverError =
        payload && typeof payload === "object" && "error" in payload && typeof payload.error === "string"
          ? payload.error
          : "";
      if (!response.ok) {
        setError(serverError || "L’envoi n’a pas abouti. Réessayez ou appelez le 06 22 28 54 76.");
        return;
      }
      setSent(true);
    } catch {
      setError("L’envoi n’a pas abouti. Réessayez ou appelez le 06 22 28 54 76.");
    } finally {
      setPending(false);
    }
  }

  if (sent) {
    return (
      <output className="form-success">{SUCCESS}</output>
    );
  }

  return (
    <form className={`lead-form ${variant}`} onSubmit={onSubmit} noValidate>
      <div className="form-grid">
        <label>
          Nom
          <input name="nom" autoComplete="name" required placeholder="Votre nom" />
        </label>
        <label>
          Prénom
          <input name="prenom" autoComplete="name" placeholder="Votre prénom" />
        </label>
        <label>
          E-mail
          <input name="email" type="email" autoComplete="email" required placeholder="Votre e-mail" />
        </label>
        <label>
          Téléphone
          <input name="telephone" type="tel" autoComplete="tel" placeholder="Votre numéro" />
        </label>
      </div>
      <label>
        Message
        <textarea name="message" required rows={5} placeholder="Décrivez votre projet" />
      </label>
      <p className="form-notice">
        Les informations de ce formulaire (nom, prénom, e-mail, téléphone et message) sont traitées par {company.legalName},{" "}
        {company.shortAddress}, uniquement pour répondre à votre demande
        {variant === "devis" ? " et préparer un devis" : ""}. Base légale : mesures précontractuelles, ou intérêt légitime à
        répondre à une prise de contact. Elles sont destinées à {company.name} et conservées trois ans à compter du dernier
        échange. Vous pouvez accéder à ces données, les rectifier, demander leur effacement, en limiter le traitement ou vous y
        opposer, en écrivant au siège ou en appelant le {company.phoneDisplay}. Vous pouvez aussi saisir la CNIL.{" "}
        <Link href="/confidentialite">Politique de confidentialité</Link>.
      </p>
      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      <button className={variant === "home" ? "btn light" : "btn blue"} type="submit" disabled={pending}>
        {pending ? "Envoi…" : "Envoyer"}
      </button>
    </form>
  );
}
