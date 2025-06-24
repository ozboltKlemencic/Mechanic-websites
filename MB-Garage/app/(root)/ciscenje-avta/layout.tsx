import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vzdrževanje vozil - MB garage, Blejska Dobrava",
  description:
    "Celovito vzdrževanje vašega avtomobila v MB garage. Nudimo notranje in zunanje vzdrževanje vozil, popravila motorjev in diagnostiko v Blejski Dobravi. Poskrbimo, da bo vaš avto kot nov!",
  keywords:
    "vzdrževanje vozil, popravilo motorja, diagnostika avta, servis avtomobila, MB garage Blejska Dobrava, avtomehanična delavnica, vzdrževanje avta, popravilo avta, celovito vzdrževanje, servis motorja Blejska Dobrava",
  twitter: {
    card: "summary_large_image",
    title: "Vzdrževanje vozil - MB garage",
    description:
      "Zagotovite dolgotrajno delovanje svojega vozila! Oglejte si naše storitve vzdrževanja vozil v Blejski Dobravi.",
  },
  openGraph: {
    title: "Vzdrževanje vozil - MB garage, Blejska Dobrava",
    description:
      "Poskrbite za optimalno delovanje svojega avtomobila z našimi storitvami vzdrževanja vozil in popravil motorjev. Zanesljivo vzdrževanje v Blejski Dobravi.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/ciscenje-avta`,
    siteName: "MB garage",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/ciscenje-avta.jpg`,
        width: 1200,
        height: 630,
        alt: "Vzdrževanje vozil - MB garage",
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
