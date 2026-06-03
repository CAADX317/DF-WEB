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

  // Add or remove row numbers here after defining their grid in garden-map.css.
  const rows = [1, 2, 3, 4, 5];
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

      const sub = data.cropSecondary ? ` · ${data.cropSecondary}` : "";
      titleEl.textContent = formatCropNameForDisplay(data.crop) + sub;
      bedEl.textContent = data.bed;

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
      const slides = images
        .map(
          (src, i) =>
            `<img src="${escapeAttr(src)}" alt="" class="${i === index ? "is-active" : ""}" loading="lazy">`
        )
        .join("");
      sliderEl.innerHTML = slides;
      sliderEl.style.setProperty("--slide-index", index);
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
      floatEl.classList.remove("is-visible");
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
    return normalizeCropForFilter(bed.crop);
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

  function getColorClassFromName(bed) {
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
})();
