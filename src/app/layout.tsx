import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bodhi Captial",
  description:
    "Ashoka Investments Club is the premiere investments club in the country",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Navbar />
        <div className="-mt-[15vh]">{children}</div>
      </body>
    </html>
  );
}
