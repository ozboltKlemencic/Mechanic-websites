import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cenik - MB garage, Avtomehanična delavnica, Blejska Dobrava",
  description:
    "Oglejte si naš cenik za avtomehanične storitve. MB garage ponuja ugodne cene za popravila motorjev, vzdrževanje vozil, diagnostiko in druge avtomehanične storitve v Blejski Dobravi.",
  keywords:
    "cenik avtomehanik, cenik avtomehanična delavnica, cenik popravilo motorja, cenik vzdrževanje vozil, MB garage Blejska Dobrava, cenik avtomehanične storitve, cenik diagnostika, cenik servis motorja, cenik popravilo avta Blejska Dobrava",
  twitter: {
    card: "summary_large_image",
    title: "Cenik - MB garage, Avtomehanična delavnica",
    description:
      "Preverite naš cenik za avtomehanične storitve. Ugodne cene za popravila motorjev, vzdrževanje vozil, diagnostiko in druge storitve v Blejski Dobravi.",
  },
  openGraph: {
    title: "Cenik - MB garage, Avtomehanična delavnica, Blejska Dobrava",
    description:
      "Seznanite se z našimi cenami za avtomehanične storitve. Natančen cenik za popravila motorjev, vzdrževanje vozil, diagnostiko in druge storitve v Blejski Dobravi.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/cenik`,
    siteName: "MB garage",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/cenik.jpg`,
        width: 1200,
        height: 630,
        alt: "Cenik - MB garage",
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
