import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Čiščenje avta - MB garage, Blejska Dobrava",
  description:
    "Profesionalno čiščenje vašega avtomobila v MB garage. Nudimo notranje in zunanje čiščenje vozil v Blejski Dobravi. Poskrbimo, da bo vaš avto kot nov!",
  keywords:
    "čiščenje avta, notranje čiščenje avta, zunanje čiščenje avta, pranje avtomobila, MB garage Blejska Dobrava, čiščenje vozil, detajlno čiščenje, avtopralnica, čiščenje avta Blejska Dobrava",
  twitter: {
    card: "summary_large_image",
    title: "Čiščenje avta - MB garage",
    description:
      "Zasijajte s čistim vozilom! Oglejte si naše storitve čiščenja avtomobilov v Blejski Dobravi.",
  },
  openGraph: {
    title: "Čiščenje avta - MB garage, Blejska Dobrava",
    description:
      "Poskrbite za čistočo svojega avtomobila z našimi storitvami notranjega in zunanjega čiščenja. Profesionalno čiščenje avta v Blejski Dobravi.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/ciscenje-avta`,
    siteName: "MB garage",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/ciscenje-avta.jpg`,
        width: 1200,
        height: 630,
        alt: "Čiščenje avta - MB garage",
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
