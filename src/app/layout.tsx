import type { Metadata } from "next";
import { Fredoka, Lilita_One } from "next/font/google";
import { Shell } from "@/components/shell";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const lilita = Lilita_One({
  variable: "--font-lilita",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TinyOps",
  description: "A small in-memory task manager.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable} ${lilita.variable}`}>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
