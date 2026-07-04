export type CvBuilderDraft = {
  slug: string;
  fullName: string;
  email: string;
  phone: string;
  jobTitle: string;
  summary: string;
  step: number;
  updatedAt: string;
};

const PREFIX = "cv-builder-draft:";

export function getDraftKey(slug: string) {
  return `${PREFIX}${slug}`;
}

export function loadDraft(slug: string): CvBuilderDraft | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(getDraftKey(slug));
    if (!raw) return null;
    return JSON.parse(raw) as CvBuilderDraft;
  } catch {
    return null;
  }
}

export function saveDraft(draft: CvBuilderDraft) {
  if (typeof window === "undefined") return;
  localStorage.setItem(
    getDraftKey(draft.slug),
    JSON.stringify({ ...draft, updatedAt: new Date().toISOString() })
  );
}

export function clearDraft(slug: string) {
  if (typeof window === "undefined") return;
  localStorage.removeItem(getDraftKey(slug));
}
