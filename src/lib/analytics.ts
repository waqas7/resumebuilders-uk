type GtagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | undefined>
) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, params);
}

export function trackTemplatePageView(slug: string, templateName: string) {
  trackEvent("template_page_view", {
    template_slug: slug,
    template_name: templateName,
  });
}

export function trackStartBuilderClick(slug: string) {
  trackEvent("start_builder_click", { template_slug: slug });
}

export function trackAppInstallClick(
  source: string,
  slug?: string
) {
  trackEvent("app_install_click", {
    source,
    template_slug: slug,
  });
}

/** @deprecated Use named track helpers */
export function trackLegacyEvent({ action, category, label }: GtagEvent) {
  trackEvent(action, { event_category: category, event_label: label });
}
