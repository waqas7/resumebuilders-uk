import type { JobCvData } from "@/lib/job-template-pages";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function printCvExample(data: JobCvData, title = "CV Example") {
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

  const html = `<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(title)}</title>
  <style>
    body { font-family: Arial, Helvetica, sans-serif; max-width: 720px; margin: 24px auto; color: #111; line-height: 1.45; }
    h1 { font-size: 22px; margin: 0 0 4px; }
    h2 { font-size: 14px; font-weight: normal; color: #444; margin: 0 0 12px; }
    h3 { font-size: 13px; text-transform: uppercase; letter-spacing: 0.04em; border-bottom: 1px solid #ccc; padding-bottom: 4px; margin: 20px 0 8px; }
    p, li { font-size: 14px; }
    .contact { font-size: 13px; color: #444; margin-bottom: 16px; }
    .footer { margin-top: 32px; font-size: 11px; color: #666; }
  </style>
</head>
<body>
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
  <p class="footer">Example CV layout from Resume Builders UK (resumebuilders.uk). Customise and export your own version in the free Android app.</p>
</body>
</html>`;

  const win = window.open("", "_blank", "noopener,noreferrer");
  if (!win) return;
  win.document.write(html);
  win.document.close();
  win.focus();
  win.print();
}
