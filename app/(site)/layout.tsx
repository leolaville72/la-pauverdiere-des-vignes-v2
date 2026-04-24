import type { ReactNode } from "react";
import Script from "next/script";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
