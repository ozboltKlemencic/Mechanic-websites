import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Čiščenje avta - Avtoservis Vrhnika, Žiri, Logatec",
  description:
    "Zanesljivo čiščenje vašega avtomobila v Avtoservisu Klemenčič. Nudimo notranje in zunanje čiščenje avtomobilov v Vrhniki, Žireh in Logatcu. Poskrbimo, da bo vaš avto kot nov!",
  keywords:
    "čiščenje avta, notranje čiščenje avta, zunanje čiščenje avta, čiščenje avtomobila, avtoservis Vrhnika, avtoservis Žiri, avtoservis Logatec, pranje avtomobila, detajlno čiščenje, pranje notranjosti avta, avtopranje, čiščenje avta Vrhnika, čiščenje avta Žiri, čiščenje avta Logatec",
  twitter: {
    card: "summary_large_image",
    title: "Čiščenje avta - Avtoservis AS Klemenčič",
    description:
      "Zasijajte s čisto vozilo! Oglejte si naše storitve čiščenja avtomobilov v Vrhniki, Žireh in Logatcu.",
  },
  openGraph: {
    title: "Čiščenje avta - Avtoservis Vrhnika, Žiri, Logatec",
    description:
      "Poskrbite za čistočo svojega avtomobila z našimi storitvami notranjega in zunanjega čiščenja. Zanesljivo čiščenje avta v Vrhniki, Žireh in Logatcu.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/ciscenje-avta`,
    siteName: "Avtoservis Klemenčič",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/ciscenje-avta.jpg`,
        width: 1200,
        height: 630,
        alt: "Čiščenje avta - Avtoservis Klemenčič",
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
