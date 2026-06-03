/**
 * Shared timeline page script for backyard crops (cilantro.html, beans.html, etc.)
 * Crop id comes from <body data-crop="cilantro"> on each HTML file.
 * Timeline content: js/backyard-garden-data.js → timelines
 */

(function () {
  const cropId = document.body.dataset.crop;
  const container = document.getElementById("crop-detail");

  if (!container || !cropId) return;

  const crop = backyardGarden.timelines[cropId];

  if (!crop) {
    container.innerHTML = `
      <div class="crop-not-found">
        <h1>Timeline not found</h1>
        <p>Add an entry for "<strong>${escapeHtml(cropId)}</strong>" in <code>js/backyard-garden-data.js</code> under <code>timelines</code>.</p>
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
  const startNote = getTimelineStartNote(backyardGarden, cropId, entries);
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
      ${timelineHtml || "<p>No photos yet — add entries in js/backyard-garden-data.js</p>"}
    </section>
  `;

  function getTimelineStartNote(data, id, currentEntries) {
    const note = data.timelineStartNote;
    if (
      !note ||
      !note.cropIds.includes(id) ||
      currentEntries.some((entry) => entry.text === note.text || entry.note === note.text)
    ) {
      return null;
    }

    return { ...note, textOnly: true };
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
