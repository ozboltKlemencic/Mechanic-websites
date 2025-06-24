import "./globals.css";

import localFont from "next/font/local";
import Script from "next/script";

const Montserrat = localFont({
  src: "./fonts/MontserratVF.ttf",
  variable: "--font-Montserrat",
  weight: "100 900",
});

const Hind = localFont({
  src: "./fonts/HindVF.ttf",
  variable: "--font-Hind",
  weight: "100 900",
});

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

      <body className={`${Montserrat.variable} ${Hind.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
