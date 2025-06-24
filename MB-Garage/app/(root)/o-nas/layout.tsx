import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nas - MB garage | Avtomehanična delavnica | Blejska Dobrava",
  description:
    "Spoznajte ekipo MB garage, strokovnjake za avtomehanične storitve v Blejski Dobravi. Nudimo vrhunske storitve popravil motorjev, vzdrževanja vozil, diagnostike in drugih avtomehaničnih storitev za vaše vozilo.",
  keywords:
    "o nas, ekipa MB garage, avtomehanična delavnica Blejska Dobrava, strokovnjaki za avtomehanične storitve, popravilo motorja, vzdrževanje vozil, diagnostika, servis avtomobilov, kakovostne avtomehanične storitve, Miroslav Beronja",
  twitter: {
    card: "summary_large_image",
    title: "O nas - MB garage, Avtomehanična delavnica",
    description:
      "Spoznajte ekipo in zgodovino podjetja MB garage, ki nudi vrhunske avtomehanične storitve v Blejski Dobravi.",
  },
  openGraph: {
    title: "O nas - MB garage, Avtomehanična delavnica, Blejska Dobrava",
    description:
      "Odkrijte, kdo smo in kako poskrbimo za vrhunske storitve avtomehanične delavnice. MB garage ponuja kakovostne storitve v Blejski Dobravi.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/o-nas`,
    siteName: "MB garage",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/o-nas.jpg`,
        width: 1200,
        height: 630,
        alt: "O nas - MB garage",
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
