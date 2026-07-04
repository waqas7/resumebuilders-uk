import { PlayStoreButton } from "./play-store-badge";
import { Container } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaSectionProps = {
  variant?: "primary" | "secondary" | "urgency";
  headline?: string;
  subheadline?: string;
  buttonText?: string;
  className?: string;
};

export function CtaSection({
  variant = "primary",
  headline,
  subheadline,
  buttonText = "Download on Google Play",
  className,
}: CtaSectionProps) {
  const defaults = {
    primary: {
      headline: "Build Your Resume in Minutes",
      subheadline:
        "Join 100K+ users who landed interviews with our AI resume builder app.",
    },
    secondary: {
      headline: "Ready to Create Your CV?",
      subheadline:
        "Free download. No sign-up required. Professional ATS resume templates included.",
    },
    urgency: {
      headline: "Most Users Choose Premium",
      subheadline:
        "Unlock AI tools, remove ads, and access premium templates. Upgrade in-app today.",
    },
  };

  const content = defaults[variant];

  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 md:py-28",
        variant === "primary" &&
          "bg-gradient-to-br from-blue-600 via-violet-600 to-violet-800 text-white",
        variant === "secondary" && "bg-muted/50",
        variant === "urgency" &&
          "border-y border-violet-500/20 bg-gradient-to-r from-violet-950/50 to-blue-950/50",
        className
      )}
      data-cta-variant={variant}
    >
      <Container className="relative text-center">
        <h2
          className={cn(
            "text-3xl font-bold tracking-tight md:text-4xl",
            variant !== "primary" && "text-foreground"
          )}
        >
          {headline ?? content.headline}
        </h2>
        <p
          className={cn(
            "mx-auto mt-4 max-w-2xl text-lg",
            variant === "primary" ? "text-white/90" : "text-muted-foreground"
          )}
        >
          {subheadline ?? content.subheadline}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <PlayStoreButton
            data-cta-variant={variant}
            className={
              variant === "primary"
                ? "bg-white text-violet-700 hover:bg-white/90"
                : undefined
            }
          >
            {buttonText}
          </PlayStoreButton>
        </div>
      </Container>
    </section>
  );
}
