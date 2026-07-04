import type { JobCvData } from "@/lib/job-template-page-types";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function slugifyFilename(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

export function buildCvExampleHtml(data: JobCvData, title = "CV Example"): string {
  const experienceHtml = data.experience
    .map(
      (job) => `
      <div style="margin-bottom:16px;">
        <p style="margin:0;font-weight:bold;">${escapeHtml(job.role)} — ${escapeHtml(job.company)}</p>
        <p style="margin:0 0 8px;color:#555;font-size:14px;">${escapeHtml(job.period)}</p>
        <ul style="margin:0;padding-left:20px;">
          ${job.bullets.map((b) => `<li style="margin-bottom:4px;">${escapeHtml(b)}</li>`).join("")}
        </ul>
      </div>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <style>
    @media print {
      body { margin: 0; padding: 16mm; }
    }
    body {
      font-family: Arial, Helvetica, sans-serif;
      max-width: 720px;
      margin: 24px auto;
      padding: 0 16px;
      color: #111;
      line-height: 1.45;
    }
    h1 { font-size: 22px; margin: 0 0 4px; }
    h2 { font-size: 14px; font-weight: normal; color: #444; margin: 0 0 12px; }
    h3 {
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      border-bottom: 1px solid #ccc;
      padding-bottom: 4px;
      margin: 20px 0 8px;
    }
    p, li { font-size: 14px; }
    .contact { font-size: 13px; color: #444; margin-bottom: 16px; }
    .footer { margin-top: 32px; font-size: 11px; color: #666; }
    .print-hint {
      margin-bottom: 24px;
      padding: 12px;
      background: #f4f4f5;
      border-radius: 8px;
      font-size: 13px;
      color: #444;
    }
    @media print {
      .print-hint { display: none; }
    }
  </style>
</head>
<body>
  <p class="print-hint"><strong>Save as PDF:</strong> Press Ctrl+P (Windows) or Cmd+P (Mac), then choose <strong>Save as PDF</strong> or <strong>Microsoft Print to PDF</strong>.</p>
  <h1>${escapeHtml(data.name)}</h1>
  <h2>${escapeHtml(data.title)}</h2>
  <p class="contact">${escapeHtml(data.email)} · ${escapeHtml(data.phone)} · ${escapeHtml(data.location)}</p>
  <h3>Professional Summary</h3>
  <p>${escapeHtml(data.summary)}</p>
  <h3>Skills</h3>
  <p>${data.skills.map(escapeHtml).join(" · ")}</p>
  <h3>Experience</h3>
  ${experienceHtml}
  <h3>Education</h3>
  <p style="white-space:pre-line;">${escapeHtml(data.education)}</p>
  <p class="footer">Example CV from Resume Builders UK — resumebuilders.uk</p>
</body>
</html>`;
}

/** Open print dialog via hidden iframe (avoids popup blockers). */
export function printCvExample(data: JobCvData, title = "CV Example"): boolean {
  if (typeof document === "undefined") return false;

  const html = buildCvExampleHtml(data, title);
  const iframe = document.createElement("iframe");
  iframe.setAttribute(
    "style",
    "position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden;"
  );
  iframe.setAttribute("title", "CV print preview");
  document.body.appendChild(iframe);

  const frameWindow = iframe.contentWindow;
  const frameDoc = frameWindow?.document;
  if (!frameWindow || !frameDoc) {
    document.body.removeChild(iframe);
    return false;
  }

  frameDoc.open();
  frameDoc.write(html);
  frameDoc.close();

  const triggerPrint = () => {
    try {
      frameWindow.focus();
      frameWindow.print();
    } finally {
      window.setTimeout(() => {
        if (iframe.parentNode) document.body.removeChild(iframe);
      }, 1500);
    }
  };

  if (frameDoc.readyState === "complete") {
    window.setTimeout(triggerPrint, 250);
  } else {
    iframe.onload = () => window.setTimeout(triggerPrint, 250);
  }

  return true;
}

/** Download example CV as HTML — open file in browser, then Print → Save as PDF. */
export function downloadCvExampleHtml(data: JobCvData, title = "CV Example"): boolean {
  if (typeof document === "undefined") return false;

  const html = buildCvExampleHtml(data, title);
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${slugifyFilename(title) || "cv-example"}.html`;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  return true;
}

export function mergeDraftIntoCvData(
  template: JobCvData,
  draft: {
    fullName?: string;
    email?: string;
    phone?: string;
    jobTitle?: string;
    summary?: string;
  }
): JobCvData {
  return {
    ...template,
    name: draft.fullName?.trim() || template.name,
    email: draft.email?.trim() || template.email,
    phone: draft.phone?.trim() || template.phone,
    title: draft.jobTitle?.trim() || template.title,
    summary: draft.summary?.trim() || template.summary,
  };
}
