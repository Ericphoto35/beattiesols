import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Beattie Sols | Revêtements, peinture & décoration',description:'Revêtements de sols techniques, peinture et décoration à Rennes et en Bretagne. Qualité, conseil et savoir-faire depuis 2012.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="fr"><body>{children}</body></html>}
