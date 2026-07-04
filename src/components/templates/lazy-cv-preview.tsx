"use client";

import { useEffect, useRef, useState } from "react";
import { JobCvPreview } from "@/components/templates/job-cv-preview";
import type { JobCvData } from "@/lib/job-template-page-types";

type LazyCvPreviewProps = {
  data: JobCvData;
  label: string;
};

export function LazyCvPreview({ data, label }: LazyCvPreviewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-[240px]">
      {visible ? (
        <JobCvPreview data={data} highlightSections size="card" />
      ) : (
        <div
          className="flex min-h-[240px] items-center justify-center rounded-lg bg-muted/40 p-6 text-center text-sm text-muted-foreground"
          aria-hidden
        >
          Loading {label} preview…
        </div>
      )}
    </div>
  );
}
