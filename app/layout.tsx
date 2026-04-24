import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
