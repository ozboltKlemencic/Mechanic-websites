import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menjava gum - Vulkanizer Vrhnika, Žiri, Logatec",
  description:
    "Potrebujete hitro in zanesljivo menjavo gum? AS Klemenčič nudi vulkanizerske storitve v Vrhniki, Logatcu in Žireh. Poskrbimo za strokovno menjavo in centriranje gum. Naročite se še danes!",
  keywords:
    "menjava gum, vulkanizer, centriranje gum, menjava gum Vrhnika, menjava gum Žiri, menjava gum Logatec, vulkanizer Vrhnika, vulkanizer Logatec, vulkanizer Žiri, menjava pnevmatik, hitra menjava gum, ugodna menjava gum",
  twitter: {
    card: "summary_large_image",
    title: "Menjava gum - Vulkanizer AS Klemenčič",
    description:
      "Potrebujete hitro in zanesljivo menjavo gum? AS Klemenčič je specialist za vulkanizerske storitve v Vrhniki, Žireh in Logatcu. Naročite se zdaj!",
  },
  openGraph: {
    title: "Menjava gum - Vulkanizer Vrhnika, Žiri, Logatec",
    description:
      "Poiščite strokovno menjavo gum pri AS Klemenčič. Nudimo vrhunske vulkanizerske storitve, kot so centriranje gum in hitre menjave. Obiščite nas v Vrhniki, Žireh ali Logatcu.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/menjava-gum`,
    siteName: "Avtoservis Klemenčič",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/menjava-gum.jpg`,
        width: 1200,
        height: 630,
        alt: "Menjava gum - Vulkanizer AS Klemenčič",
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
