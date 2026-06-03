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
          <img src="${escapeAttr(entry.image)}" alt="${escapeAttr(entry.alt)}" loading="lazy" width="800" height="600">
        </figure>
        <p class="timeline-note">${escapeHtml(entry.note)}</p>
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

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function formatCropNameForDisplay(name) {
    return String(name || "").replace(/_/g, " ");
  }

  function escapeAttr(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;");
  }
})();
