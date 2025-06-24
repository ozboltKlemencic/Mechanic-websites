import type { Metadata } from "next";
import Script from "next/script";

import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";

export const metadata: Metadata = {
  title: {
    default: "MB garage - Avtomehanična delavnica, Blejska Dobrava",
    template: "%s - MB garage",
  },
  description:
    "MB garage, avtomehanična delavnica Miroslav Beronja nudi vrhunske avtomehanične storitve v Blejski Dobravi. Specializirani smo za menjavo gum, vzdrževanje vozil in diagnostiko.",
  keywords:
    "avtomehanik, avtomehanična delavnica, MB garage, Blejska Dobrava, popravilo avtomobila, vzdrževanje vozil, diagnostika, servis motorja, avtomehanične storitve, Miroslav Beronja, avtomehanik Blejska Dobrava, popravilo motorja, vzdrževanje avta Blejska Dobrava",
  twitter: { card: "summary_large_image" },
  openGraph: {
    title: "MB garage - Avtomehanična delavnica, Blejska Dobrava",
    description:
      "Zanesljiva avtomehanična delavnica za popravila in vzdrževanje vozil v Blejski Dobravi.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: "MB garage",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: "MB garage - Avtomehanična delavnica",
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
              name: "MB garage, avtomehanična delavnica, Miroslav Beronja, s.p.",
              image: "https://www.mb-garage.si/icons/logo.svg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Blejska Dobrava 114",
                addressLocality: "Blejska Dobrava",
                postalCode: "4273",
                addressCountry: "SI",
              },
              email: "beronja.miroslav32@gmail.com",
              telephone: "+386040517788",
              openingHours: "Mo-Fr 08:00-17:00",
              url: process.env.NEXT_PUBLIC_BASE_URL,
              priceRange: "$$",
              sameAs: [
                "https://www.facebook.com/MBgarage",
                "https://www.instagram.com/MBgarage",
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
