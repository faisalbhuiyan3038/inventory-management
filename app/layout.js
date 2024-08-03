import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inventory Tracker",
  description: "An app to manage Inventory Items",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#C9DABF" }} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
