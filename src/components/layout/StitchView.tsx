"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { spinnerMarkup } from "@/components/ui/Spinner";

const SPIN = spinnerMarkup("h-5 w-5 text-primary-container");

const ERROR_HTML = `<div data-form-error class="mt-space-md hidden rounded-xl bg-error-container p-space-md text-on-error-container items-start gap-3" role="alert"><span class="material-symbols-outlined text-xl">error</span><p class="font-body-sm text-body-sm">Add the required details before sending.</p></div>`;

const TOOLS: Record<string, string> = {
  solar: `
    <div class="flex items-center justify-between">
      <div class="flex flex-col">
        <span class="font-title-md text-title-md text-[#0A1A5C]">SolarROI Sizer</span>
        <span class="font-label-sm text-label-sm text-on-surface-variant">Battery capacity & payback estimator</span>
      </div>
      <span class="material-symbols-outlined text-primary text-[28px]">solar_power</span>
    </div>
    <div class="p-3 bg-surface-container-low rounded-lg flex flex-col gap-2 mt-1">
      <div class="flex justify-between items-center text-xs text-on-surface-variant font-label-sm">
        <span>Avg Daily Generator Fuel:</span>
        <span class="font-semibold text-on-surface">₦ 18,500 / day</span>
      </div>
      <div class="flex justify-between items-center text-xs text-on-surface-variant font-label-sm">
        <span>Recommended Inverter Bank:</span>
        <span class="font-semibold text-on-surface">10kVA / 15kWh LiFePO4</span>
      </div>
      <div class="flex justify-between items-center pt-2 border-t border-surface-container-highest text-xs font-label-sm">
        <span class="text-primary font-bold">Estimated Diesel Breakeven:</span>
        <span class="text-[#107C41] font-bold text-sm">11.4 Months</span>
      </div>
    </div>
    <div class="flex items-center gap-2 mt-2">
      <button type="button" class="h-11 flex-1 rounded-full bg-primary text-on-primary font-label-md text-label-md font-semibold flex items-center justify-center gap-1 active:scale-95 transition-transform shadow-xs">
        <span class="material-symbols-outlined text-[18px]">play_arrow</span>
        <span>Calculate Custom Array</span>
      </button>
    </div>`,
  fee: `
    <div class="flex items-center justify-between">
      <div class="flex flex-col">
        <span class="font-title-md text-title-md text-[#0A1A5C]">FeeFlow Portal</span>
        <span class="font-label-sm text-label-sm text-on-surface-variant">School fee installment tracker</span>
      </div>
      <span class="material-symbols-outlined text-primary text-[28px]">payments</span>
    </div>
    <div class="p-3 bg-surface-container-low rounded-lg flex flex-col gap-2 mt-1">
      <div class="flex justify-between items-center text-xs text-on-surface-variant font-label-sm">
        <span>Total Enrolled Pupils:</span>
        <span class="font-semibold text-on-surface">420 Students</span>
      </div>
      <div class="flex justify-between items-center text-xs text-on-surface-variant font-label-sm">
        <span>Auto-Matched Transactions:</span>
        <span class="font-semibold text-on-surface">94.8% without teller</span>
      </div>
      <div class="flex justify-between items-center pt-2 border-t border-surface-container-highest text-xs font-label-sm">
        <span class="text-primary font-bold">Discrepancy Resolution:</span>
        <span class="text-[#107C41] font-bold text-sm">&lt; 3 Minutes</span>
      </div>
    </div>
    <div class="flex items-center gap-2 mt-2">
      <button type="button" class="h-11 flex-1 rounded-full bg-primary text-on-primary font-label-md text-label-md font-semibold flex items-center justify-center gap-1 active:scale-95 transition-transform shadow-xs">
        <span class="material-symbols-outlined text-[18px]">play_arrow</span>
        <span>Test Demo Bursary</span>
      </button>
    </div>`,
  feed: `
    <div class="flex items-center justify-between">
      <div class="flex flex-col">
        <span class="font-title-md text-title-md text-[#0A1A5C]">FarmFeed Optimizer</span>
        <span class="font-label-sm text-label-sm text-on-surface-variant">Calculate least-cost maize/soya feed ration in ₦</span>
      </div>
      <span class="material-symbols-outlined text-primary text-[28px]">calculate</span>
    </div>
    <div class="p-3 bg-surface-container-low rounded-lg flex flex-col gap-2 mt-1">
      <div class="flex justify-between items-center text-xs text-on-surface-variant font-label-sm">
        <span>Maize / Ton Cost:</span>
        <span class="font-semibold text-on-surface">₦ 420,000</span>
      </div>
      <div class="flex justify-between items-center text-xs text-on-surface-variant font-label-sm">
        <span>Target Daily Intake:</span>
        <span class="font-semibold text-on-surface">120g per Bird</span>
      </div>
      <div class="flex justify-between items-center pt-2 border-t border-surface-container-highest text-xs font-label-sm">
        <span class="text-primary font-bold">Estimated Cost per Crate:</span>
        <span class="text-[#107C41] font-bold text-sm">₦ 1,840.00</span>
      </div>
    </div>
    <div class="flex items-center gap-2 mt-2">
      <button type="button" class="h-11 flex-1 rounded-full bg-primary text-on-primary font-label-md text-label-md font-semibold flex items-center justify-center gap-1 active:scale-95 transition-transform shadow-xs">
        <span class="material-symbols-outlined text-[18px]">play_arrow</span>
        <span>Launch Live Sandbox</span>
      </button>
      <button type="button" class="h-11 px-4 rounded-full bg-surface-container text-primary font-label-md text-label-md font-semibold flex items-center justify-center active:scale-95 transition-transform">
        <span class="material-symbols-outlined text-[20px]">download</span>
      </button>
    </div>`,
};

function beginBusy(el: HTMLElement) {
  if (el.dataset.busy === "true") return;
  el.dataset.busy = "true";
  el.setAttribute("aria-busy", "true");
  if (el instanceof HTMLButtonElement) el.disabled = true;
  el.insertAdjacentHTML("afterbegin", spinnerMarkup("h-4 w-4"));
}

function endBusy(el: HTMLElement) {
  el.dataset.busy = "false";
  el.removeAttribute("aria-busy");
  if (el instanceof HTMLButtonElement) el.disabled = false;
  el.querySelectorAll(".stitch-spinner").forEach((node) => node.remove());
}

function showOverlay(el: HTMLElement) {
  el.classList.add("relative");
  const overlay = document.createElement("div");
  overlay.className = "absolute inset-0 z-10 grid place-items-center bg-surface/75";
  overlay.innerHTML = SPIN;
  el.appendChild(overlay);
  window.setTimeout(() => overlay.remove(), 450);
}

function switchSector(sector: string) {
  const tabs = ["farm", "school", "solar"];
  tabs.forEach((name) => {
    const btn = document.getElementById(`tab-btn-${name}`);
    const content = document.getElementById(`tab-content-${name}`);
    if (!btn || !content) return;
    if (name === sector) {
      btn.className =
        "px-6 py-2.5 rounded-full font-label-lg text-label-lg transition-all duration-200 bg-primary-container text-on-primary shadow-sm flex items-center gap-2";
      content.classList.remove("hidden");
      showOverlay(content);
    } else {
      btn.className =
        "px-6 py-2.5 rounded-full font-label-lg text-label-lg transition-all duration-200 text-on-surface-variant hover:text-on-surface flex items-center gap-2";
      content.classList.add("hidden");
    }
  });
}

declare global {
  interface Window {
    switchSector?: (sector: string) => void;
  }
}

function scrollToHash(hash: string) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById(hash)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

export function StitchView({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    window.switchSector = switchSector;
    const root = ref.current;
    if (!root) return;

    root.querySelectorAll("form[data-stitch-form]").forEach((form) => {
      if (!form.querySelector("[data-form-error]")) {
        form.insertAdjacentHTML("beforeend", ERROR_HTML);
      }
    });

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const menuCandidate = target.closest("button");
      const menuButton =
        menuCandidate && /menu/i.test(menuCandidate.getAttribute("aria-label") ?? "")
          ? menuCandidate
          : null;
      if (menuButton) {
        event.preventDefault();
        const header = menuButton.closest("header");
        if (!header) return;
        let panel = header.querySelector<HTMLElement>("[data-mobile-panel]");
        if (!panel) {
          panel = document.createElement("div");
          panel.setAttribute("data-mobile-panel", "true");
          panel.className =
            "md:hidden absolute left-0 right-0 top-full z-50 bg-surface-container-lowest border-t border-[rgba(15,27,51,0.06)] shadow-[0_12px_32px_-4px_rgba(10,26,92,0.08)] px-margin py-space-md flex flex-col gap-1";
          const source = header.querySelectorAll("nav a");
          const anchors = source.length > 0 ? source : root.querySelectorAll("nav a");
          anchors.forEach((anchor) => {
            const link = anchor.cloneNode(true) as HTMLAnchorElement;
            link.className =
              "font-label-lg text-label-lg text-on-surface px-space-md py-3 rounded-full hover:bg-surface-container-high";
            link.removeAttribute("aria-current");
            panel?.appendChild(link);
          });
          header.appendChild(panel);
          menuButton.setAttribute("aria-expanded", "true");
          return;
        }
        const hidden = panel.classList.toggle("hidden");
        menuButton.setAttribute("aria-expanded", hidden ? "false" : "true");
        return;
      }

      const tab = target.closest<HTMLButtonElement>("#utility-tabs button");
      if (tab) {
        const tool = tab.dataset.tool ?? "feed";
        const container = document.getElementById("tool-content");
        root.querySelectorAll("#utility-tabs button").forEach((button) => {
          button.classList.remove("bg-surface-container-lowest", "text-primary", "shadow-xs", "font-semibold");
          button.classList.add("text-on-surface-variant", "font-medium");
        });
        tab.classList.add("bg-surface-container-lowest", "text-primary", "shadow-xs", "font-semibold");
        tab.classList.remove("text-on-surface-variant", "font-medium");
        if (container) {
          container.innerHTML = `<div class="grid place-items-center py-8">${SPIN}</div>`;
          window.setTimeout(() => {
            container.innerHTML = TOOLS[tool] ?? TOOLS.feed;
          }, 450);
        }
        return;
      }

      const toolButton = target.closest<HTMLButtonElement>("#tool-content button");
      if (toolButton) {
        beginBusy(toolButton);
        window.setTimeout(() => endBusy(toolButton), 700);
        return;
      }

      const anchor = target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      if (href.startsWith("#") && href.length > 1) return;
      if (href === "#" || href === "") {
        event.preventDefault();
        return;
      }
      if (/^(https?:|mailto:|tel:)/.test(href)) return;
      if (!href.startsWith("/")) return;

      event.preventDefault();
      const icon = anchor.querySelector(".material-symbols-outlined");
      const iconName = icon?.textContent?.trim();
      const download = iconName === "file_download" || iconName === "download";
      const go = () => {
        const path = href.split("#")[0];
        const hash = href.includes("#") ? href.split("#")[1] : "";
        if (path === window.location.pathname && hash) {
          scrollToHash(hash);
          return;
        }
        router.push(href);
      };
      if (download) {
        beginBusy(anchor);
        window.setTimeout(() => {
          endBusy(anchor);
          go();
        }, 600);
        return;
      }
      go();
    };

    const onSubmit = (event: Event) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement) || !form.hasAttribute("data-stitch-form")) return;
      event.preventDefault();
      const error = form.querySelector<HTMLElement>("[data-form-error]");
      error?.classList.add("hidden");
      error?.classList.remove("flex");
      if (!form.checkValidity()) {
        form.reportValidity();
        error?.classList.remove("hidden");
        error?.classList.add("flex");
        return;
      }
      const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
      if (button) beginBusy(button);
      window.setTimeout(() => {
        if (button) endBusy(button);
        if (form.dataset.stitchForm === "contact") {
          form.reset();
          form.querySelector("#form-feedback")?.classList.remove("hidden");
          return;
        }
        form.classList.add("hidden");
        document.getElementById("success-msg")?.classList.remove("hidden");
      }, 700);
    };

    const onInvalid = (event: Event) => {
      const field = event.target;
      if (!(field instanceof HTMLElement)) return;
      const form = field.closest("form");
      if (!form?.hasAttribute("data-stitch-form")) return;
      event.preventDefault();
      const error = form.querySelector<HTMLElement>("[data-form-error]");
      error?.classList.remove("hidden");
      error?.classList.add("flex");
    };

    root.addEventListener("click", onClick);
    root.addEventListener("submit", onSubmit);
    root.addEventListener("invalid", onInvalid, true);

    const hash = window.location.hash.replace("#", "");
    if (hash) {
      window.setTimeout(() => scrollToHash(hash), 50);
    }

    return () => {
      root.removeEventListener("click", onClick);
      root.removeEventListener("submit", onSubmit);
      root.removeEventListener("invalid", onInvalid, true);
    };
  }, [html, router]);

  return <div className="stitch-root" ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
}
