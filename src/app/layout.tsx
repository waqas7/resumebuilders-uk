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
import { sharedMetadata } from "@/lib/seo";
import { BRAND } from "@/lib/projects";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  ...sharedMetadata,
  title: {
    default: BRAND.name,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.description,
};

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
