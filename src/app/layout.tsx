import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, DM_Sans } from 'next/font/google'
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  subsets: ['latin'],
  // optional: specify weight
  weight: ['400', '500', '600', '700'],
  // optional: specify display
  display: 'swap',
})

const dm_sans = DM_Sans({
  subsets: ['latin'],
  // optional: specify weight
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "AI Inventory Management",
  description: "Created by Faisal Bhuiyan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dm_sans.className}>
      <body
      >
        {children}
      </body>
    </html>
  );
}
