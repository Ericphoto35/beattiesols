import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Conditions générales de vente | Beattie Sols",
  description: "Conditions de devis et de réalisation des travaux de sols, peinture et décoration Beattie Sols.",
};

export default function CgvPage() {
  return (
    <LegalPage
      title="Conditions générales de vente"
      intro="Ces conditions encadrent les devis et les travaux de revêtements de sols, de peinture et de décoration proposés par Beattie Sols aux particuliers et aux professionnels."
    >
      <h2>Identité du prestataire</h2>
      <p>
        {company.legalName}, {company.form} au capital de {company.capital}, siège {company.address}, {company.rcs}, TVA{" "}
        {company.tva}, téléphone {company.phoneDisplay}.
      </p>
      <h2>Devis</h2>
      <p>
        Le devis est gratuit et sans engagement. Sauf mention différente écrite sur le document, il est valable trente jours à
        compter de sa date d’émission. Il décrit les prestations, les supports concernés, les fournitures retenues et le prix.
        Une demande envoyée par le formulaire ne vaut pas commande.
      </p>
      <h2>Commande et prix</h2>
      <p>
        La commande est formée lorsque le client accepte le devis par écrit (signature ou accord explicite). Les prix
        applicables sont ceux du devis accepté. Pour un consommateur, ils sont indiqués toutes taxes comprises. Pour un
        professionnel, le devis précise le montant hors taxes et la TVA. Les modalités de paiement, d’acompte éventuel et de
        solde sont indiquées sur le devis, et non sur cette page, afin de correspondre à chaque chantier.
      </p>
      <h2>Exécution</h2>
      <p>
        Les délais figurent sur le devis. Sauf engagement ferme expressément indiqué, ils sont donnés à titre indicatif et
        courent lorsque l’accès au chantier et les validations nécessaires sont réunis. Le client assure un accès au site et
        signale les contraintes connues (accès, humidité, réseaux, copropriété).
      </p>
      <h2>Droit de rétractation</h2>
      <p>
        Lorsque le contrat est conclu à distance ou hors établissement avec un consommateur, celui-ci dispose d’un délai de
        quatorze jours pour se rétracter, sans avoir à motiver sa décision, conformément aux articles L.221-18 et suivants du
        code de la consommation. La demande se fait par tout moyen écrit, y compris un courrier au siège.
      </p>
      <p>
        Si le client demande expressément que les travaux commencent avant la fin de ce délai, il reconnaît que l’exécution a
        débuté. Si la prestation est pleinement exécutée avant la fin du délai, le droit de rétractation peut être perdu dans
        les cas prévus à l’article L.221-28. Les travaux urgents d’intervention expressément sollicités sont aussi exclus
        lorsque la loi le prévoit.
      </p>
      <h2>Garanties</h2>
      <p>
        Les consommateurs bénéficient de la garantie légale de conformité (articles L.217-3 et suivants du code de la
        consommation) et de la garantie contre les vices cachés (articles 1641 et suivants du code civil). Les attestations
        d’assurance, notamment de responsabilité civile décennale lorsque la prestation y est soumise, sont communiquées sur
        demande et figurent sur les devis concernés. Aucun numéro de police n’est reproduit ici, afin de ne pas publier une
        référence périmée.
      </p>
      <h2>Réclamations et médiation</h2>
      <p>
        Toute réclamation s’adresse d’abord à {company.name}, par courrier au siège ou par téléphone au {company.phoneDisplay}.
        Si le différend avec un consommateur n’est pas résolu, le client peut saisir gratuitement le médiateur de la
        consommation dont les coordonnées sont indiquées sur le devis ou communiquées sur simple demande. La liste des
        médiateurs référencés est publiée sur{" "}
        <a href="https://www.economie.gouv.fr/mediation-conso">economie.gouv.fr/mediation-conso</a>.
      </p>
      <h2>Données personnelles</h2>
      <p>
        Les données collectées pour établir un devis sont traitées comme indiqué dans la{" "}
        <Link href="/confidentialite">politique de confidentialité</Link>.
      </p>
      <h2>Droit applicable</h2>
      <p>
        Les présentes conditions sont soumises au droit français. Pour un client professionnel, les tribunaux de Rennes sont
        compétents, sous réserve des règles impératives. Le consommateur peut saisir la juridiction de son lieu de résidence.
      </p>
    </LegalPage>
  );
}
