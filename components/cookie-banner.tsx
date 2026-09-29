"use client";

import { useState } from "react";
import Link from "next/link";
import { useConsent } from "@/components/consent-context";
import type { ConsentChoice } from "@/lib/consent";

const emptyChoice: ConsentChoice = { analytics: false, maps: false, video: false };

export function CookieBanner({ mode }: { mode: "banner" | "settings" }) {
  const { consent, save, openSettings, closeSettings } = useConsent();
  const [draft, setDraft] = useState<ConsentChoice>(consent ?? emptyChoice);

  if (mode === "settings") {
    return (
      <dialog className="cookie-banner" open aria-labelledby="cookie-title">
        <p id="cookie-title" className="cookie-title">
          Choisir les cookies
        </p>
        <p>
          Les cookies nécessaires mémorisent uniquement ce choix. Les autres services restent bloqués tant que vous ne les
          acceptez pas. Vous pouvez revenir sur ce choix à tout moment.
        </p>
        <ul className="cookie-choices">
          <li>
            <label>
              <input type="checkbox" defaultChecked disabled /> Cookies nécessaires
            </label>
            <span>Mémorisation de votre décision, six mois. Ils ne servent pas à vous suivre.</span>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                checked={draft.analytics}
                onChange={(event) => setDraft({ ...draft, analytics: event.target.checked })}
              />{" "}
              Mesure d’audience — Google Analytics
            </label>
            <span>Statistiques de fréquentation. Cookies déposés par Google uniquement si vous cochez cette case.</span>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                checked={draft.maps}
                onChange={(event) => setDraft({ ...draft, maps: event.target.checked })}
              />{" "}
              Carte — Google Maps
            </label>
            <span>Affichage du plan d’accès. Le contenu Google n’est pas chargé sans cet accord.</span>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                checked={draft.video}
                onChange={(event) => setDraft({ ...draft, video: event.target.checked })}
              />{" "}
              Vidéo — Vimeo
            </label>
            <span>Lecture de la vidéo « Une journée ordinaire ». Le lecteur Vimeo n’est pas chargé sans cet accord.</span>
          </li>
        </ul>
        <div className="cookie-actions">
          <button type="button" className="btn ink" onClick={() => save(emptyChoice)}>
            Tout refuser
          </button>
          <button type="button" className="btn blue" onClick={() => save(draft)}>
            Enregistrer
          </button>
          <button type="button" className="btn ghost" onClick={() => save({ analytics: true, maps: true, video: true })}>
            Tout accepter
          </button>
          <button type="button" className="btn ghost" onClick={closeSettings}>
            Fermer
          </button>
        </div>
        <Link href="/cookies">En savoir plus sur les cookies</Link>
      </dialog>
    );
  }

  return (
    <dialog className="cookie-banner" open aria-labelledby="cookie-title">
      <p id="cookie-title" className="cookie-title">
        Cookies et services tiers
      </p>
      <p>
        Ce site peut utiliser Google Analytics (mesure d’audience), Google Maps (plan d’accès) et Vimeo (vidéo). Ces services
        déposent des cookies et ne sont activés qu’après un accord explicite. Consulter le site ne vaut pas acceptation. Vous
        pouvez tout accepter, tout refuser ou choisir service par service.{" "}
        <Link href="/cookies">Politique cookies</Link>.
      </p>
      <div className="cookie-actions">
        <button type="button" className="btn ink" onClick={() => save(emptyChoice)}>
          Tout refuser
        </button>
        <button type="button" className="btn blue" onClick={() => save({ analytics: true, maps: true, video: true })}>
          Tout accepter
        </button>
        <button type="button" className="btn ghost" onClick={openSettings}>
          Personnaliser
        </button>
      </div>
    </dialog>
  );
}
