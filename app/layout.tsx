import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Product Design Leadership",
  description: "Executive product design leadership across strategy, facilitation, AI-enabled innovation, and measurable business impact.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={geist.variable}><body className="font-sans antialiased"><a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-background-secondary focus:px-4 focus:py-2">Skip to content</a><SiteHeader /><main id="main">{children}</main><SiteFooter /></body></html>;
}
