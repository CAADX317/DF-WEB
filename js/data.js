/**
 * =============================================================================
 *  OAK CREEK DRY FARMING GREENS — DATA FILE (edit here!)
 * =============================================================================
 *
 *  This is the main file to update when you add crops, photos, dates, or notes.
 *  You do NOT need to change HTML for each new photo — only this file.
 *
 *  HOW TO ADD A NEW CROP:
 *  1. Copy one of the crop objects below (from { id: ... } through its closing }).
 *  2. Change id (lowercase, no spaces — used in the URL crop.html?id=YOUR_ID).
 *  3. Change name, bed, description, cardImage, and timeline entries.
 *  4. Add a matching bed in gardenMap.beds if you want it on the map list.
 *
 *  HOW TO ADD A NEW PHOTO (every ~15 days):
 *  1. Save your image in the folder:  images/crops/your-crop-name/
 *  2. Add a new object inside that crop's "timeline" array (newest first or last —
 *     the site sorts by dayNumber automatically).
 *  3. Fill in: dayNumber, date, image, alt, note
 *
 *  dayNumber = days since planting (or since first photo — stay consistent).
 *  date      = display date, e.g. "May 12, 2026"
 *  image     = path to your file, e.g. "images/crops/kale/2026-05-12.jpg"
 *  alt       = short description for accessibility
 *  note      = your observation for that visit
 *
 * =============================================================================
 */

const farmData = {
  /**
   * GARDEN MAP — beds listed beside the map image on the homepage
   * label: text shown in the list
   * cropId: links to crop.html?id=... (use null if no crop page yet)
   */
  gardenMap: {
    image: "https://images.unsplash.com/photo-1592419044706-39781d0f7e44?w=900&q=80",
    // Optional: use your own file instead → "images/garden-map.jpg"
    beds: [
      { label: "Bed A — Lacinato kale", cropId: "kale" },
      { label: "Bed B — Rainbow chard", cropId: "chard" },
      { label: "Bed C — Salad mix", cropId: "salad-mix" },
      { label: "Bed D — Carrots (cover crop edge)", cropId: "carrots" },
      { label: "Bed E — Herbs & pollinators", cropId: null },
    ],
  },

  /**
   * CROPS — one object per crop you are tracking
   */
  crops: [
  {
    id: "kale",
    name: "Lacinato Kale",
    bed: "Bed A",
    description: "Dinosaur kale along the north fence. Dry-farmed after establishment.",
    cardImage: "https://images.unsplash.com/photo-1510626176961-4b37d6920f8e?w=600&q=80",
    // cardImage: "images/crops/kale/card.jpg",  ← use your own thumbnail

    timeline: [
      {
        dayNumber: 75,
        date: "May 10, 2026",
        image: "https://images.unsplash.com/photo-1510626176961-4b37d6920f8e?w=800&q=80",
        alt: "Mature kale leaves, deep green",
        note: "Plants waist-high. A few flea beetles on outer leaves; removed by hand.",
      },
      {
        dayNumber: 30,
        date: "March 26, 2026",
        image: "https://images.unsplash.com/photo-1464226189744-7e2a0f7f2b0b?w=800&q=80",
        alt: "Small kale plants in garden bed",
        note: "Transplants settled. Mulch pulled back for warmth.",
      },
    ],
  },

  {
    id: "chard",
    name: "Rainbow Chard",
    bed: "Bed B",
    description: "Bright stems for market bunches. Irrigated lightly at transplant only.",
    cardImage: "https://images.unsplash.com/photo-1628773822503-930a7eaae63a?w=600&q=80",

    timeline: [
      {
        dayNumber: 30,
        date: "April 8, 2026",
        image: "https://images.unsplash.com/photo-1464226189744-7e2a0f7f2b0b?w=800&q=80",
        alt: "Young chard plants",
        note: "Even germination. Slug patrol in the evenings.",
      },
    ],
  },

  {
    id: "salad-mix",
    name: "Salad Mix",
    bed: "Bed C",
    description: "Cut-and-come-again mix: lettuce, mizuna, and arugula.",
    cardImage: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=600&q=80",

    timeline: [
      {
        dayNumber: 40,
        date: "May 5, 2026",
        image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=800&q=80",
        alt: "Dense green salad mix bed",
        note: "Second cutting scheduled next week.",
      },
      {
        dayNumber: 25,
        date: "April 20, 2026",
        image: "https://images.unsplash.com/photo-1518843875449-f73882b6a0e0?w=800&q=80",
        alt: "Low salad mix before first cut",
        note: "First harvest — light cut, left 2\" regrowth.",
      },
      {
        dayNumber: 10,
        date: "April 5, 2026",
        image: "https://images.unsplash.com/photo-1466692476867-aef1dfb1e735?w=800&q=80",
        alt: "Tiny salad mix seedlings",
        note: "Direct-sown after soil warmed. Bird netting on.",
      },
    ],
  },

  {
    id: "carrots",
    name: "Nantes Carrots",
    bed: "Bed D",
    description: "Loose soil along the edge. Slower but sweet in dry conditions.",
    cardImage: "https://images.unsplash.com/photo-1598177795888-335b8d9f8c0e?w=600&q=80",

    timeline: [
      {
        dayNumber: 90,
        date: "May 12, 2026",
        image: "https://images.unsplash.com/photo-1598177795888-335b8d9f8c0e?w=800&q=80",
        alt: "Carrot tops lush and feathery",
        note: "Tops 12\" tall. Test pull next visit.",
      },
      {
        dayNumber: 75,
        date: "April 27, 2026",
        image: "https://images.unsplash.com/photo-1445286178818-028177d12ed0?w=800&q=80",
        alt: "Carrot foliage in rows",
        note: "Thinning done. Soil still moist one foot down.",
      },
    ],
  },
  ],
};
