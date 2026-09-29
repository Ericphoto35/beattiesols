import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Mentions légales | Beattie Sols",
  description: "Éditeur, directeur de la publication et hébergeur du site Beattie Sols.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      title="Mentions légales"
      intro="Informations publiées conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique."
    >
      <h2>Éditeur du site</h2>
      <p>
        {company.legalName}, {company.form} au capital de {company.capital}.
      </p>
      <p>Siège social : {company.address}.</p>
      <p>Immatriculée au {company.rcs}.</p>
      <p>SIREN : {company.siren}. SIRET du siège : {company.siret}.</p>
      <p>Numéro de TVA intracommunautaire : {company.tva}.</p>
      <p>Code APE : {company.ape}.</p>
      <p>
        Téléphone : <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>.
      </p>
      <h2>Directeur de la publication</h2>
      <p>
        {company.director}, {company.directorRole}.
      </p>
      <h2>Hébergeur</h2>
      <p>
        {company.host.name}, {company.host.address}. Site : <a href={company.host.url}>{company.host.url}</a>.
      </p>
      <h2>Activité</h2>
      <p>
        {company.name} réalise des travaux de revêtements de sols et de murs, de peinture et de décoration, pour les
        particuliers et les professionnels, à Rennes et en Bretagne.
      </p>
      <h2>Propriété intellectuelle</h2>
      <p>
        Les textes, photographies, marques et éléments graphiques de ce site sont protégés. Toute reproduction non autorisée
        est interdite, sauf usage privé ou courte citation avec mention de la source.
      </p>
      <h2>Contact</h2>
      <p>
        Pour toute question sur le site ou pour exercer vos droits sur vos données, écrivez au siège ou appelez le{" "}
        {company.phoneDisplay}. La politique de confidentialité est disponible sur la page{" "}
        <Link href="/confidentialite">Confidentialité</Link>.
      </p>
    </LegalPage>
  );
}
