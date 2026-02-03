import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";



export const metadata: Metadata = {
  title: 'Jual Alat Berat Makassar | Loader, Excavator & Lugong',
  description: 'Jual alat berat Makassar meliputi loader, excavator, lugong baru. Harga bersaing, kualitas terjamin, siap kirim.',
  keywords: [
    'jual alat berat lugong makassar',
    'loader makassar',
    "Wheel Loader",
    "Self Loading Mixer",
    "Excavator",
    'jual loader makassar',
    'excavator makassar',
    'jual excavator makassar',
    'Lugong makassar',
    'supplier alat berat makassar',
  ],
  icons: {
    icon: '/favicon-16x16.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "loader makassar",
              url: "https://loadermakassar.id",
              description:
                "Jual Alat berat",
            }),
          }}
        />
        <meta name="google-site-verification" content="cqQFV7NinnW87NZrQHXbJs8y7UvbfzKij1PLjM59qH0" />
      </head>
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4V5BNXBJJ5"
          strategy="afterInteractive"
        />
        <Script>
          {
            `  window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4V5BNXBJJ5');`
          }

        </Script>
      </body>
    </html>
  );
}
