import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: 'Loader Makassar',
  description: 'Penyedia loader dan alat berat di Makassar dengan harga terbaik',
  keywords: [
    'loader makassar',
    'alat berat makassar',
    'sewa loader makassar',
    'jual alat berat makassar',
    'excavator makassar',
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
      <body>
        {children}
      </body>
    </html>
  );
}
