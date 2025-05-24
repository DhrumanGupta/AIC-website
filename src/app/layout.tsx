import Navbar from "@/components/Navbar";
import { cn } from "@/lib/cn";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

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
        <div className="-mt-[10vh]">{children}</div>
        <div className="py-8" />
        <Analytics />
      </body>
    </html>
  );
}
