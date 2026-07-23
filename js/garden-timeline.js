/**
 * Crop timeline pages — reads data-crop from <body> and garden-data.js → timelines
 */

(function () {
  const bedParam = new URLSearchParams(window.location.search).get("bed");
  const bedCropId = bedParam && /^\d+$/.test(bedParam) ? `bed-${bedParam}` : null;
  const cropId = bedCropId || document.body.dataset.crop;
  const container = document.getElementById("crop-detail");
  const source = typeof gardenData !== "undefined" ? gardenData : null;

  if (!container || !cropId || !source) return;

  const crop = source.timelines[cropId];

  if (!crop) {
    container.innerHTML = `
      <div class="crop-not-found">
        <h1>Timeline not found</h1>
        <p>Add "<strong>${escapeHtml(cropId)}</strong>" under <code>timelines</code> in <code>js/garden-data.js</code>.</p>
        <p><a href="index.html#map">← Back to garden map</a></p>
      </div>
    `;
    return;
  }

  const displayName = formatCropNameForDisplay(crop.name);
  const bedNumber = getBedNumber(crop);
  if (bedNumber >= 9) {
    container.classList.add("bed-9-plus");
  }
  if ((crop.entries || []).some((entry) => entry.sections?.length)) {
    container.classList.add("has-comparison-sections");
  }
  const title = crop.nameSecondary
    ? `${displayName} (${crop.nameSecondary})`
    : displayName;
  document.title = `${displayName} — Oak Creek Dry Farming Greens`;

  const entries = [...(crop.entries || [])].sort(
    (a, b) => b.dayNumber - a.dayNumber
  );
  const startNote = getTimelineStartNote(source, cropId, entries);
  if (startNote) entries.push(startNote);

  const timelineHtml = entries
    .map((entry) =>
      entry.textOnly
        ? `
      <div class="timeline-entry">
        <span class="timeline-marker" aria-hidden="true"></span>
        ${entry.date ? `
        <div class="timeline-date-block">
          <span class="timeline-day">Day ${entry.dayNumber}</span>
          <span class="timeline-date">${escapeHtml(entry.date)}</span>
        </div>
        ` : ""}
        <p class="timeline-note">${escapeHtml(entry.text)}</p>
      </div>
    `
        : `
      <div class="timeline-entry">
        <span class="timeline-marker" aria-hidden="true"></span>
        <div class="timeline-date-block">
          <span class="timeline-day">Day ${entry.dayNumber}</span>
          <span class="timeline-date">${escapeHtml(entry.date)}</span>
        </div>
        <figure class="timeline-photo">
          ${renderTimelineImages(entry)}
        </figure>
        <p class="timeline-note">${escapeHtml(entry.note)}</p>
        ${renderTimelineSections(entry)}
      </div>
    `
    )
    .join("");

  const sub = crop.nameSecondary
    ? ` <span class="bed-tag-sub">(${escapeHtml(crop.nameSecondary)})</span>`
    : "";

  container.innerHTML = `
    <header class="crop-header">
      <span class="bed-tag">${escapeHtml(crop.bed)}</span>
      <h1>${escapeHtml(displayName)}${sub}</h1>
      <p class="crop-desc">${escapeHtml(formatCropNameForDisplay(crop.description))}</p>
    </header>
    <section class="timeline" aria-label="Crop photo timeline">
      ${timelineHtml || "<p>No photos yet — add entries in js/garden-data.js</p>"}
    </section>
  `;
  setupImageLightbox();

  function getTimelineStartNote(data, id, currentEntries) {
    const note = data.timelineStartNote;
    if (!note || currentEntries.some((entry) => entry.text === note.text || entry.note === note.text)) {
      return null;
    }

    if (id.startsWith("bed-")) return null;

    const link = `${id}.html`;
    const hasEligibleBed = data.beds.some((bed) => {
      const bedNumber = Number(bed.id.replace("bed-", ""));
      return bed.link === link && bedNumber >= note.bedStart && bedNumber <= note.bedEnd;
    });

    return hasEligibleBed ? { ...note, textOnly: true } : null;
  }

  function renderTimelineImages(entry) {
    return getEntryImages(entry)
      .map(
        ({ src, alt }) =>
          `<img src="${escapeAttr(getThumbnailSrc(src))}" data-full-src="${escapeAttr(src)}" alt="${escapeAttr(alt)}" loading="lazy" decoding="async" width="800" height="600">`
      )
      .join("");
  }

  function renderTimelineSections(entry) {
    if (!entry.sections?.length) return "";

    return entry.sections
      .map(
        (section) => `
        <section class="timeline-photo-section">
          <h2>${escapeHtml(section.title)}</h2>
          <figure class="timeline-photo timeline-photo-grid">
            ${getSectionImages(section)
              .map(
                ({ src, alt }) =>
                  `<img src="${escapeAttr(getThumbnailSrc(src))}" data-full-src="${escapeAttr(src)}" alt="${escapeAttr(alt)}" loading="lazy" decoding="async" width="800" height="600">`
              )
              .join("")}
          </figure>
        </section>
      `
      )
      .join("");
  }

  function getEntryImages(entry) {
    const images = [entry.image, ...(entry.images || [])].filter(Boolean);
    return [...new Set(images)].map((src, index) => ({
      src,
      alt: index === 0 ? entry.alt : `${entry.alt} close-up ${index}`,
    }));
  }

  function getSectionImages(section) {
    return [...new Set(section.images || [])].map((src, index) => ({
      src,
      alt: index === 0 ? section.alt : `${section.alt} ${index + 1}`,
    }));
  }

  function getThumbnailSrc(src) {
    return /^(?:https?:|data:|blob:)/i.test(src)
      ? src
      : `assets/thumbnails/${src}.webp`;
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function formatCropNameForDisplay(name) {
    return String(name || "").replace(/_/g, " ");
  }

  function getBedNumber(cropData) {
    const match = String(cropData.bed || "").match(/\d+/);
    return match ? Number(match[0]) : 0;
  }

  function escapeAttr(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;");
  }

  function setupImageLightbox() {
    let lightbox = document.getElementById("imageLightbox");
    if (!lightbox) {
      lightbox = document.createElement("div");
      lightbox.id = "imageLightbox";
      lightbox.className = "image-lightbox";
      lightbox.setAttribute("aria-hidden", "true");
      lightbox.innerHTML = `
        <div class="image-lightbox__content">
          <button class="image-lightbox__close" type="button" aria-label="Close image preview">×</button>
          <img class="image-lightbox__image" src="" alt="">
          <div class="image-lightbox__caption"></div>
        </div>
      `;
      document.body.appendChild(lightbox);
    }

    if (lightbox.dataset.ready === "true") return;
    lightbox.dataset.ready = "true";

    const lightboxImg = lightbox.querySelector(".image-lightbox__image");
    const caption = lightbox.querySelector(".image-lightbox__caption");
    const closeButton = lightbox.querySelector(".image-lightbox__close");
    lightboxImg.addEventListener("load", () => {
      lightbox.classList.remove("is-loading");
    });
    lightboxImg.addEventListener("error", () => {
      lightbox.classList.remove("is-loading");
    });

    function openLightbox(img) {
      lightbox.classList.add("is-loading");
      lightboxImg.src = img.dataset.fullSrc || img.currentSrc || img.src;
      lightboxImg.alt = img.alt || "";
      caption.textContent = img.alt || "";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightbox.classList.remove("is-loading");
      lightbox.setAttribute("aria-hidden", "true");
      lightboxImg.src = "";
      caption.textContent = "";
      document.body.style.overflow = "";
    }

    document.addEventListener("click", (event) => {
      const img = event.target.closest(
        ".timeline-image img, .timeline-photo img, .timeline-gallery img, .barley-card img"
      );

      if (img && !img.closest(".crop-preview-float")) {
        openLightbox(img);
        return;
      }

      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    closeButton.addEventListener("click", closeLightbox);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
        closeLightbox();
      }
    });
  }
})();
