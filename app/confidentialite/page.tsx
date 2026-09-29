import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Beattie Sols",
  description: "Informations sur le traitement des données collectées par les formulaires Beattie Sols.",
};

export default function ConfidentialitePage() {
  return (
    <LegalPage
      title="Confidentialité"
      intro="Cette page décrit comment Beattie Sols traite les données personnelles recueillies sur ce site, notamment via les formulaires d’accueil et de demande de devis."
    >
      <h2>Responsable du traitement</h2>
      <p>
        {company.legalName}, {company.shortAddress}. Téléphone : {company.phoneDisplay}. {company.name} ne désigne pas de
        délégué à la protection des données. Toute demande relative aux données s’adresse au responsable, par courrier au siège
        ou par téléphone.
      </p>
      <h2>Données collectées</h2>
      <p>Les formulaires de l’accueil et de la page Devis demandent :</p>
      <ul>
        <li>nom ;</li>
        <li>prénom ;</li>
        <li>adresse e-mail ;</li>
        <li>numéro de téléphone ;</li>
        <li>message décrivant la demande ou le projet.</li>
      </ul>
      <p>
        Le nom, l’adresse e-mail et le message sont nécessaires pour répondre. Le prénom et le téléphone sont facultatifs.
        Aucune donnée n’est demandée pour de la prospection commerciale.
      </p>
      <h2>Finalités et bases légales</h2>
      <ul>
        <li>Répondre à un message et donner suite à une prise de contact : intérêt légitime (article 6.1.f du RGPD).</li>
        <li>Étudier une demande et établir un devis : mesures précontractuelles (article 6.1.b du RGPD).</li>
        <li>
          Mesurer l’audience, afficher Google Maps ou lire la vidéo Vimeo : consentement (article 6.1.a du RGPD), recueilli
          avant le dépôt des cookies concernés. Le détail figure sur la page <Link href="/cookies">Cookies</Link>.
        </li>
      </ul>
      <h2>Destinataires</h2>
      <p>
        Les messages sont destinés à {company.name}, pour le traitement des demandes. Ils ne sont ni vendus ni cédés. Google
        (Analytics et Maps) et Vimeo ne reçoivent des données techniques que si vous avez accepté le service correspondant.
      </p>
      <h2>Transferts hors de l’Union européenne</h2>
      <p>
        Google et Vimeo peuvent traiter des données aux États-Unis. Ces transferts n’ont lieu qu’après votre accord, et
        s’appuient sur les clauses contractuelles types de la Commission européenne ou un mécanisme équivalent proposé par ces
        prestataires. Sans accord, leurs contenus ne sont pas chargés.
      </p>
      <h2>Durées de conservation</h2>
      <ul>
        <li>Messages et devis : trois ans à compter du dernier échange, puis suppression ou archivage limité si une obligation légale l’exige.</li>
        <li>Preuve du choix cookies : six mois.</li>
        <li>Mesure d’audience, si vous l’acceptez : treize mois au plus pour les cookies concernés.</li>
      </ul>
      <h2>Vos droits</h2>
      <p>
        Vous pouvez demander l’accès, la rectification, l’effacement, la limitation du traitement et, selon le cas, la
        portabilité. Vous pouvez vous opposer à un traitement fondé sur l’intérêt légitime, et retirer à tout moment un
        consentement cookies sans affecter la licéité du traitement déjà réalisé. Vous pouvez aussi définir des directives sur
        le sort de vos données après votre décès.
      </p>
      <p>
        Pour exercer ces droits : courrier à {company.address}, ou téléphone au {company.phoneDisplay}. Une réponse est
        apportée dans un délai d’un mois. Vous pouvez introduire une réclamation auprès de la CNIL, 3 place de Fontenoy, TSA
        80715, 75334 Paris Cedex 07, <a href="https://www.cnil.fr">www.cnil.fr</a>.
      </p>
      <h2>Sécurité</h2>
      <p>
        {company.name} limite l’accès aux messages aux personnes qui en ont besoin pour répondre. Aucune décision produisant
        un effet juridique n’est prise de façon automatisée à partir de ces formulaires.
      </p>
    </LegalPage>
  );
}
