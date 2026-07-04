import Link from "next/link";
import Image from "next/image";
import { BRAND, NAV_LINKS } from "@/lib/projects";
import { SUPPORT_EMAIL } from "@/lib/constants";
import { Container } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
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
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              {BRAND.description}
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-foreground">
                  {SUPPORT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p>resumebuilders.uk</p>
        </div>
      </Container>
    </footer>
  );
}
