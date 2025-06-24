import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nas - Avtoservis|Vulkanizer|Mehanik Vrhnika, Žiri, Logatec",
  description:
    "Spoznajte ekipo AS Klemenčič, strokovnjake za avtoservisne storitve v Vrhniki, Žireh in Logatcu. Nudimo vrhunske storitve vulkanizerstva, hitre servise, menjavo gum, diagnostiko in druge storitve za vaše vozilo.",
  keywords:
    "o nas, ekipa AS Klemenčič, avtoservis Vrhnika, avtoservis Žiri, avtoservis Logatec, strokovnjaki za avtoservis, vulkanizer, menjava gum, hitri servis, diagnostika, servis avtomobilov, kakovostne avtoservisne storitve",
  twitter: {
    card: "summary_large_image",
    title: "O nas - Avtoservis AS Klemenčič",
    description:
      "Spoznajte ekipo in zgodovino podjetja AS Klemenčič, ki nudi vrhunske avtoservisne storitve v Vrhniki, Žireh in Logatcu.",
  },
  openGraph: {
    title: "O nas - Avtoservis Vrhnika, Žiri, Logatec",
    description:
      "Odkrijte, kdo smo in kako poskrbimo za vrhunske storitve avtoservisa. AS Klemenčič ponuja kakovostne storitve v Vrhniki, Žireh in Logatcu.",
    url: "https://www.avtoservis-klemencic.si/o-nas",
    siteName: "Avtoservis Klemenčič",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/o-nas.jpg`,
        width: 1200,
        height: 630,
        alt: "O nas - Avtoservis Klemenčič",
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
