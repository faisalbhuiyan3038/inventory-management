import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google'
import "./globals.css";

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
