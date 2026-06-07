// Shared client UI: mobile nav toggle and scroll-reveal. Loaded on every page.
// Motion is intentionally light and fully degrades under reduced-motion.

// --- Mobile navigation -------------------------------------------------------
const toggle = document.querySelector("[data-nav-toggle]");
const navEl = document.querySelector("[data-nav]");

if (toggle && navEl) {
  toggle.addEventListener("click", () => {
    const open = navEl.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  // Close the menu after following a link.
  navEl.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navEl.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// --- Theme toggle ------------------------------------------------------------
const themeBtn = document.querySelector("[data-theme-toggle]");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore storage errors */
    }
  });
}

// --- Scroll reveal -----------------------------------------------------------
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const targets = document.querySelectorAll("[data-reveal]");

if (reduce || !("IntersectionObserver" in window)) {
  targets.forEach((el) => el.classList.add("is-in"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  targets.forEach((el) => observer.observe(el));
}

// --- Interactive state map ---------------------------------------------------
const mapEl = document.querySelector("[data-statemap]");
if (mapEl) {
  let info = {};
  try {
    info = JSON.parse(mapEl.dataset.statemap);
  } catch {
    info = {};
  }
  const svg = mapEl.querySelector("svg");
  if (svg) {
    for (const [code, d] of Object.entries(info)) {
      const el = svg.querySelector("#" + (window.CSS && CSS.escape ? CSS.escape(code) : code));
      if (!el) continue;
      el.style.cursor = "pointer";
      el.setAttribute("role", "link");
      el.setAttribute("tabindex", "0");
      el.setAttribute("aria-label", `${d.name}: ${d.n} interstate${d.n === 1 ? "" : "s"}`);
      const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
      title.textContent = `${d.name}: ${d.n} interstate${d.n === 1 ? "" : "s"}`;
      el.appendChild(title);
      const go = () => { window.location.href = "/states/" + d.slug; };
      el.addEventListener("click", go);
      el.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          go();
        }
      });
    }
  }
}
