import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - Avtoservis Vrhnika, Žiri",
  description:
    "Kontaktirajte nas za več informacij o naših avtoservisnih storitvah. AS Klemenčič nudi vrhunske storitve vulkanizerstva, hitri servis, menjavo gum in druge storitve v Vrhniki, Žireh in Logatcu.",
  keywords:
    "kontakt, kontaktni podatki, avtoservis Vrhnika, avtoservis Žiri, avtoservis Logatec, kontaktirajte AS Klemenčič, kontaktna številka, naslov avtoservis, kontaktni obrazec, vulkanizer, menjava gum, hitri servis, diagnostika, čiščenje avta",
  twitter: {
    card: "summary_large_image",
    title: "Kontakt - Avtoservis AS Klemenčič",
    description:
      "Poiščite naše kontaktne informacije in nas kontaktirajte za več informacij o avtoservisnih storitvah, ki jih ponujamo v Vrhniki, Žireh in Logatcu.",
  },
  openGraph: {
    title: "Kontakt - Avtoservis Vrhnika, Žiri, Logatec",
    description:
      "Poglejte naše kontaktne informacije in nas kontaktirajte za več o naših storitvah avtoservisa. AS Klemenčič ponuja vrhunske storitve v Vrhniki, Žireh in Logatcu.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/kontakt`,
    siteName: "Avtoservis Klemenčič",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/kontakt.jpg`,
        width: 1200,
        height: 630,
        alt: "Kontakt - Avtoservis Klemenčič",
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
