import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avtomehanične storitve - MB garage, Blejska Dobrava",
  description:
    "MB garage nudi vrhunske avtomehanične storitve v Blejski Dobravi. Specializirani smo za popravila motorjev, vzdrževanje vozil, diagnostiko in druge avtomehanične storitve. Naročite se še danes!",
  keywords:
    "avtomehanične storitve, popravilo motorja, vzdrževanje vozil, diagnostika, MB garage Blejska Dobrava, avtomehanična delavnica, servis motorja, popravilo avta, hitra avtomehanična storitev, ugodne avtomehanične storitve",
  twitter: {
    card: "summary_large_image",
    title: "Avtomehanične storitve - MB garage",
    description:
      "Potrebujete zanesljive avtomehanične storitve? MB garage je specialist za popravila motorjev in vzdrževanje vozil v Blejski Dobravi. Naročite se zdaj!",
  },
  openGraph: {
    title: "Avtomehanične storitve - MB garage, Blejska Dobrava",
    description:
      "Poiščite strokovne avtomehanične storitve pri MB garage. Nudimo vrhunske storitve popravil motorjev, vzdrževanja vozil in diagnostike. Obiščite nas v Blejski Dobravi.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/menjava-gum`,
    siteName: "MB garage",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/menjava-gum.jpg`,
        width: 1200,
        height: 630,
        alt: "Avtomehanične storitve - MB garage",
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
