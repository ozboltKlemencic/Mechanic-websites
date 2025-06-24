import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hitri servis - Avtoservis Vrhnika, Žiri, Logatec",
  description:
    "Potrebujete hitro popravilo ali servis vozila? AS Klemenčič ponuja hitre servise za vozila v Vrhniki, Logatcu in Žireh. Poskrbimo za vaše vozilo, da bo spet pripravljeno na cesto v najkrajšem možnem času.",
  keywords:
    "hitri servis, avtoservis, hitri servis Vrhnika, hitri servis Žiri, hitri servis Logatec, popravilo vozil, servis avtomobilov, preglede vozil, olje, filtriranje, preprosti servisi, avtoservis Vrhnika, hitri popravki, hitro popravilo vozil, servis avtomobilov Vrhnika",
  twitter: {
    card: "summary_large_image",
    title: "Hitri servis - AS Klemenčič",
    description:
      "Za hitro in kvalitetno popravilo vašega vozila se obrnite na AS Klemenčič. Hitri servis v Vrhniki, Logatcu in Žireh.",
  },
  openGraph: {
    title: "Hitri servis - Avtoservis Vrhnika, Žiri, Logatec",
    description:
      "Poiščite hitri servis za vaše vozilo pri AS Klemenčič. Nudimo hitro popravilo, menjavo olja, in druge storitve za vozila v Vrhniki, Žireh in Logatcu.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/hitri-servis`,
    siteName: "Avtoservis Klemenčič",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/hitri-servis.jpg`,
        width: 1200,
        height: 630,
        alt: "Hitri servis - Avtoservis Klemenčič",
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
