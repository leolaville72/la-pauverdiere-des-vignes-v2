import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost"
});

export const metadata: Metadata = {
  title: "La Pauverdiere des Vignes",
  description: "Migration Next.js du site du gite La Pauverdiere des Vignes"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={jost.variable}>{children}</body>
    </html>
  );
}
