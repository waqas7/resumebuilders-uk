import { cn } from "@/lib/utils";

export type ResumePreviewVariant =
  | "modern-green"
  | "minimal-clean"
  | "classic-blue"
  | "executive-premium"
  | "ats-simple"
  | "ats-standard"
  | "modern-dark"
  | "professional-navy"
  | "modern-gradient"
  | "professional-classic"
  | "ats-minimal"
  | "ats-keyword";

type ResumePreviewProps = {
  variant: ResumePreviewVariant;
  className?: string;
  compact?: boolean;
};

const SAMPLE = {
  name: "Emma Richardson",
  title: "Marketing Manager",
  email: "emma.r@email.co.uk",
  phone: "+44 7700 900123",
  location: "London, UK",
  summary:
    "Results-driven marketing professional with 6+ years leading digital campaigns across UK markets.",
  skills: ["SEO", "Google Ads", "Analytics", "Content Strategy"],
  experience: [
    {
      role: "Senior Marketing Manager",
      company: "BrightPath Ltd",
      period: "2021 – Present",
      line: "Increased organic traffic by 140% through data-led content strategy.",
    },
    {
      role: "Digital Marketing Executive",
      company: "Northgate Media",
      period: "2018 – 2021",
      line: "Managed £250K annual ad budget with 3.2× ROAS improvement.",
    },
  ],
  education: "BA Business & Marketing — University of Manchester, 2018",
};

function SkillPills({ skills, className }: { skills: string[]; className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-1", className)}>
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded px-1.5 py-0.5 text-[7px] font-medium"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

export function ResumePreview({ variant, className, compact }: ResumePreviewProps) {
  const scale = compact ? "text-[6px]" : "text-[8px]";

  if (variant === "modern-green") {
    return (
      <div
        className={cn(
          "flex h-full overflow-hidden rounded-sm bg-white shadow-inner",
          scale,
          className
        )}
      >
        <aside className="w-[32%] bg-emerald-700 p-2 text-white">
          <div className="mb-2 h-8 w-8 rounded-full bg-white/20" />
          <p className="text-[9px] font-bold leading-tight">{SAMPLE.name}</p>
          <p className="mt-0.5 text-[7px] text-emerald-100">{SAMPLE.title}</p>
          <div className="mt-2 space-y-1 text-[6px] text-emerald-100/90">
            <p>{SAMPLE.email}</p>
            <p>{SAMPLE.phone}</p>
            <p>{SAMPLE.location}</p>
          </div>
          <p className="mt-2 text-[6px] font-semibold uppercase tracking-wide">Skills</p>
          <SkillPills
            skills={SAMPLE.skills}
            className="mt-1 [&_span]:bg-white/15 [&_span]:text-white"
          />
        </aside>
        <main className="flex-1 p-2 text-zinc-800">
          <Section title="Profile" />
          <p className="leading-relaxed text-zinc-600">{SAMPLE.summary}</p>
          <Section title="Experience" className="mt-2" />
          {SAMPLE.experience.map((exp) => (
            <ExpBlock key={exp.company} {...exp} />
          ))}
        </main>
      </div>
    );
  }

  if (variant === "minimal-clean") {
    return (
      <div className={cn("h-full bg-white p-3 text-zinc-800", scale, className)}>
        <p className="text-[10px] font-light tracking-wide">{SAMPLE.name}</p>
        <p className="text-[7px] text-zinc-500">{SAMPLE.title}</p>
        <div className="my-2 h-px bg-zinc-200" />
        <p className="text-[6px] text-zinc-500">
          {SAMPLE.email} · {SAMPLE.location}
        </p>
        <Section title="Summary" minimal className="mt-2" />
        <p className="leading-relaxed text-zinc-600">{SAMPLE.summary}</p>
        <Section title="Experience" minimal className="mt-2" />
        {SAMPLE.experience.map((exp) => (
          <ExpBlock key={exp.company} {...exp} minimal />
        ))}
      </div>
    );
  }

  if (variant === "classic-blue") {
    return (
      <div className={cn("h-full overflow-hidden bg-white", scale, className)}>
        <header className="bg-blue-700 px-3 py-2 text-white">
          <p className="text-[10px] font-bold">{SAMPLE.name}</p>
          <p className="text-[7px] text-blue-100">{SAMPLE.title}</p>
        </header>
        <main className="p-2 text-zinc-800">
          <Section title="Professional Summary" />
          <p className="text-zinc-600">{SAMPLE.summary}</p>
          <Section title="Work History" className="mt-2" />
          {SAMPLE.experience.map((exp) => (
            <ExpBlock key={exp.company} {...exp} />
          ))}
          <Section title="Education" className="mt-2" />
          <p className="text-zinc-600">{SAMPLE.education}</p>
        </main>
      </div>
    );
  }

  if (variant === "executive-premium") {
    return (
      <div className={cn("h-full overflow-hidden bg-white", scale, className)}>
        <header className="bg-zinc-900 px-3 py-2">
          <p className="text-[10px] font-bold text-white">{SAMPLE.name}</p>
          <p className="text-[7px] text-amber-400">{SAMPLE.title}</p>
        </header>
        <main className="border-t-2 border-amber-400 p-2 text-zinc-800">
          <Section title="Executive Summary" accent="amber" />
          <p className="text-zinc-600">{SAMPLE.summary}</p>
          <Section title="Leadership Experience" accent="amber" className="mt-2" />
          {SAMPLE.experience.map((exp) => (
            <ExpBlock key={exp.company} {...exp} />
          ))}
        </main>
      </div>
    );
  }

  if (variant === "professional-navy") {
    return (
      <div
        className={cn(
          "flex h-full overflow-hidden rounded-sm bg-white",
          scale,
          className
        )}
      >
        <aside className="w-[30%] bg-slate-800 p-2 text-white">
          <p className="text-[8px] font-bold">{SAMPLE.name}</p>
          <p className="text-[6px] text-slate-300">{SAMPLE.title}</p>
          <div className="mt-2 border-t border-slate-600 pt-2 text-[6px] text-slate-300">
            <p>{SAMPLE.location}</p>
            <p className="mt-1">{SAMPLE.email}</p>
          </div>
        </aside>
        <main className="flex-1 p-2">
          <Section title="Career Profile" />
          <p className="text-zinc-600">{SAMPLE.summary}</p>
          <Section title="Employment" className="mt-2" />
          {SAMPLE.experience.slice(0, 1).map((exp) => (
            <ExpBlock key={exp.company} {...exp} />
          ))}
        </main>
      </div>
    );
  }

  if (variant === "modern-dark") {
    return (
      <div className={cn("h-full bg-zinc-900 p-3 text-white", scale, className)}>
        <p className="text-[10px] font-bold">{SAMPLE.name}</p>
        <p className="text-[7px] text-violet-400">{SAMPLE.title}</p>
        <div className="my-2 h-px bg-zinc-700" />
        <Section title="About" dark />
        <p className="text-zinc-400">{SAMPLE.summary}</p>
        <Section title="Experience" dark className="mt-2" />
        {SAMPLE.experience.map((exp) => (
          <ExpBlock key={exp.company} {...exp} dark />
        ))}
      </div>
    );
  }

  if (variant === "modern-gradient") {
    return (
      <div className={cn("h-full overflow-hidden bg-white", scale, className)}>
        <header className="bg-gradient-to-r from-violet-600 to-blue-600 px-3 py-2 text-white">
          <p className="text-[10px] font-bold">{SAMPLE.name}</p>
          <p className="text-[7px] text-white/80">{SAMPLE.title}</p>
        </header>
        <main className="p-2">
          <Section title="Summary" />
          <p className="text-zinc-600">{SAMPLE.summary}</p>
          <Section title="Experience" className="mt-2" />
          {SAMPLE.experience.map((exp) => (
            <ExpBlock key={exp.company} {...exp} />
          ))}
        </main>
      </div>
    );
  }

  if (variant === "professional-classic") {
    return (
      <div className={cn("h-full bg-white p-3 text-zinc-900", scale, className)}>
        <p className="text-center text-[10px] font-bold uppercase tracking-wider">
          {SAMPLE.name}
        </p>
        <p className="text-center text-[7px] text-zinc-500">{SAMPLE.title}</p>
        <p className="mt-1 text-center text-[6px] text-zinc-400">
          {SAMPLE.email} | {SAMPLE.phone} | {SAMPLE.location}
        </p>
        <hr className="my-2 border-zinc-300" />
        <Section title="Objective" />
        <p className="text-zinc-600">{SAMPLE.summary}</p>
        <Section title="Professional Experience" className="mt-2" />
        {SAMPLE.experience.map((exp) => (
          <ExpBlock key={exp.company} {...exp} />
        ))}
      </div>
    );
  }

  // ATS variants — single column, parser-friendly
  return (
    <div className={cn("h-full bg-white p-3 font-serif text-zinc-900", scale, className)}>
      <p className="text-[10px] font-bold">{SAMPLE.name}</p>
      <p className="text-[7px]">{SAMPLE.title}</p>
      <p className="text-[6px] text-zinc-600">
        {SAMPLE.email} · {SAMPLE.phone} · {SAMPLE.location}
      </p>
      <h3 className="mt-2 text-[7px] font-bold uppercase">Professional Summary</h3>
      <p className="text-[6px] leading-relaxed">{SAMPLE.summary}</p>
      <h3 className="mt-2 text-[7px] font-bold uppercase">Skills</h3>
      <p className="text-[6px]">{SAMPLE.skills.join(" · ")}</p>
      <h3 className="mt-2 text-[7px] font-bold uppercase">Experience</h3>
      {SAMPLE.experience.map((exp) => (
        <div key={exp.company} className="mt-1">
          <p className="text-[6px] font-semibold">
            {exp.role} — {exp.company}
          </p>
          <p className="text-[6px] text-zinc-500">{exp.period}</p>
          <p className="text-[6px]">{exp.line}</p>
        </div>
      ))}
      <h3 className="mt-2 text-[7px] font-bold uppercase">Education</h3>
      <p className="text-[6px]">{SAMPLE.education}</p>
    </div>
  );
}

function Section({
  title,
  className,
  minimal,
  dark,
  accent,
}: {
  title: string;
  className?: string;
  minimal?: boolean;
  dark?: boolean;
  accent?: "amber";
}) {
  return (
    <div className={className}>
      <p
        className={cn(
          "mb-1 text-[7px] font-bold uppercase tracking-wide",
          minimal && "font-medium normal-case tracking-normal text-zinc-800",
          dark && "text-violet-400",
          accent === "amber" && "text-amber-600"
        )}
      >
        {title}
      </p>
      {!minimal && !dark && accent !== "amber" && (
        <div className="mb-1 h-0.5 w-6 bg-violet-600" />
      )}
    </div>
  );
}

function ExpBlock({
  role,
  company,
  period,
  line,
  minimal,
  dark,
}: {
  role: string;
  company: string;
  period: string;
  line: string;
  minimal?: boolean;
  dark?: boolean;
}) {
  return (
    <div className="mb-1.5">
      <div className="flex items-baseline justify-between gap-1">
        <p className={cn("text-[7px] font-semibold", dark && "text-white")}>
          {role}
        </p>
        {!minimal && (
          <p className={cn("text-[6px]", dark ? "text-zinc-500" : "text-zinc-400")}>
            {period}
          </p>
        )}
      </div>
      <p className={cn("text-[6px]", dark ? "text-zinc-400" : "text-zinc-500")}>
        {company}
      </p>
      <p className={cn("mt-0.5 text-[6px] leading-relaxed", dark ? "text-zinc-400" : "text-zinc-600")}>
        {line}
      </p>
    </div>
  );
}

export function mapCategoryToVariant(
  id: string,
  category: string
): ResumePreviewVariant {
  const map: Record<string, ResumePreviewVariant> = {
    "modern-green": "modern-green",
    "minimal-clean": "minimal-clean",
    "classic-blue": "classic-blue",
    "executive-premium": "executive-premium",
    "ats-simple": "ats-simple",
    "ats-standard": "ats-standard",
    "modern-dark": "modern-dark",
    "professional-navy": "professional-navy",
    "ats-keyword": "ats-keyword",
    "modern-gradient": "modern-gradient",
    "professional-classic": "professional-classic",
    "ats-minimal": "ats-minimal",
  };
  return map[id] ?? (category === "minimal" ? "minimal-clean" : "ats-standard");
}
