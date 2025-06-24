import type { Metadata } from "next";
import Script from "next/script";

import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";

export const metadata: Metadata = {
  title: {
    default: "Avtoservis Žiri - Vulkanizer, Avtoservis, Avtomehanik",
    template: "%s - AS Klemenčič",
  },
  description:
    "Autoservis Klemenčič nudi vrhunske avtoservisne storitve na Vrhniki, Žireh in Logatcu. Specializirani smo za menjavo gum, hitri servis in čiščenje avtov.",
  keywords:
    "avtoservis, vulkanizer, mehanik, avtoservis žiri, vulkanizer žiri, mehanik žiri, menjava gum, menjava olja, čiščenje avta, diagnostika, hitri servis, centriranje gum, menjava gum žiri, menjava olja žiri, diagnostika žiri, hitri servis žiri, centriranje gum žiri, čiščenje avta žiri, avtoservis vrhnika, vulkanizer vrhnika, mehanik vrhnika, menjava gum vrhnika, menjava olja vrhnika, čiščenje avta vrhnika, diagnostika vrhnika, hitri servis vrhnika, centriranje gum vrhnika, menjava gum logatec, menjava olja logatec, diagnostika logatec, hitri servis logatec, centriranje gum logatec, čiščenje avta logatec, avtoservis logatec, vulkanizer logatec, mehanik logatec, cenik vulkanizer vrhnika, servis avtoklime logatec, zavorni servis žiri, menjava filtrov vrhnika, avtomobilska diagnostika logatec,cenik vulkanizer žiri,cenik vulkanizer logatec",
  twitter: { card: "summary_large_image" },
  openGraph: {
    title: "Avtoservis Klemenčič - Vrhnika, Logatec, Žiri",
    description:
      "Zanesljiv avtoservis za menjavo gum, diagnostiko in hitre servise v okolici Vrhnike, Logatca in Žirov.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: "Avtoservis Klemenčič",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Avtoservis Klemenčič",
      },
    ],
    locale: "sl_SI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl">
      <head>
        {/* Google tag (gtag.js)  */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-KDNGX8BL8Z`}
        ></Script>
        <Script id="google-analitycs">
          {`  
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KDNGX8BL8Z');
          `}
        </Script>
        <script
          async
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "AS Klemenčič",
              image: "https://www.avtoservis-klemencic.si/icons/logo.svg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Vrhnika, Slovenija",
                addressLocality: "Vrhnika",
                postalCode: "1360",
                addressCountry: "SI",
              },
              email: "info@avtoservis-klemencic.si",
              telephone: "+38612345678",
              openingHours: "Mo-Fr 08:00-15:00",
              url: process.env.NEXT_PUBLIC_BASE_URL,
              priceRange: "$$",
              sameAs: [
                "https://www.facebook.com/ASklemenčič",
                "https://www.instagram.com/ASklemenčič",
              ],
            }),
          }}
        />
      </head>

      <body>
        <Navbar />
        <main className="mt-[-10px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
