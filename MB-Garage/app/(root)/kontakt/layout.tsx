import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - MB garage, Avtomehanična delavnica, Blejska Dobrava",
  description:
    "Kontaktirajte nas za več informacij o naših avtomehaničnih storitvah. MB garage nudi vrhunske storitve popravil motorjev, vzdrževanja vozil, diagnostike in drugih avtomehaničnih storitev v Blejski Dobravi.",
  keywords:
    "kontakt, kontaktni podatki, MB garage, avtomehanična delavnica Blejska Dobrava, kontaktirajte MB garage, kontaktna številka, naslov avtomehanik, kontaktni obrazec, popravilo motorja, vzdrževanje vozil, diagnostika, avtomehanične storitve",
  twitter: {
    card: "summary_large_image",
    title: "Kontakt - MB garage, Avtomehanična delavnica",
    description:
      "Poiščite naše kontaktne informacije in nas kontaktirajte za več informacij o avtomehaničnih storitvah, ki jih ponujamo v Blejski Dobravi.",
  },
  openGraph: {
    title: "Kontakt - MB garage, Avtomehanična delavnica, Blejska Dobrava",
    description:
      "Poglejte naše kontaktne informacije in nas kontaktirajte za več o naših storitvah avtomehanične delavnice. MB garage ponuja vrhunske storitve v Blejski Dobravi.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/kontakt`,
    siteName: "MB garage",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/kontakt.jpg`,
        width: 1200,
        height: 630,
        alt: "Kontakt - MB garage",
      },
    ],
    locale: "sl_SI",
    type: "website",
  },
  robots: "index, follow",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
