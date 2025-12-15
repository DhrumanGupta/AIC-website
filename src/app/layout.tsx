import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/cn";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bodhi Capital",
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
      <body className={cn(inter.className)}>
        <Navbar />
        <div className="-mt-[12vh]">{children}</div>
        <div className="py-8" />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
