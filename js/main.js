/**
 * Homepage logic — builds crop cards and garden bed list from data.js
 * You usually do NOT need to edit this file when adding crops or photos.
 */

(function () {
  const { gardenMap, crops } = farmData;

  // Garden map image (optional override from data.js)
  const mapImg = document.getElementById("garden-map-image");
  if (mapImg && gardenMap.image) {
    mapImg.src = gardenMap.image;
  }

  // Garden bed list
  const bedList = document.getElementById("garden-bed-list");
  if (bedList) {
    bedList.innerHTML = gardenMap.beds
      .map((bed) => {
        if (bed.cropId) {
          return `<li><a href="crop.html?id=${encodeURIComponent(bed.cropId)}">${escapeHtml(bed.label)}</a></li>`;
        }
        return `<li><span class="bed-muted">${escapeHtml(bed.label)}</span></li>`;
      })
      .join("");
  }

  // Crop cards
  const cropGrid = document.getElementById("crop-cards");
  if (cropGrid) {
    cropGrid.innerHTML = crops
      .map((crop) => {
        const photoCount = crop.timeline ? crop.timeline.length : 0;
        return `
          <a class="crop-card" href="crop.html?id=${encodeURIComponent(crop.id)}">
            <div class="crop-card-image">
              <img src="${escapeAttr(crop.cardImage)}" alt="${escapeAttr(formatCropNameForDisplay(crop.name))}">
            </div>
            <div class="crop-card-body">
              <p class="crop-card-bed">${escapeHtml(crop.bed)}</p>
              <h3>${escapeHtml(formatCropNameForDisplay(crop.name))}</h3>
              <p>${escapeHtml(formatCropNameForDisplay(crop.description))}</p>
              <span class="crop-card-meta">${photoCount} photo${photoCount === 1 ? "" : "s"} in timeline →</span>
            </div>
          </a>
        `;
      })
      .join("");
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
