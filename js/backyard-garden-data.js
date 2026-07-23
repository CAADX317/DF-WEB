/**
 * =============================================================================
 *  OAK CREEK DRY FARMING GREENS — EDIT THIS FILE
 * =============================================================================
 *
 *  HOW THE LAYOUT WORKS
 *  ────────────────────
 *  The map is a grid (see mapGrid below). Each plot uses:
 *    col, row     → top-left cell (starts at 1)
 *    colSpan      → width in grid cells
 *    rowSpan      → height in grid cells
 *
 *  TO ADD A NEW SECTION
 *  ────────────────────
 *  1. Copy a plot object from the `plots` array.
 *  2. Set col, row, colSpan, rowSpan so it fits without overlapping others.
 *  3. Fill in name, previewImages, timelineLink, zoneColor.
 *
 *  NESTED SUB-SECTIONS (e.g. bean rows)
 *  ────────────────────────────────────
 *  Use `children` inside a parent plot. The parent needs col/row/colSpan/rowSpan.
 *  Children use their own col, row, colSpan, rowSpan on the parent's mini-grid.
 *
 *  TO CHANGE PHOTOS
 *  ────────────────
 *  Edit previewImages — 2–4 image paths per plot (hover preview cycles them).
 *
 *  TO CHANGE TIMELINE LINKS
 *  ────────────────────────
 *  Set timelineLink: "cilantro.html" or null if not clickable.
 *
 *  TIMELINES (full journal pages)
 *  ──────────────────────────────
 *  Edit `timelines` at the bottom — keys match crop `id` (e.g. "cilantro").
 *
 * =============================================================================
 */

const backyardGarden = {
  pageTitle: "Oak Creek Dry Farming Greens Map",
  pageIntro:
    "Hover over a bed to preview growth photos. Click any section to open its timeline.",

  /**
   * Shared with the main garden map timeline rules.
   * cropIds lists the legacy timeline pages linked from beds 8–46.
   */
  timelineStartNote: {
    bedStart: 10,
    bedEnd: 47,
    date: "May 1st",
    label: "Transplant day",
    text: "Transplant day: May 1st",
    cropIds: [
      "chives",
      "cilantro",
      "bok-choy",
      "tomatoes",
      "bitter-melon",
      "carrots",
      "beets",
      "squash",
    ],
  },

  /**
   * MAP GRID SIZE — change columns/rows if you need a finer or coarser layout
   */
  mapGrid: {
    columns: 24,
    rows: 16,
  },

  /**
   * GARDEN PLOTS — position each block on the grid above
   *
   * zoneColor     → bed fill (muted green / brown / soil tones)
   * previewImages → hover slideshow
   * timelineLink  → e.g. "beans.html"
   * children      → optional sub-beds inside this plot
   */
  plots: [
    {
      id: "bok-choy",
      name: "Bok Choy",
      nameSecondary: "菜心",
      col: 1,
      row: 1,
      colSpan: 7,
      rowSpan: 4,
      zoneColor: "#c5dbb8",
      previewImages: [
        "https://images.unsplash.com/photo-1615485290381-481e1d967c5e?w=400&q=80",
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80",
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
      ],
      timelineLink: "bok-choy.html",
    },
    {
      id: "cilantro",
      name: "Cilantro",
      col: 8,
      row: 1,
      colSpan: 6,
      rowSpan: 4,
      zoneColor: "#b8cfaa",
      previewImages: [
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80",
        "https://images.unsplash.com/photo-1466692476867-aef1dfb1e735?w=400&q=80",
        "https://images.unsplash.com/photo-1607301405207-b7a5c8a7a4c4?w=400&q=80",
      ],
      timelineLink: "cilantro.html",
    },
    {
      id: "chives",
      name: "Chives",
      col: 15,
      row: 1,
      colSpan: 5,
      rowSpan: 4,
      zoneColor: "#aec99e",
      previewImages: [
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80",
        "https://images.unsplash.com/photo-1466692476867-aef1dfb1e735?w=400&q=80",
      ],
      timelineLink: "chives.html",
    },
    {
      id: "path-north",
      name: "Path",
      col: 21,
      row: 1,
      colSpan: 4,
      rowSpan: 4,
      zoneColor: "#d9cfc0",
      previewImages: [],
      timelineLink: null,
      labelHidden: true,
    },

    /* Beans — large bed with 3 sub-rows (each links to beans timeline) */
    {
      id: "beans-group",
      name: "Beans",
      col: 1,
      row: 5,
      colSpan: 11,
      rowSpan: 6,
      zoneColor: "#a8bea0",
      timelineLink: null,
      children: [
        {
          id: "beans-north",
          name: "North row",
          col: 1,
          row: 1,
          colSpan: 11,
          rowSpan: 2,
          zoneColor: "#9cb490",
          previewImages: [
            "https://images.unsplash.com/photo-1594282296814-a58ac5e2f3e0?w=400&q=80",
            "https://images.unsplash.com/photo-1568584711075-8fd88feca9e0?w=400&q=80",
          ],
          timelineLink: "beans.html",
        },
        {
          id: "beans-middle",
          name: "Middle row",
          col: 1,
          row: 3,
          colSpan: 11,
          rowSpan: 2,
          zoneColor: "#8faa84",
          previewImages: [
            "https://images.unsplash.com/photo-1603048293859-65b47a506b1f?w=400&q=80",
            "https://images.unsplash.com/photo-1568584711075-8fd88feca9e0?w=400&q=80",
          ],
          timelineLink: "beans.html",
        },
        {
          id: "beans-south",
          name: "South row",
          col: 1,
          row: 5,
          colSpan: 11,
          rowSpan: 2,
          zoneColor: "#86a47a",
          previewImages: [
            "https://images.unsplash.com/photo-1594282296814-a58ac5e2f3e0?w=400&q=80",
            "https://images.unsplash.com/photo-1603048293859-65b47a506b1f?w=400&q=80",
          ],
          timelineLink: "beans.html",
        },
      ],
    },

    {
      id: "tomatoes",
      name: "Tomatoes",
      col: 13,
      row: 5,
      colSpan: 6,
      rowSpan: 6,
      zoneColor: "#d4c4a8",
      previewImages: [
        "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&q=80",
        "https://images.unsplash.com/photo-1592419044706-39781d0f7e44?w=400&q=80",
        "https://images.unsplash.com/photo-1464226189744-7e2a0f7f2b0b?w=400&q=80",
      ],
      timelineLink: "tomatoes.html",
    },
    {
      id: "bitter-melon",
      name: "Bitter Melon",
      col: 20,
      row: 5,
      colSpan: 5,
      rowSpan: 6,
      zoneColor: "#b8c89e",
      previewImages: [
        "https://images.unsplash.com/photo-1592419044706-39781d0f7e44?w=400&q=80",
        "https://images.unsplash.com/photo-1464226189744-7e2a0f7f2b0b?w=400&q=80",
      ],
      timelineLink: "bitter-melon.html",
    },

    {
      id: "carrots",
      name: "Carrots",
      col: 1,
      row: 11,
      colSpan: 8,
      rowSpan: 4,
      zoneColor: "#e8d9b0",
      previewImages: [
        "https://images.unsplash.com/photo-1598177795888-335b8d9f8c0e?w=400&q=80",
        "https://images.unsplash.com/photo-1445286178818-028177d12ed0?w=400&q=80",
      ],
      timelineLink: "carrots.html",
    },
    {
      id: "beets",
      name: "Beets",
      col: 10,
      row: 11,
      colSpan: 5,
      rowSpan: 4,
      zoneColor: "#d4b0b8",
      previewImages: [
        "https://images.unsplash.com/photo-1520047931473-4da3ffac1f43?w=400&q=80",
        "https://images.unsplash.com/photo-1598177795888-335b8d9f8c0e?w=400&q=80",
      ],
      timelineLink: "beets.html",
    },
    {
      id: "squash",
      name: "Squash",
      nameSecondary: "Zucchini",
      col: 16,
      row: 11,
      colSpan: 9,
      rowSpan: 4,
      zoneColor: "#c8d4a8",
      previewImages: [
        "https://images.unsplash.com/photo-1568584711075-8fd88feca9e0?w=400&q=80",
        "https://images.unsplash.com/photo-1592419044706-39781d0f7e44?w=400&q=80",
      ],
      timelineLink: "squash.html",
    },

    {
      id: "empty",
      name: "Empty bed",
      nameSecondary: "Future crop",
      col: 1,
      row: 15,
      colSpan: 24,
      rowSpan: 2,
      zoneColor: "#e5e0d4",
      previewImages: [
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80",
      ],
      timelineLink: null,
    },
  ],

  timelines: {
    "bok-choy": {
      name: "Bok Choy",
      nameSecondary: "菜心",
      bed: "Northwest bed",
      description: "Pac choi for stir-fries. Shaded edge of the bed.",
      entries: [
        { dayNumber: 30, date: "May 5, 2026", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80", alt: "Bok choy mid growth", note: "Consistent moisture; no bolting." },
        { dayNumber: 15, date: "April 20, 2026", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80", alt: "Young bok choy seedlings", note: "Transplanted after hardening off." },
      ],
    },
    cilantro: {
      name: "Cilantro",
      bed: "North bed",
      description: "Succession-sown for steady harvest.",
      entries: [
        { dayNumber: 40, date: "May 18, 2026", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80", alt: "Lush cilantro patch", note: "Second sowing catching up." },
        { dayNumber: 25, date: "May 3, 2026", image: "https://images.unsplash.com/photo-1466692476867-aef1dfb1e735?w=800&q=80", alt: "Cilantro feathery leaves", note: "First cutting for salsa." },
        { dayNumber: 10, date: "April 18, 2026", image: "https://images.unsplash.com/photo-1466692476867-aef1dfb1e735?w=800&q=80", alt: "Cilantro seedlings", note: "Direct-sown in cool week." },
      ],
    },
    beans: {
      name: "Beans",
      bed: "West trellis (3 rows)",
      description: "Pole beans on the trellis — north, middle, and south rows.",
      entries: [
        { dayNumber: 50, date: "May 22, 2026", image: "https://images.unsplash.com/photo-1594282296814-a58ac5e2f3e0?w=800&q=80", alt: "Bean vines climbing", note: "Flowers appearing on upper nodes." },
        { dayNumber: 35, date: "May 7, 2026", image: "https://images.unsplash.com/photo-1568584711075-8fd88feca9e0?w=800&q=80", alt: "Bean leaves in sun", note: "Trellis tied; good vigor." },
        { dayNumber: 20, date: "April 22, 2026", image: "https://images.unsplash.com/photo-1603048293859-65b47a506b1f?w=800&q=80", alt: "Young bean plants", note: "Germination even after rain." },
      ],
    },
    "bitter-melon": {
      name: "Bitter Melon",
      bed: "East corner",
      description: "Warm corner; slow start then climbs fast.",
      entries: [
        { dayNumber: 55, date: "May 24, 2026", image: "https://images.unsplash.com/photo-1592419044706-39781d0f7e44?w=800&q=80", alt: "Vining bitter melon", note: "First tendrils grabbing trellis." },
        { dayNumber: 40, date: "May 9, 2026", image: "https://images.unsplash.com/photo-1464226189744-7e2a0f7f2b0b?w=800&q=80", alt: "Bitter melon leaves", note: "True leaves expanded." },
      ],
    },
    tomatoes: {
      name: "Tomatoes",
      bed: "Center bed",
      description: "Cherry and paste varieties, staked.",
      entries: [
      ],
    },
    chives: {
      name: "Chives",
      bed: "North edge",
      description: "Perennial edge; cut frequently.",
      entries: [
        { dayNumber: 90, date: "May 15, 2026", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80", alt: "Chive clump in bloom", note: "Purple flowers — left a few for bees." },
        { dayNumber: 75, date: "April 30, 2026", image: "https://images.unsplash.com/photo-1466692476867-aef1dfb1e735?w=800&q=80", alt: "Fresh chive harvest", note: "Regrowth after last cut." },
      ],
    },
    beets: {
      name: "Beets",
      bed: "South center",
      description: "Detroit dark red; loose soil.",
      entries: [
        { dayNumber: 50, date: "May 19, 2026", image: "https://images.unsplash.com/photo-1520047931473-4da3ffac1f43?w=800&q=80", alt: "Beet tops full", note: "Shoulders showing." },
        { dayNumber: 35, date: "May 4, 2026", image: "https://images.unsplash.com/photo-1598177795888-335b8d9f8c0e?w=800&q=80", alt: "Beet seedlings", note: "Even stand after rain." },
      ],
    },
    carrots: {
      name: "Carrots",
      bed: "Southwest long row",
      description: "Nantes; deep bed, light water.",
      entries: [
        { dayNumber: 55, date: "May 21, 2026", image: "https://images.unsplash.com/photo-1598177795888-335b8d9f8c0e?w=800&q=80", alt: "Carrot tops tall", note: "Test pull soon." },
        { dayNumber: 40, date: "May 6, 2026", image: "https://images.unsplash.com/photo-1445286178818-028177d12ed0?w=800&q=80", alt: "Carrot row green", note: "Thinning finished." },
      ],
    },
    squash: {
      name: "Squash",
      nameSecondary: "Zucchini",
      bed: "Southeast bed",
      description: "Zucchini and summer squash.",
      entries: [
        { dayNumber: 48, date: "May 23, 2026", image: "https://images.unsplash.com/photo-1568584711075-8fd88feca9e0?w=800&q=80", alt: "Squash spreading", note: "First female flowers opening." },
        { dayNumber: 33, date: "May 8, 2026", image: "https://images.unsplash.com/photo-1592419044706-39781d0f7e44?w=800&q=80", alt: "Squash leaves", note: "Hand-pollinated one fruit." },
      ],
    },
  },
};
