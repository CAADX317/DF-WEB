/**
 * Oak Creek Dry Farming Greens — interactive 5-row garden map
 * Edit bed data in js/garden-data.js (not this file).
 */

(function () {
  const { mapTitle, mapSubtitle, mapTip, filterButtons, beds } = gardenData;
  const cropFilters = buildCropFilters(beds, filterButtons);

  const mapRoot = document.getElementById("garden-map");
  const titleEl = document.getElementById("map-page-title");
  const introEl = document.getElementById("map-page-intro");
  const tipEl = document.getElementById("map-page-tip");
  const filtersEl = document.getElementById("map-filters");

  if (titleEl && mapTitle) titleEl.textContent = mapTitle;
  if (introEl && mapSubtitle) introEl.textContent = mapSubtitle;
  if (tipEl && mapTip) tipEl.textContent = mapTip;

  if (!mapRoot || !beds?.length) return;

  // Sweet potatoes lead the map; all other rows retain their existing order.
  const rows = [6, 1, 2, 3, 4, 5, 7];
  mapRoot.innerHTML = rows
    .map((rowNum) => {
      const rowBeds = beds.filter((b) => b.mapRow === rowNum);
      return `
        <div class="map-row row-${rowNum}" data-row="${rowNum}">
          ${rowBeds.map((bed) => buildBed(bed)).join("")}
        </div>
      `;
    })
    .join("");

  buildFilterButtons(filtersEl, cropFilters);
  initFilters(mapRoot, filtersEl);
  initFloatingPreview(mapRoot);
  initBedDeepLinks(mapRoot);

  function buildBed(bed) {
    const span = bed.colSpan || 1;
    const sub = bed.cropSecondary
      ? `<span class="bed-label-sub">${escapeHtml(bed.cropSecondary)}</span>`
      : "";
    const filter = getCropFilterKey(bed);
    const colorClass = getColorClassFromName(bed);
    const className = ["map-bed", colorClass].filter(Boolean).join(" ");

    return `
      <a
        class="${escapeAttr(className)}"
        href="${escapeAttr(bed.link)}"
        data-bed-id="${escapeAttr(bed.id)}"
        data-filter="${escapeAttr(filter)}"
        style="grid-column: span ${span}; --bed-color: ${escapeAttr(bed.color)}"
        aria-label="${escapeAttr(formatCropNameForDisplay(bed.crop))} — ${escapeAttr(bed.bed)}"
      >
        <span class="bed-crop">${escapeHtml(formatCropNameForDisplay(bed.crop))}</span>
        ${sub}
        <span class="bed-num">${escapeHtml(bed.bed)}</span>
      </a>
    `;
  }

  function buildFilterButtons(container, labels) {
    if (!container || !labels) return;
    container.innerHTML = `
      <button type="button" class="map-filter-btn is-active" data-filter="all">All beds</button>
      ${labels
        .map(
          ({ key, label }) =>
            `<button type="button" class="map-filter-btn" data-filter="${escapeAttr(key)}">${escapeHtml(label)}</button>`
        )
        .join("")}
    `;
  }

  function initFilters(map, filters) {
    if (!filters) return;
    const allBeds = map.querySelectorAll(".map-bed");
    const allButtons = filters.querySelectorAll(".map-filter-btn");
    const allButton = filters.querySelector('.map-filter-btn[data-filter="all"]');
    let activeFilter = "all";

    filters.addEventListener("click", (e) => {
      const btn = e.target.closest(".map-filter-btn");
      if (!btn) return;

      const filter = btn.dataset.filter;
      if (filter === "all" || filter === activeFilter) {
        clearFilter();
        return;
      }

      applyFilter(filter, btn);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") clearFilter();
    });

    function applyFilter(filter, activeButton) {
      activeFilter = filter;
      allButtons.forEach((button) => {
        button.classList.toggle("is-active", button === activeButton);
      });
      allBeds.forEach((bed) => {
        const match = bed.dataset.filter === filter;
        bed.classList.toggle("is-highlighted", match);
        bed.classList.toggle("is-dimmed", !match);
      });
    }

    function clearFilter() {
      activeFilter = "all";
      allButtons.forEach((button) => {
        button.classList.toggle("is-active", button === allButton);
      });
      allBeds.forEach((bed) => {
        bed.classList.remove("is-highlighted", "is-dimmed");
      });
    }
  }

  function initFloatingPreview(map) {
    const floatEl = createFloat();
    const imgEl = floatEl.querySelector(".crop-preview-float__img");
    const sliderEl = floatEl.querySelector(".crop-preview-float__slider");
    const titleEl = floatEl.querySelector(".crop-preview-float__title");
    const bedEl = floatEl.querySelector(".crop-preview-float__bed");

    let slideTimer = null;
    let images = [];
    let index = 0;
    let activeBed = null;
    let activeLink = null;

    const bedData = new Map();
    beds.forEach((b) => bedData.set(b.id, b));

    map.querySelectorAll(".map-bed").forEach((el) => {
      const data = bedData.get(el.dataset.bedId);
      if (!data) return;
      el._gardenData = data;

      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      el.addEventListener("focus", onEnter);
      el.addEventListener("blur", onLeave);
    });

    function onEnter(e) {
      activeBed = e.currentTarget;
      activeLink = activeBed;
      const data = activeBed._gardenData;
      activeBed.classList.add("is-lit");

      images = data.images || [];
      index = 0;
      floatEl.classList.toggle("is-contain", data.previewFit === "contain");

      const sub = data.cropSecondary ? ` · ${data.cropSecondary}` : "";
      titleEl.textContent = data.previewTitle || (formatCropNameForDisplay(data.crop) + sub);
      bedEl.textContent = data.previewSubtitle || data.bed;

      renderSlider();
      clearInterval(slideTimer);
      if (images.length > 1) {
        slideTimer = setInterval(() => {
          index = (index + 1) % images.length;
          renderSlider();
        }, 2600);
      }

      floatEl.classList.add("is-visible");
      onMove(e);
    }

    function renderSlider() {
      if (!images.length) {
        sliderEl.innerHTML = '<p class="crop-preview-float__empty">Add images in garden-data.js</p>';
        return;
      }
      sliderEl.innerHTML = `<img src="${escapeAttr(getThumbnailSrc(images[index]))}" alt="" class="is-active" loading="lazy" decoding="async">`;
    }

    function onMove(e) {
      if (!activeBed) return;
      const pad = 16;
      const w = floatEl.offsetWidth || 268;
      const h = floatEl.offsetHeight || 240;
      let x = e.clientX + pad;
      let y = e.clientY + pad;
      if (x + w > window.innerWidth - 8) x = e.clientX - w - pad;
      if (y + h > window.innerHeight - 8) y = e.clientY - h - pad;
      floatEl.style.left = `${Math.max(8, x)}px`;
      floatEl.style.top = `${Math.max(8, y)}px`;
    }

    function onLeave() {
      if (activeBed) activeBed.classList.remove("is-lit");
      activeBed = null;
      clearInterval(slideTimer);
      floatEl.classList.remove("is-visible", "is-contain");
    }

    if (!window.matchMedia("(hover: hover)").matches) {
      setupTouch(map, floatEl, bedData);
    }
  }

  function createFloat() {
    let el = document.getElementById("crop-preview-float");
    if (el) return el;

    el = document.createElement("div");
    el.id = "crop-preview-float";
    el.className = "crop-preview-float";
    el.innerHTML = `
      <p class="crop-preview-float__title"></p>
      <p class="crop-preview-float__bed"></p>
      <div class="crop-preview-float__slider"></div>
      <p class="crop-preview-float__hint">Click to view timeline</p>
    `;
    document.body.appendChild(el);
    return el;
  }

  function setupTouch(map, floatEl, bedData) {
    map.querySelectorAll(".map-bed").forEach((bed) => {
      let opened = false;
      bed.addEventListener("click", (e) => {
        if (!opened) {
          e.preventDefault();
          opened = true;
          bed.dispatchEvent(new Event("mouseenter"));
          floatEl.querySelector(".crop-preview-float__hint").textContent =
            "Tap again for timeline";
          const reset = (ev) => {
            if (!bed.contains(ev.target) && !floatEl.contains(ev.target)) {
              opened = false;
              bed.classList.remove("is-lit");
              floatEl.classList.remove("is-visible");
              document.removeEventListener("click", reset);
            }
          };
          setTimeout(() => document.addEventListener("click", reset), 0);
        }
      });
    });
  }

  function initBedDeepLinks(map) {
    const bedData = new Map(
      beds
        .filter((bed) => /^bed-\d+$/.test(bed.id))
        .map((bed) => [bed.id, bed])
    );
    const detail = createBedDetail();
    const frame = detail.querySelector(".bed-detail__frame");
    const title = detail.querySelector(".bed-detail__title");
    const loading = detail.querySelector(".bed-detail__loading");
    const closeButton = detail.querySelector(".bed-detail__close");
    let activeBedId = null;
    let lastFocusedBed = null;
    let lastWarnedInvalidHash = null;

    map.addEventListener("click", (event) => {
      const bedLink = event.target.closest(".map-bed");
      if (!bedLink || event.defaultPrevented) return;

      const bed = bedData.get(bedLink.dataset.bedId);
      if (!bed) return;

      event.preventDefault();
      lastFocusedBed = bedLink;
      const nextHash = `#${bed.id}`;
      if (window.location.hash === nextHash) {
        openBed(bed);
      } else {
        window.location.hash = nextHash;
      }
    });

    closeButton.addEventListener("click", closeAndClearHash);
    detail.addEventListener("click", (event) => {
      if (event.target === detail) closeAndClearHash();
    });
    frame.addEventListener("load", () => {
      loading.hidden = true;
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && detail.classList.contains("is-open")) {
        closeAndClearHash();
      }
    });

    window.addEventListener("hashchange", syncFromHash);
    window.addEventListener("popstate", syncFromHash);
    syncFromHash();

    function syncFromHash() {
      const hash = window.location.hash;
      const match = hash.match(/^#bed-(\d+)$/);

      if (!match) {
        if (/^#bed-/i.test(hash) && lastWarnedInvalidHash !== hash) {
          console.warn(
            `[Oak Creek garden map] No bed matches the permanent URL hash "${hash}".`
          );
          lastWarnedInvalidHash = hash;
        } else if (!/^#bed-/i.test(hash)) {
          lastWarnedInvalidHash = null;
        }
        closeBed();
        return;
      }

      const bed = bedData.get(`bed-${Number(match[1])}`);
      if (!bed) {
        if (lastWarnedInvalidHash !== hash) {
          console.warn(
            `[Oak Creek garden map] Bed ${match[1]} does not exist; showing the normal map view.`
          );
          lastWarnedInvalidHash = hash;
        }
        closeBed();
        return;
      }

      lastWarnedInvalidHash = null;
      openBed(bed);
    }

    function openBed(bed) {
      const bedLink = map.querySelector(
        `[data-bed-id="${escapeSelectorValue(bed.id)}"]`
      );
      map.querySelectorAll(".map-bed.is-deep-linked").forEach((item) => {
        item.classList.remove("is-deep-linked");
      });
      if (bedLink) {
        bedLink.classList.add("is-deep-linked");
        bedLink.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }

      title.textContent = `${bed.bed} · ${formatCropNameForDisplay(bed.crop)}`;
      frame.title = `${bed.bed} timeline`;
      if (activeBedId !== bed.id || !detail.classList.contains("is-open")) {
        loading.hidden = false;
        frame.src = bed.link;
      }
      activeBedId = bed.id;
      detail.classList.add("is-open");
      detail.setAttribute("aria-hidden", "false");
      document.body.classList.add("bed-detail-open");
      closeButton.focus({ preventScroll: true });
    }

    function closeAndClearHash() {
      const cleanUrl = `${window.location.pathname}${window.location.search}`;
      history.pushState(null, "", cleanUrl);
      closeBed();
    }

    function closeBed() {
      if (!detail.classList.contains("is-open") && !activeBedId) return;
      detail.classList.remove("is-open");
      detail.setAttribute("aria-hidden", "true");
      document.body.classList.remove("bed-detail-open");
      map.querySelectorAll(".map-bed.is-deep-linked").forEach((item) => {
        item.classList.remove("is-deep-linked");
      });
      frame.removeAttribute("src");
      loading.hidden = false;
      activeBedId = null;
      if (lastFocusedBed?.isConnected) {
        lastFocusedBed.focus({ preventScroll: true });
      }
    }
  }

  function createBedDetail() {
    let detail = document.getElementById("bed-detail");
    if (detail) return detail;

    detail = document.createElement("div");
    detail.id = "bed-detail";
    detail.className = "bed-detail";
    detail.setAttribute("role", "dialog");
    detail.setAttribute("aria-modal", "true");
    detail.setAttribute("aria-hidden", "true");
    detail.setAttribute("aria-labelledby", "bed-detail-title");
    detail.innerHTML = `
      <div class="bed-detail__panel">
        <header class="bed-detail__header">
          <p class="bed-detail__title" id="bed-detail-title"></p>
          <button class="bed-detail__close" type="button" aria-label="Close bed timeline">×</button>
        </header>
        <p class="bed-detail__loading" role="status">Loading timeline…</p>
        <iframe class="bed-detail__frame" title="Bed timeline"></iframe>
      </div>
    `;
    document.body.appendChild(detail);
    return detail;
  }

  function escapeHtml(text) {
    const d = document.createElement("div");
    d.textContent = text;
    return d.innerHTML;
  }

  function buildCropFilters(items, fallbackLabels) {
    const seen = new Map();
    items.forEach((bed) => {
      const key = getCropFilterKey(bed);
      if (!seen.has(key)) {
        seen.set(key, {
          key,
          label: key,
        });
      }
    });

    if (seen.size) return [...seen.values()];

    return (fallbackLabels || []).map((label) => ({
      key: label,
      label: formatCropNameForDisplay(label),
    }));
  }

  function getCropFilterKey(bed) {
    return bed.filter || normalizeCropForFilter(bed.crop);
  }

  function normalizeCropForFilter(name) {
    return String(name || "")
      .replace(/\([^)]*\)/g, "")
      .replace(/_/g, " ")
      .trim()
      .replace(/\s+/g, " ")
      .replace(/\d+$/, "")
      .trim();
  }

  function formatCropNameForDisplay(name) {
    return String(name || "").replace(/_/g, " ");
  }

  function getThumbnailSrc(src) {
    return /^(?:https?:|data:|blob:)/i.test(src)
      ? src
      : `assets/thumbnails/${src}.webp`;
  }

  function getColorClassFromName(bed) {
    if (bed.id === "barley-row") return "";

    const bedNumber = Number(String(bed.id || "").replace("bed-", ""));
    if (bedNumber <= 11) return "";

    const imageNames = (bed.images || [])
      .map((src) => String(src).split("/").slice(1).join(" "))
      .join(" ");
    const lower = `${bed.crop || ""} ${imageNames}`.toLowerCase();

    if (lower.includes("magenta")) return "color-magenta";
    if (lower.includes("red")) return "color-red";
    if (lower.includes("golden") || lower.includes("gold")) return "color-gold";
    if (lower.includes("purple")) return "color-purple";
    if (lower.includes("black")) return "color-black";
    if (lower.includes("white")) return "color-white";
    if (lower.includes("pink")) return "color-pink";
    if (lower.includes("yellow")) return "color-yellow";
    if (lower.includes("green")) return "color-green";

    return "color-default";
  }

  function escapeAttr(text) {
    return String(text ?? "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;");
  }

  function escapeSelectorValue(text) {
    if (window.CSS?.escape) return CSS.escape(text);
    return String(text).replace(/["\\]/g, "\\$&");
  }
})();
