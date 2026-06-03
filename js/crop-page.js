/**
 * Crop timeline page — reads ?id= from the URL and shows that crop's photos
 * Add photos in data.js under the crop's "timeline" array (see comments there).
 */

(function () {
  const params = new URLSearchParams(window.location.search);
  const cropId = params.get("id");
  const container = document.getElementById("crop-detail");

  if (!container) return;

  const crop = farmData.crops.find((c) => c.id === cropId);

  if (!crop) {
    document.title = "Crop not found — Oak Creek Dry Farming Greens";
    container.innerHTML = `
      <div class="crop-not-found">
        <h1>Crop not found</h1>
        <p>No crop matches "<strong>${escapeHtml(cropId || "")}</strong>". Check the id in <code>js/data.js</code> and your link.</p>
        <p><a href="index.html#crops">← Back to all crops</a></p>
      </div>
    `;
    return;
  }

  const displayName = formatCropNameForDisplay(crop.name);
  document.title = `${displayName} — Oak Creek Dry Farming Greens`;

  // Sort timeline by day number (highest / most recent first)
  const entries = [...(crop.timeline || [])].sort(
    (a, b) => b.dayNumber - a.dayNumber
  );

  const timelineHtml = entries
    .map(
      (entry) => `
      <div class="timeline-entry">
        <span class="timeline-marker" aria-hidden="true"></span>
        <div class="timeline-date-block">
          <span class="timeline-day">Day ${entry.dayNumber}</span>
          <span class="timeline-date">${escapeHtml(entry.date)}</span>
        </div>
        <figure class="timeline-photo">
          <img
            src="${escapeAttr(entry.image)}"
            alt="${escapeAttr(entry.alt)}"
            loading="lazy"
            width="800"
            height="600"
          >
        </figure>
        <p class="timeline-note">${escapeHtml(entry.note)}</p>
      </div>
    `
    )
    .join("");

  container.innerHTML = `
    <header class="crop-header">
      <span class="bed-tag">${escapeHtml(crop.bed)}</span>
      <h1>${escapeHtml(displayName)}</h1>
      <p class="crop-desc">${escapeHtml(formatCropNameForDisplay(crop.description))}</p>
    </header>
    <section class="timeline" aria-label="Photo timeline">
      ${timelineHtml || "<p>No photos yet. Add entries to this crop's timeline in js/data.js.</p>"}
    </section>
  `;

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
