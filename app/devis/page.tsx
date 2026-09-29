import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Demande de devis | Beattie Sols",
  description: "Demandez un devis gratuit pour un revêtement de sol, une peinture ou une décoration à Rennes et en Bretagne.",
};

export default function DevisPage() {
  return (
    <>
      <SiteHeader />
      <main className="devis-page">
        <p className="kicker">Devis gratuit</p>
        <h1>
          Parlez-nous
          <br />
          de votre <em>chantier.</em>
        </h1>
        <p className="devis-lead">
          Sols techniques, peinture ou décoration : décrivez le lieu, la surface et le délai souhaité. Nous revenons vers vous
          avec des conseils concrets.
        </p>
        <ContactForm variant="devis" />
        <a className="phone-link" href={`tel:${company.phoneTel}`}>
          <Phone size={16} /> {company.phoneDisplay}
        </a>
      </main>
      <SiteFooter />
    </>
  );
}
