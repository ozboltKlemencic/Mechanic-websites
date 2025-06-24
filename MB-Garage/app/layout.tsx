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

      <body className={`${Montserrat.variable} ${Hind.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
