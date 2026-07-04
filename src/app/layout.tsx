import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { StickyDownloadBar } from "@/components/conversion/sticky-download-bar";
import { GoogleAnalytics } from "@/components/seo/google-analytics";
import { JsonLd } from "@/components/seo/json-ld";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { KEYWORDS } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title:
    "Resume Builders UK — Free CV Maker App with ATS Templates & PDF Export",
  description:
    "Build ATS-friendly UK CVs free on Android. 20+ templates, guided builder, CV examples by job, and one-tap PDF export. Download the resume maker app on Google Play.",
  path: "/",
  keywords: KEYWORDS,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>
          <JsonLd data={[getOrganizationSchema(), getWebSiteSchema()]} />
          <GoogleAnalytics />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyDownloadBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
