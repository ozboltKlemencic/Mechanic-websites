import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cenik - Avtoservis Vrhnika, Žiri, Logatec",
  description:
    "Oglejte si naš cenik za avtoservisne storitve. AS Klemenčič ponuja ugodne cene za vulkanizerstvo, hitri servis, diagnostiko, menjavo gum in druge storitve v Vrhniki, Žireh in Logatcu.",
  keywords:
    "cenik avtoservis, cenik vulkanizer, cenik hitri servis, cenik menjava gum, avtoservis Vrhnika, avtoservis Žiri, avtoservis Logatec, cenik avtoservis Vrhnika, cenik vulkanizer Vrhnika, cenik hitri servis Žiri, cenik menjava gum Žiri, cenik menjava olja Logatec",
  twitter: {
    card: "summary_large_image",
    title: "Cenik - Avtoservis AS Klemenčič",
    description:
      "Preverite naš cenik za avtoservisne storitve. Ugodne cene za vulkanizerstvo, menjavo gum, hitri servis in druge storitve v Vrhniki, Žireh in Logatcu.",
  },
  openGraph: {
    title: "Cenik - Avtoservis Vrhnika, Žiri, Logatec",
    description:
      "Seznanite se z našimi cenami za avtoservisne storitve. Natančen cenik za vulkanizerstvo, hitre servise, menjavo gum in druge storitve v Vrhniki, Žireh in Logatcu.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/cenik`,
    siteName: "Avtoservis Klemenčič",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/cenik.jpg`,
        width: 1200,
        height: 630,
        alt: "Cenik - Avtoservis Klemenčič",
      },
    ],
    locale: "sl_SI",
    type: "article",
  },
  robots: "index, follow",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
