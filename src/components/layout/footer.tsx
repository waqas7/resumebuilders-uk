import Link from "next/link";
import Image from "next/image";
import { BRAND, NAV_LINKS } from "@/lib/projects";
import { SUPPORT_EMAIL } from "@/lib/constants";
import { FEATURED_BLOG_LINKS, getPlayStoreUrl } from "@/lib/play-store-url";
import { Container } from "@/components/ui/button";
import { PlayStoreButton } from "@/components/conversion/play-store-badge";

const TEMPLATE_LINKS = [
  { href: "/templates/ats-friendly-cv-template", label: "ATS CV template" },
  { href: "/templates/care-home-worker-cv-uk", label: "Care home CV" },
  { href: "/templates/student-cv-no-experience", label: "Student CV" },
  { href: "/templates/retail-assistant-cv-uk", label: "Retail assistant CV" },
] as const;

export function Footer() {
  const playStoreHref = getPlayStoreUrl({ source: "footer_text_link" });

  return (
    <footer className="border-t border-border bg-muted/30 py-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src={BRAND.logo}
                alt={BRAND.logoAlt}
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-bold">{BRAND.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {BRAND.description}
            </p>
            <div className="mt-6">
              <PlayStoreButton ctaSource="footer_button" className="px-5 py-2.5 text-sm">
                Get the app
              </PlayStoreButton>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Site</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">CV examples</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {TEMPLATE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/templates" className="font-medium hover:text-foreground">
                  View all templates →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">CV guides</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {FEATURED_BLOG_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="font-medium hover:text-foreground">
                  All blog articles →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Support</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="break-all hover:text-foreground"
                >
                  {SUPPORT_EMAIL}
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground">
                  Terms of use
                </Link>
              </li>
              <li>
                <a
                  href={playStoreHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  Google Play
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p>resumebuilders.uk</p>
        </div>
      </Container>
    </footer>
  );
}
