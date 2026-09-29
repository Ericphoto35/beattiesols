import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Politique cookies | Beattie Sols",
  description: "Cookies utilisés par Beattie Sols et façon d’accepter ou de refuser Google Analytics, Google Maps et Vimeo.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookies"
      intro="Un cookie est un petit fichier déposé sur votre terminal. Certains sont indispensables pour mémoriser votre choix. Les autres ne sont déposés qu’après un accord clair."
    >
      <h2>Pas d’acceptation par la navigation</h2>
      <p>
        Continuer à lire le site, le faire défiler ou le fermer ne vaut pas acceptation. Tant que vous n’avez pas cliqué sur
        « Tout accepter », « Enregistrer » ou un bouton qui active un service précis, Google Analytics, Google Maps et Vimeo
        ne sont pas chargés.
      </p>
      <p>
        Le bandeau propose au même niveau « Tout refuser » et « Tout accepter », ainsi que « Personnaliser ». Vous pouvez
        modifier ce choix avec le lien « Gérer les cookies » en bas de page. Le choix est conservé six mois, puis le bandeau
        est à nouveau proposé.
      </p>
      <h2>Cookies nécessaires</h2>
      <p>
        Le cookie <code>beattie_consent</code> et une donnée équivalente dans le stockage local du navigateur enregistrent
        uniquement les cases que vous avez acceptées ou refusées. Durée : six mois. Base : intérêt légitime à prouver le
        respect de votre choix. Ce traceur ne sert pas à mesurer l’audience.
      </p>
      <h2>Mesure d’audience — Google Analytics</h2>
      <p>
        Si vous l’acceptez, le script Google Analytics 4 (identifiant {company.analyticsId}) est ajouté à la page. Il dépose
        des cookies tels que <code>_ga</code> et <code>_ga_*</code>, pour une durée maximale de treize mois, afin de compter
        les visites et les pages consultées. Éditeur : Google Ireland Limited / Google LLC. Si vous retirez l’accord, le
        script est retiré et les cookies d’audience lisibles sur ce site sont effacés.
      </p>
      <h2>Carte — Google Maps</h2>
      <p>
        Le plan d’accès du siège n’est pas affiché par défaut. Après accord, un cadre Google Maps est chargé depuis
        maps.google.com. Google peut alors déposer ses propres cookies (par exemple <code>NID</code>) et recevoir votre
        adresse IP. Sans accord, seule l’adresse postale est indiquée : {company.shortAddress}.
      </p>
      <h2>Vidéo — Vimeo</h2>
      <p>
        La vidéo « Une journée ordinaire » (lecteur Vimeo, identifiant 168791578) reste bloquée derrière un bouton. Après
        accord, le lecteur player.vimeo.com est chargé. Vimeo peut déposer des cookies et recevoir des données techniques de
        lecture. Le paramètre <code>dnt=1</code> est ajouté à l’adresse du lecteur pour limiter le suivi, sans remplacer votre
        consentement.
      </p>
      <h2>Retrait du consentement</h2>
      <p>
        Le lien « Gérer les cookies » rouvre le panneau. « Tout refuser » désactive l’audience, la carte et la vidéo. Vous
        pouvez aussi bloquer les cookies dans votre navigateur. Ce réglage peut empêcher la mémorisation de votre choix et
        faire réapparaître le bandeau.
      </p>
    </LegalPage>
  );
}
