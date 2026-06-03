/**
 * =============================================================================
 *  OAK CREEK DRY FARMING GREENS - GARDEN MAP DATA
 * =============================================================================
 *
 *  Bed names, hover photos, and standardized timelines are generated from
 *  numbered folders in 2026_Oak_Creek Greens_Polts.
 *  To change row counts or layout, edit css/garden-map.css and the beds below.
 *
 * =============================================================================
 */

const gardenData = {
  "mapTitle": "Interactive Garden Map",
  "mapSubtitle": "Hover over each bed to preview growth photos. Click any section to open its crop timeline.",
  "mapTip": "Move your mouse over any bed — photos follow near your cursor.",
  "timelineStartNote": {
    "bedStart": 1,
    "bedEnd": 49,
    "date": "May 1st",
    "label": "Transplanting",
    "text": "Transplanting on May 1st"
  },
  "filterButtons": [
    "Okra",
    "Lettuce",
    "Chives",
    "Cilantro",
    "Bok Choy",
    "North Row",
    "Middle Row",
    "South Row",
    "Tomatoes",
    "Bitter Melon",
    "Carrots",
    "Beets",
    "Squash / Zucchini",
    "Future Crop",
    "Empty Bed"
  ],
  "beds": [
    {
      "id": "bed-1",
      "crop": "Vltroacross_Okra2(DS)",
      "bed": "Bed 1",
      "mapRow": 1,
      "colSpan": 1,
      "link": "okra.html?bed=1",
      "filter": "Okra",
      "color": "#c8d4a8",
      "images": [
        "2026_Oak_Creek Greens_Polts/1. Vltroacross_Okra2(DS)/1. Vltroacross_Okra2(DS).jpg"
      ]
    },
    {
      "id": "bed-2",
      "crop": "Okra_Yalova_Akkoy(DS)",
      "bed": "Bed 2",
      "mapRow": 1,
      "colSpan": 1,
      "link": "okra-bed-2.html?bed=2",
      "filter": "Okra",
      "color": "#bec99e",
      "images": [
        "2026_Oak_Creek Greens_Polts/2.Okra_Yalova_Akkoy(DS)/2.Okra_Yalova_Akkoy(DS).jpg"
      ]
    },
    {
      "id": "bed-3",
      "crop": "Okra_Ciek(DS)",
      "bed": "Bed 3",
      "mapRow": 1,
      "colSpan": 1,
      "link": "okra-bed-3.html?bed=3",
      "filter": "Okra",
      "color": "#b4bf94",
      "images": [
        "2026_Oak_Creek Greens_Polts/3.Okra_Ciek(DS)/3.Okra_Ciek(DS).jpg"
      ]
    },
    {
      "id": "bed-4",
      "crop": "Okra_BURNOVA_KINALI(DS)",
      "bed": "Bed 4",
      "mapRow": 1,
      "colSpan": 1,
      "link": "okra-bed-4.html?bed=4",
      "filter": "Okra",
      "color": "#aab58a",
      "images": [
        "2026_Oak_Creek Greens_Polts/4.Okra_BURNOVA_KINALI(DS)/4.Okra_BURNOVA_KINALI(DS).png"
      ]
    },
    {
      "id": "bed-5",
      "crop": "Okra_Bagramic_White(DS)",
      "bed": "Bed 5",
      "mapRow": 1,
      "colSpan": 1,
      "link": "okra-bed-5.html?bed=5",
      "filter": "Okra",
      "color": "#a0ab80",
      "images": [
        "2026_Oak_Creek Greens_Polts/5.Okra_Bagramic_White(DS)/5.Okra_Bagramic_White(DS).png"
      ]
    },
    {
      "id": "bed-6",
      "crop": "Green_Towels(DS)",
      "bed": "Bed 6",
      "mapRow": 2,
      "colSpan": 3,
      "link": "green-towels.html?bed=6",
      "filter": "Lettuce",
      "color": "#d4e8c8",
      "images": [
        "2026_Oak_Creek Greens_Polts/6.Green_Towels(DS)/6.Green_Towels(DS).jpg"
      ]
    },
    {
      "id": "bed-7",
      "crop": "Red_Salad_Bowl(DS)",
      "bed": "Bed 7",
      "mapRow": 2,
      "colSpan": 3,
      "link": "red-salad-bowl.html?bed=7",
      "filter": "Lettuce",
      "color": "#c8e0bc",
      "images": [
        "2026_Oak_Creek Greens_Polts/7.Red_Salad_Bowl(DS)/7.Red_Salad_Bowl(DS).jpg"
      ]
    },
    {
      "id": "bed-8",
      "crop": "Black_Seed_Simpsom(DS)",
      "bed": "Bed 8",
      "mapRow": 2,
      "colSpan": 3,
      "link": "black-seed-simpsom.html?bed=8",
      "filter": "Lettuce",
      "color": "#bce0b0",
      "images": [
        "2026_Oak_Creek Greens_Polts/8.Black_Seed_Simpsom(DS)/8.Black_Seed_Simpsom(DS).png"
      ]
    },
    {
      "id": "bed-9",
      "crop": "Celosia_Lagos_Spinach1",
      "bed": "Bed 9",
      "mapRow": 2,
      "colSpan": 1,
      "link": "chives.html?bed=9",
      "filter": "Chives",
      "color": "#b8d4a4",
      "images": [
        "2026_Oak_Creek Greens_Polts/9.Celosia_Lagos_Spinach1/9.Celosia_Lagos_Spinach1.jpg"
      ]
    },
    {
      "id": "bed-10",
      "crop": "N.2. Spinach1",
      "bed": "Bed 10",
      "mapRow": 2,
      "colSpan": 1,
      "link": "cilantro.html?bed=10",
      "filter": "Cilantro",
      "color": "#aec99a",
      "images": [
        "2026_Oak_Creek Greens_Polts/10.N.2.Spinach1/10.N.2. Spinach1.jpg"
      ]
    },
    {
      "id": "bed-11",
      "crop": "Red_Perilla2",
      "bed": "Bed 11",
      "mapRow": 2,
      "colSpan": 1,
      "link": "bok-choy.html?bed=11",
      "filter": "Bok Choy",
      "color": "#a8c494",
      "images": [
        "2026_Oak_Creek Greens_Polts/11.Red_Perilla2/11.Red_Perilla2.jpg"
      ]
    },
    {
      "id": "bed-12",
      "crop": "Golden_Purslane2",
      "bed": "Bed 12",
      "mapRow": 2,
      "colSpan": 1,
      "link": "future-crop.html?bed=12",
      "filter": "Future Crop",
      "color": "#e8e4d8",
      "images": [
        "2026_Oak_Creek Greens_Polts/12.Golden_Purslane2/12.Golden_Purslane2.jpg"
      ]
    },
    {
      "id": "bed-13",
      "crop": "Celosia_Lagos_Spinach2",
      "bed": "Bed 13",
      "mapRow": 3,
      "colSpan": 1,
      "link": "north-row.html?bed=13",
      "filter": "North Row",
      "color": "#9cb490",
      "images": [
        "2026_Oak_Creek Greens_Polts/13.Celosia_Lagos_Spinach2/13.Celosia_Lagos_Spinach2.jpg"
      ]
    },
    {
      "id": "bed-14",
      "crop": "Molokhia1",
      "bed": "Bed 14",
      "mapRow": 3,
      "colSpan": 1,
      "link": "north-row.html?bed=14",
      "filter": "North Row",
      "color": "#94ac88",
      "images": [
        "2026_Oak_Creek Greens_Polts/14.Molokhia1/14.Molokhia1.jpg"
      ]
    },
    {
      "id": "bed-15",
      "crop": "Amaranth_Miriah_Leaf2",
      "bed": "Bed 15",
      "mapRow": 3,
      "colSpan": 1,
      "link": "north-row.html?bed=15",
      "filter": "North Row",
      "color": "#8ca480",
      "images": [
        "2026_Oak_Creek Greens_Polts/15.Amaranth_Miriah_Leaf2/15.Amaranth_Miriah_Leaf2.jpg"
      ]
    },
    {
      "id": "bed-16",
      "crop": "Red_Perilla1",
      "bed": "Bed 16",
      "mapRow": 3,
      "colSpan": 1,
      "link": "middle-row.html?bed=16",
      "filter": "Middle Row",
      "color": "#86a47a",
      "images": [
        "2026_Oak_Creek Greens_Polts/16.Red_Perilla1/16.Red_Perilla1.jpg"
      ]
    },
    {
      "id": "bed-17",
      "crop": "Golden_Purslane1",
      "bed": "Bed 17",
      "mapRow": 3,
      "colSpan": 1,
      "link": "middle-row.html?bed=17",
      "filter": "Middle Row",
      "color": "#7e9c74",
      "images": [
        "2026_Oak_Creek Greens_Polts/17.Golden_Purslane1/17.Golden_Purslane1.png"
      ]
    },
    {
      "id": "bed-18",
      "crop": "N.2.Spinach2",
      "bed": "Bed 18",
      "mapRow": 3,
      "colSpan": 1,
      "link": "middle-row.html?bed=18",
      "filter": "Middle Row",
      "color": "#76946e",
      "images": [
        "2026_Oak_Creek Greens_Polts/18.N.2.Spinach2/18.N.2.Spinach2.jpg"
      ]
    },
    {
      "id": "bed-19",
      "crop": "Amaranth_Miriah_Leaf1",
      "bed": "Bed 19",
      "mapRow": 3,
      "colSpan": 1,
      "link": "south-row.html?bed=19",
      "filter": "South Row",
      "color": "#6e8c68",
      "images": [
        "2026_Oak_Creek Greens_Polts/19.Amaranth_Miriah_Leaf1/19.Amaranth_Miriah_Leaf1.jpg"
      ]
    },
    {
      "id": "bed-20",
      "crop": "Molokhia2",
      "bed": "Bed 20",
      "mapRow": 3,
      "colSpan": 1,
      "link": "tomatoes.html?bed=20",
      "filter": "Tomatoes",
      "color": "#e0d4b8",
      "images": [
        "2026_Oak_Creek Greens_Polts/20.Molokhia2/20.Molokhia2.png"
      ]
    },
    {
      "id": "bed-21",
      "crop": "French_Sorrel2",
      "bed": "Bed 21",
      "mapRow": 3,
      "colSpan": 1,
      "link": "bitter-melon.html?bed=21",
      "filter": "Bitter Melon",
      "color": "#b8c89e",
      "images": [
        "2026_Oak_Creek Greens_Polts/21.French_Sorrel2/21.French_Sorrel2.jpg"
      ]
    },
    {
      "id": "bed-22",
      "crop": "Lettuce_Muir1",
      "bed": "Bed 22",
      "mapRow": 3,
      "colSpan": 1,
      "link": "carrots.html?bed=22",
      "filter": "Carrots",
      "color": "#f0e0b8",
      "images": [
        "2026_Oak_Creek Greens_Polts/22.Lettuce_Muir1/22.Lettuce_Muir1.jpg"
      ]
    },
    {
      "id": "bed-23",
      "crop": "Lettuce_Blade_Seeded_Simpson2",
      "bed": "Bed 23",
      "mapRow": 3,
      "colSpan": 1,
      "link": "beets.html?bed=23",
      "filter": "Beets",
      "color": "#dcc0c4",
      "images": [
        "2026_Oak_Creek Greens_Polts/23.Lettuce_Blade_Seeded_Simpson2/23.Lettuce_Blade_Seeded_Simpson2.jpg"
      ]
    },
    {
      "id": "bed-24",
      "crop": "Lettuce_Red_Salad_Bowl1",
      "bed": "Bed 24",
      "mapRow": 3,
      "colSpan": 1,
      "link": "squash.html?bed=24",
      "filter": "Squash / Zucchini",
      "color": "#d0dcb0",
      "images": [
        "2026_Oak_Creek Greens_Polts/24.Lettuce_Red_Salad_Bowl1/24.Lettuce_Red_Salad_Bowl1.jpg"
      ]
    },
    {
      "id": "bed-25",
      "crop": "Lettuce_Red_Salad_Bowl2",
      "bed": "Bed 25",
      "mapRow": 4,
      "colSpan": 1,
      "link": "future-crop.html?bed=25",
      "filter": "Future Crop",
      "color": "#e8e4d8",
      "images": [
        "2026_Oak_Creek Greens_Polts/25.Lettuce_Red_Salad_Bowl2/25.Lettuce_Red_Salad_Bowl2.jpg"
      ]
    },
    {
      "id": "bed-26",
      "crop": "Salad_Greens_LettuceMix2",
      "bed": "Bed 26",
      "mapRow": 4,
      "colSpan": 1,
      "link": "future-crop.html?bed=26",
      "filter": "Future Crop",
      "color": "#e0dcd0",
      "images": [
        "2026_Oak_Creek Greens_Polts/26.Salad_Greens_LettuceMix2/26.Salad_Greens_LettuceMix2.jpg"
      ]
    },
    {
      "id": "bed-27",
      "crop": "Orach_Red_Flash2",
      "bed": "Bed 27",
      "mapRow": 4,
      "colSpan": 1,
      "link": "future-crop.html?bed=27",
      "filter": "Future Crop",
      "color": "#d8d4c8",
      "images": [
        "2026_Oak_Creek Greens_Polts/27.Orach_Red_Flash2/27.Orach_Red_Flash2.jpg"
      ]
    },
    {
      "id": "bed-28",
      "crop": "Lettuce_Green_Towers1",
      "bed": "Bed 28",
      "mapRow": 4,
      "colSpan": 1,
      "link": "future-crop.html?bed=28",
      "filter": "Future Crop",
      "color": "#ddd8cc",
      "images": [
        "2026_Oak_Creek Greens_Polts/28.Lettuce_Green_Towers1/28.Lettuce_Green_Towers1.jpg"
      ]
    },
    {
      "id": "bed-29",
      "crop": "Lettuce_Blade_Seeded_Simpson1",
      "bed": "Bed 29",
      "mapRow": 4,
      "colSpan": 1,
      "link": "future-crop.html?bed=29",
      "filter": "Empty Bed",
      "color": "#d4d0c4",
      "images": [
        "2026_Oak_Creek Greens_Polts/29.Lettuce_Blade_Seeded_Simpson1/29.Lettuce_Blade_Seeded_Simpson1.jpg"
      ]
    },
    {
      "id": "bed-30",
      "crop": "Spinach_American2",
      "bed": "Bed 30",
      "mapRow": 4,
      "colSpan": 1,
      "link": "future-crop.html?bed=30",
      "filter": "Future Crop",
      "color": "#ccc8bc",
      "images": [
        "2026_Oak_Creek Greens_Polts/30.Spinach_American2/Spinach American 2.jpg"
      ]
    },
    {
      "id": "bed-31",
      "crop": "Spinach  Bloomsdale Longstanding2",
      "bed": "Bed 31",
      "mapRow": 4,
      "colSpan": 1,
      "link": "future-crop.html?bed=31",
      "filter": "Empty Bed",
      "color": "#c4c0b4",
      "images": [
        "2026_Oak_Creek Greens_Polts/31.Spinach_Bloomsdale_Longstanding2/30.Spinach  Bloomsdale Longstanding2.png"
      ]
    },
    {
      "id": "bed-32",
      "crop": "Lambsquarter_Magenta_Spreen2",
      "bed": "Bed 32",
      "mapRow": 4,
      "colSpan": 1,
      "link": "future-crop.html?bed=32",
      "filter": "Future Crop",
      "color": "#bcb8ac",
      "images": [
        "2026_Oak_Creek Greens_Polts/32.Lambsquarter_Magenta_Spreen2/31.Lambsquarter_Magenta_Spreen2.jpg"
      ]
    },
    {
      "id": "bed-33",
      "crop": "Lettuce_Syphos2",
      "bed": "Bed 33",
      "mapRow": 4,
      "colSpan": 1,
      "link": "future-crop.html?bed=33",
      "filter": "Empty Bed",
      "color": "#b4b0a4",
      "images": [
        "2026_Oak_Creek Greens_Polts/33.Lettuce_Syphos2/32.Lettuce_Syphos2.jpg"
      ]
    },
    {
      "id": "bed-34",
      "crop": "Lettuce_Green_Towers2",
      "bed": "Bed 34",
      "mapRow": 4,
      "colSpan": 1,
      "link": "future-crop.html?bed=34",
      "filter": "Future Crop",
      "color": "#aca89c",
      "images": [
        "2026_Oak_Creek Greens_Polts/34.Lettuce_Green_Towers2/33.Lettuce_Green_Towers2.jpg"
      ]
    },
    {
      "id": "bed-35",
      "crop": "Lettuce_Muir2",
      "bed": "Bed 35",
      "mapRow": 4,
      "colSpan": 1,
      "link": "future-crop.html?bed=35",
      "filter": "Empty Bed",
      "color": "#a4a094",
      "images": [
        "2026_Oak_Creek Greens_Polts/35.Lettuce_Muir2/34.Lettuce_Muir2.jpg"
      ]
    },
    {
      "id": "bed-36",
      "crop": "Lambsquarter_Magenta_Spreen1",
      "bed": "Bed 36",
      "mapRow": 4,
      "colSpan": 1,
      "link": "future-crop.html?bed=36",
      "filter": "Future Crop",
      "color": "#9c988c",
      "images": [
        "2026_Oak_Creek Greens_Polts/36.Lambsquarter_Magenta_Spreen1/35.Lambsquarter_Magenta_Spreen1.jpg"
      ]
    },
    {
      "id": "bed-37",
      "crop": "Lettuce_Syphos1",
      "bed": "Bed 37",
      "mapRow": 4,
      "colSpan": 1,
      "link": "future-crop.html?bed=37",
      "filter": "Empty Bed",
      "color": "#ddd8cc",
      "images": [
        "2026_Oak_Creek Greens_Polts/37.Lettuce_Syphos1/36.Lettuce_Syphos1.jpg"
      ]
    },
    {
      "id": "bed-38",
      "crop": "Spinach_America1",
      "bed": "Bed 38",
      "mapRow": 4,
      "colSpan": 1,
      "link": "future-crop.html?bed=38",
      "filter": "Future Crop",
      "color": "#d4d0c4",
      "images": [
        "2026_Oak_Creek Greens_Polts/38.Spinach_America1/37.Spinach_America1.png"
      ]
    },
    {
      "id": "bed-39",
      "crop": "Spinach_Bloomsdale_Longstanding1",
      "bed": "Bed 39",
      "mapRow": 5,
      "colSpan": 1,
      "link": "future-crop.html?bed=39",
      "filter": "Future Crop",
      "color": "#e8e4d8",
      "images": [
        "2026_Oak_Creek Greens_Polts/39.Spinach_Bloomsdale_Longstanding1/38.Spinach_Bloomsdale_Longstanding1.png"
      ]
    },
    {
      "id": "bed-40",
      "crop": "French_Sorrel1",
      "bed": "Bed 40",
      "mapRow": 5,
      "colSpan": 1,
      "link": "future-crop.html?bed=40",
      "filter": "Empty Bed",
      "color": "#e0dcd0",
      "images": [
        "2026_Oak_Creek Greens_Polts/40.French_Sorrel1/39.French_Sorrel1.png"
      ]
    },
    {
      "id": "bed-41",
      "crop": "Salad_Green_LettuceMix1",
      "bed": "Bed 41",
      "mapRow": 5,
      "colSpan": 1,
      "link": "future-crop.html?bed=41",
      "filter": "Future Crop",
      "color": "#d8d4c8",
      "images": [
        "2026_Oak_Creek Greens_Polts/41.Salad_Green_LettuceMix1/40.Salad_Green_LettuceMix1.jpg"
      ]
    },
    {
      "id": "bed-42",
      "crop": "Orach_Red_Flash1",
      "bed": "Bed 42",
      "mapRow": 5,
      "colSpan": 1,
      "link": "future-crop.html?bed=42",
      "filter": "Empty Bed",
      "color": "#ddd8cc",
      "images": [
        "2026_Oak_Creek Greens_Polts/42.Orach_Red_Flash1/41.Orach_Red_Flash1.jpg"
      ]
    },
    {
      "id": "bed-43",
      "crop": "Cabbage_Primax2",
      "bed": "Bed 43",
      "mapRow": 5,
      "colSpan": 1,
      "link": "future-crop.html?bed=43",
      "filter": "Future Crop",
      "color": "#d4d0c4",
      "images": [
        "2026_Oak_Creek Greens_Polts/43.Cabbage_Primax2/42.Cabbage_Primax2.jpg"
      ]
    },
    {
      "id": "bed-44",
      "crop": "Cabbage_Amarant2",
      "bed": "Bed 44",
      "mapRow": 5,
      "colSpan": 1,
      "link": "future-crop.html?bed=44",
      "filter": "Empty Bed",
      "color": "#ccc8bc",
      "images": [
        "2026_Oak_Creek Greens_Polts/44.Cabbage_Amarant2/43.Cabbage_Amarant2.jpg"
      ]
    },
    {
      "id": "bed-45",
      "crop": "Cabbage_Charleston_Wakefield2",
      "bed": "Bed 45",
      "mapRow": 5,
      "colSpan": 1,
      "link": "future-crop.html?bed=45",
      "filter": "Future Crop",
      "color": "#c4c0b4",
      "images": [
        "2026_Oak_Creek Greens_Polts/45.Cabbage_Charleston_Wakefield2/44.Cabbage_Charleston_Wakefield2.jpg"
      ]
    },
    {
      "id": "bed-46",
      "crop": "Cabbage_Primax1",
      "bed": "Bed 46",
      "mapRow": 5,
      "colSpan": 1,
      "link": "future-crop.html?bed=46",
      "filter": "Empty Bed",
      "color": "#bcb8ac",
      "images": [
        "2026_Oak_Creek Greens_Polts/46.Cabbage_Primax1/45.Cabbage_Primax1.jpg"
      ]
    },
    {
      "id": "bed-47",
      "crop": "Cabbage_Charleston_Wakefield1",
      "bed": "Bed 47",
      "mapRow": 5,
      "colSpan": 1,
      "link": "future-crop.html?bed=47",
      "filter": "Future Crop",
      "color": "#b4b0a4",
      "images": [
        "2026_Oak_Creek Greens_Polts/47.Cabbage_Charleston_Wakefield1/46.Cabbage_Charleston_Wakefield1.jpg"
      ]
    },
    {
      "id": "bed-48",
      "crop": "Cabbage_Early_Round_Dutch1",
      "bed": "Bed 48",
      "mapRow": 5,
      "colSpan": 1,
      "link": "future-crop.html?bed=48",
      "filter": "Empty Bed",
      "color": "#aca89c",
      "images": [
        "2026_Oak_Creek Greens_Polts/48.Cabbage_Early_Round_Dutch1/47.Cabbage_Early_Round_Dutch1.png"
      ]
    },
    {
      "id": "bed-49",
      "crop": "Cabbage_Amarant1",
      "bed": "Bed 49",
      "mapRow": 5,
      "colSpan": 1,
      "link": "future-crop.html?bed=49",
      "filter": "Future Crop",
      "color": "#a4a094",
      "images": [
        "2026_Oak_Creek Greens_Polts/49.Cabbage_Amarant1/48.Cabbage_Amarant1.jpg"
      ]
    }
  ],
  "timelines": {
    "bed-1": {
      "name": "Vltroacross_Okra2(DS)",
      "bed": "Bed 1",
      "description": "Vltroacross_Okra2(DS) tracked in Bed 1.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/1. Vltroacross_Okra2(DS)/1. Vltroacross_Okra2(DS).jpg",
          "alt": "Vltroacross_Okra2(DS) in Bed 1",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "okra": {
      "name": "Vltroacross_Okra2(DS)",
      "bed": "Bed 1",
      "description": "Vltroacross_Okra2(DS) tracked in Bed 1.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/1. Vltroacross_Okra2(DS)/1. Vltroacross_Okra2(DS).jpg",
          "alt": "Vltroacross_Okra2(DS) in Bed 1",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-2": {
      "name": "Okra_Yalova_Akkoy(DS)",
      "bed": "Bed 2",
      "description": "Okra_Yalova_Akkoy(DS) tracked in Bed 2.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/2.Okra_Yalova_Akkoy(DS)/2.Okra_Yalova_Akkoy(DS).jpg",
          "alt": "Okra_Yalova_Akkoy(DS) in Bed 2",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "okra-bed-2": {
      "name": "Okra_Yalova_Akkoy(DS)",
      "bed": "Bed 2",
      "description": "Okra_Yalova_Akkoy(DS) tracked in Bed 2.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/2.Okra_Yalova_Akkoy(DS)/2.Okra_Yalova_Akkoy(DS).jpg",
          "alt": "Okra_Yalova_Akkoy(DS) in Bed 2",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-3": {
      "name": "Okra_Ciek(DS)",
      "bed": "Bed 3",
      "description": "Okra_Ciek(DS) tracked in Bed 3.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/3.Okra_Ciek(DS)/3.Okra_Ciek(DS).jpg",
          "alt": "Okra_Ciek(DS) in Bed 3",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "okra-bed-3": {
      "name": "Okra_Ciek(DS)",
      "bed": "Bed 3",
      "description": "Okra_Ciek(DS) tracked in Bed 3.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/3.Okra_Ciek(DS)/3.Okra_Ciek(DS).jpg",
          "alt": "Okra_Ciek(DS) in Bed 3",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-4": {
      "name": "Okra_BURNOVA_KINALI(DS)",
      "bed": "Bed 4",
      "description": "Okra_BURNOVA_KINALI(DS) tracked in Bed 4.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/4.Okra_BURNOVA_KINALI(DS)/4.Okra_BURNOVA_KINALI(DS).png",
          "alt": "Okra_BURNOVA_KINALI(DS) in Bed 4",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "okra-bed-4": {
      "name": "Okra_BURNOVA_KINALI(DS)",
      "bed": "Bed 4",
      "description": "Okra_BURNOVA_KINALI(DS) tracked in Bed 4.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/4.Okra_BURNOVA_KINALI(DS)/4.Okra_BURNOVA_KINALI(DS).png",
          "alt": "Okra_BURNOVA_KINALI(DS) in Bed 4",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-5": {
      "name": "Okra_Bagramic_White(DS)",
      "bed": "Bed 5",
      "description": "Okra_Bagramic_White(DS) tracked in Bed 5.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/5.Okra_Bagramic_White(DS)/5.Okra_Bagramic_White(DS).png",
          "alt": "Okra_Bagramic_White(DS) in Bed 5",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "okra-bed-5": {
      "name": "Okra_Bagramic_White(DS)",
      "bed": "Bed 5",
      "description": "Okra_Bagramic_White(DS) tracked in Bed 5.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/5.Okra_Bagramic_White(DS)/5.Okra_Bagramic_White(DS).png",
          "alt": "Okra_Bagramic_White(DS) in Bed 5",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-6": {
      "name": "Green_Towels(DS)",
      "bed": "Bed 6",
      "description": "Green_Towels(DS) tracked in Bed 6.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/6.Green_Towels(DS)/6.Green_Towels(DS).jpg",
          "alt": "Green_Towels(DS) in Bed 6",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "green-towels": {
      "name": "Green_Towels(DS)",
      "bed": "Bed 6",
      "description": "Green_Towels(DS) tracked in Bed 6.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/6.Green_Towels(DS)/6.Green_Towels(DS).jpg",
          "alt": "Green_Towels(DS) in Bed 6",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-7": {
      "name": "Red_Salad_Bowl(DS)",
      "bed": "Bed 7",
      "description": "Red_Salad_Bowl(DS) tracked in Bed 7.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/7.Red_Salad_Bowl(DS)/7.Red_Salad_Bowl(DS).jpg",
          "alt": "Red_Salad_Bowl(DS) in Bed 7",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "red-salad-bowl": {
      "name": "Red_Salad_Bowl(DS)",
      "bed": "Bed 7",
      "description": "Red_Salad_Bowl(DS) tracked in Bed 7.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/7.Red_Salad_Bowl(DS)/7.Red_Salad_Bowl(DS).jpg",
          "alt": "Red_Salad_Bowl(DS) in Bed 7",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-8": {
      "name": "Black_Seed_Simpsom(DS)",
      "bed": "Bed 8",
      "description": "Black_Seed_Simpsom(DS) tracked in Bed 8.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/8.Black_Seed_Simpsom(DS)/8.Black_Seed_Simpsom(DS).png",
          "alt": "Black_Seed_Simpsom(DS) in Bed 8",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "black-seed-simpsom": {
      "name": "Black_Seed_Simpsom(DS)",
      "bed": "Bed 8",
      "description": "Black_Seed_Simpsom(DS) tracked in Bed 8.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/8.Black_Seed_Simpsom(DS)/8.Black_Seed_Simpsom(DS).png",
          "alt": "Black_Seed_Simpsom(DS) in Bed 8",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-9": {
      "name": "Celosia_Lagos_Spinach1",
      "bed": "Bed 9",
      "description": "Celosia_Lagos_Spinach1 tracked in Bed 9.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/9.Celosia_Lagos_Spinach1/9.Celosia_Lagos_Spinach1.jpg",
          "alt": "Celosia_Lagos_Spinach1 in Bed 9",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "chives": {
      "name": "Celosia_Lagos_Spinach1",
      "bed": "Bed 9",
      "description": "Celosia_Lagos_Spinach1 tracked in Bed 9.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/9.Celosia_Lagos_Spinach1/9.Celosia_Lagos_Spinach1.jpg",
          "alt": "Celosia_Lagos_Spinach1 in Bed 9",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-10": {
      "name": "N.2. Spinach1",
      "bed": "Bed 10",
      "description": "N.2. Spinach1 tracked in Bed 10.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/10.N.2.Spinach1/10.N.2. Spinach1.jpg",
          "alt": "N.2. Spinach1 in Bed 10",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "cilantro": {
      "name": "N.2. Spinach1",
      "bed": "Bed 10",
      "description": "N.2. Spinach1 tracked in Bed 10.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/10.N.2.Spinach1/10.N.2. Spinach1.jpg",
          "alt": "N.2. Spinach1 in Bed 10",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-11": {
      "name": "Red_Perilla2",
      "bed": "Bed 11",
      "description": "Red_Perilla2 tracked in Bed 11.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/11.Red_Perilla2/11.Red_Perilla2.jpg",
          "alt": "Red_Perilla2 in Bed 11",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bok-choy": {
      "name": "Red_Perilla2",
      "bed": "Bed 11",
      "description": "Red_Perilla2 tracked in Bed 11.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/11.Red_Perilla2/11.Red_Perilla2.jpg",
          "alt": "Red_Perilla2 in Bed 11",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-12": {
      "name": "Golden_Purslane2",
      "bed": "Bed 12",
      "description": "Golden_Purslane2 tracked in Bed 12.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/12.Golden_Purslane2/12.Golden_Purslane2.jpg",
          "alt": "Golden_Purslane2 in Bed 12",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "future-crop": {
      "name": "Golden_Purslane2",
      "bed": "Bed 12",
      "description": "Golden_Purslane2 tracked in Bed 12.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/12.Golden_Purslane2/12.Golden_Purslane2.jpg",
          "alt": "Golden_Purslane2 in Bed 12",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-13": {
      "name": "Celosia_Lagos_Spinach2",
      "bed": "Bed 13",
      "description": "Celosia_Lagos_Spinach2 tracked in Bed 13.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/13.Celosia_Lagos_Spinach2/13.Celosia_Lagos_Spinach2.jpg",
          "alt": "Celosia_Lagos_Spinach2 in Bed 13",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "north-row": {
      "name": "Celosia_Lagos_Spinach2",
      "bed": "Bed 13",
      "description": "Celosia_Lagos_Spinach2 tracked in Bed 13.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/13.Celosia_Lagos_Spinach2/13.Celosia_Lagos_Spinach2.jpg",
          "alt": "Celosia_Lagos_Spinach2 in Bed 13",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-14": {
      "name": "Molokhia1",
      "bed": "Bed 14",
      "description": "Molokhia1 tracked in Bed 14.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/14.Molokhia1/14.Molokhia1.jpg",
          "alt": "Molokhia1 in Bed 14",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-15": {
      "name": "Amaranth_Miriah_Leaf2",
      "bed": "Bed 15",
      "description": "Amaranth_Miriah_Leaf2 tracked in Bed 15.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/15.Amaranth_Miriah_Leaf2/15.Amaranth_Miriah_Leaf2.jpg",
          "alt": "Amaranth_Miriah_Leaf2 in Bed 15",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-16": {
      "name": "Red_Perilla1",
      "bed": "Bed 16",
      "description": "Red_Perilla1 tracked in Bed 16.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/16.Red_Perilla1/16.Red_Perilla1.jpg",
          "alt": "Red_Perilla1 in Bed 16",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "middle-row": {
      "name": "Red_Perilla1",
      "bed": "Bed 16",
      "description": "Red_Perilla1 tracked in Bed 16.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/16.Red_Perilla1/16.Red_Perilla1.jpg",
          "alt": "Red_Perilla1 in Bed 16",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-17": {
      "name": "Golden_Purslane1",
      "bed": "Bed 17",
      "description": "Golden_Purslane1 tracked in Bed 17.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/17.Golden_Purslane1/17.Golden_Purslane1.png",
          "alt": "Golden_Purslane1 in Bed 17",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-18": {
      "name": "N.2.Spinach2",
      "bed": "Bed 18",
      "description": "N.2.Spinach2 tracked in Bed 18.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/18.N.2.Spinach2/18.N.2.Spinach2.jpg",
          "alt": "N.2.Spinach2 in Bed 18",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-19": {
      "name": "Amaranth_Miriah_Leaf1",
      "bed": "Bed 19",
      "description": "Amaranth_Miriah_Leaf1 tracked in Bed 19.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/19.Amaranth_Miriah_Leaf1/19.Amaranth_Miriah_Leaf1.jpg",
          "alt": "Amaranth_Miriah_Leaf1 in Bed 19",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "south-row": {
      "name": "Amaranth_Miriah_Leaf1",
      "bed": "Bed 19",
      "description": "Amaranth_Miriah_Leaf1 tracked in Bed 19.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/19.Amaranth_Miriah_Leaf1/19.Amaranth_Miriah_Leaf1.jpg",
          "alt": "Amaranth_Miriah_Leaf1 in Bed 19",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-20": {
      "name": "Molokhia2",
      "bed": "Bed 20",
      "description": "Molokhia2 tracked in Bed 20.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/20.Molokhia2/20.Molokhia2.png",
          "alt": "Molokhia2 in Bed 20",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "tomatoes": {
      "name": "Molokhia2",
      "bed": "Bed 20",
      "description": "Molokhia2 tracked in Bed 20.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/20.Molokhia2/20.Molokhia2.png",
          "alt": "Molokhia2 in Bed 20",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-21": {
      "name": "French_Sorrel2",
      "bed": "Bed 21",
      "description": "French_Sorrel2 tracked in Bed 21.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/21.French_Sorrel2/21.French_Sorrel2.jpg",
          "alt": "French_Sorrel2 in Bed 21",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bitter-melon": {
      "name": "French_Sorrel2",
      "bed": "Bed 21",
      "description": "French_Sorrel2 tracked in Bed 21.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/21.French_Sorrel2/21.French_Sorrel2.jpg",
          "alt": "French_Sorrel2 in Bed 21",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-22": {
      "name": "Lettuce_Muir1",
      "bed": "Bed 22",
      "description": "Lettuce_Muir1 tracked in Bed 22.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/22.Lettuce_Muir1/22.Lettuce_Muir1.jpg",
          "alt": "Lettuce_Muir1 in Bed 22",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "carrots": {
      "name": "Lettuce_Muir1",
      "bed": "Bed 22",
      "description": "Lettuce_Muir1 tracked in Bed 22.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/22.Lettuce_Muir1/22.Lettuce_Muir1.jpg",
          "alt": "Lettuce_Muir1 in Bed 22",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-23": {
      "name": "Lettuce_Blade_Seeded_Simpson2",
      "bed": "Bed 23",
      "description": "Lettuce_Blade_Seeded_Simpson2 tracked in Bed 23.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/23.Lettuce_Blade_Seeded_Simpson2/23.Lettuce_Blade_Seeded_Simpson2.jpg",
          "alt": "Lettuce_Blade_Seeded_Simpson2 in Bed 23",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "beets": {
      "name": "Lettuce_Blade_Seeded_Simpson2",
      "bed": "Bed 23",
      "description": "Lettuce_Blade_Seeded_Simpson2 tracked in Bed 23.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/23.Lettuce_Blade_Seeded_Simpson2/23.Lettuce_Blade_Seeded_Simpson2.jpg",
          "alt": "Lettuce_Blade_Seeded_Simpson2 in Bed 23",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-24": {
      "name": "Lettuce_Red_Salad_Bowl1",
      "bed": "Bed 24",
      "description": "Lettuce_Red_Salad_Bowl1 tracked in Bed 24.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/24.Lettuce_Red_Salad_Bowl1/24.Lettuce_Red_Salad_Bowl1.jpg",
          "alt": "Lettuce_Red_Salad_Bowl1 in Bed 24",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "squash": {
      "name": "Lettuce_Red_Salad_Bowl1",
      "bed": "Bed 24",
      "description": "Lettuce_Red_Salad_Bowl1 tracked in Bed 24.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/24.Lettuce_Red_Salad_Bowl1/24.Lettuce_Red_Salad_Bowl1.jpg",
          "alt": "Lettuce_Red_Salad_Bowl1 in Bed 24",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-25": {
      "name": "Lettuce_Red_Salad_Bowl2",
      "bed": "Bed 25",
      "description": "Lettuce_Red_Salad_Bowl2 tracked in Bed 25.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/25.Lettuce_Red_Salad_Bowl2/25.Lettuce_Red_Salad_Bowl2.jpg",
          "alt": "Lettuce_Red_Salad_Bowl2 in Bed 25",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-26": {
      "name": "Salad_Greens_LettuceMix2",
      "bed": "Bed 26",
      "description": "Salad_Greens_LettuceMix2 tracked in Bed 26.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/26.Salad_Greens_LettuceMix2/26.Salad_Greens_LettuceMix2.jpg",
          "alt": "Salad_Greens_LettuceMix2 in Bed 26",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-27": {
      "name": "Orach_Red_Flash2",
      "bed": "Bed 27",
      "description": "Orach_Red_Flash2 tracked in Bed 27.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/27.Orach_Red_Flash2/27.Orach_Red_Flash2.jpg",
          "alt": "Orach_Red_Flash2 in Bed 27",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-28": {
      "name": "Lettuce_Green_Towers1",
      "bed": "Bed 28",
      "description": "Lettuce_Green_Towers1 tracked in Bed 28.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/28.Lettuce_Green_Towers1/28.Lettuce_Green_Towers1.jpg",
          "alt": "Lettuce_Green_Towers1 in Bed 28",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-29": {
      "name": "Lettuce_Blade_Seeded_Simpson1",
      "bed": "Bed 29",
      "description": "Lettuce_Blade_Seeded_Simpson1 tracked in Bed 29.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/29.Lettuce_Blade_Seeded_Simpson1/29.Lettuce_Blade_Seeded_Simpson1.jpg",
          "alt": "Lettuce_Blade_Seeded_Simpson1 in Bed 29",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-30": {
      "name": "Spinach_American2",
      "bed": "Bed 30",
      "description": "Spinach_American2 tracked in Bed 30.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/30.Spinach_American2/Spinach American 2.jpg",
          "alt": "Spinach_American2 in Bed 30",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-31": {
      "name": "Spinach  Bloomsdale Longstanding2",
      "bed": "Bed 31",
      "description": "Spinach  Bloomsdale Longstanding2 tracked in Bed 31.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/31.Spinach_Bloomsdale_Longstanding2/30.Spinach  Bloomsdale Longstanding2.png",
          "alt": "Spinach  Bloomsdale Longstanding2 in Bed 31",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-32": {
      "name": "Lambsquarter_Magenta_Spreen2",
      "bed": "Bed 32",
      "description": "Lambsquarter_Magenta_Spreen2 tracked in Bed 32.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/32.Lambsquarter_Magenta_Spreen2/31.Lambsquarter_Magenta_Spreen2.jpg",
          "alt": "Lambsquarter_Magenta_Spreen2 in Bed 32",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-33": {
      "name": "Lettuce_Syphos2",
      "bed": "Bed 33",
      "description": "Lettuce_Syphos2 tracked in Bed 33.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/33.Lettuce_Syphos2/32.Lettuce_Syphos2.jpg",
          "alt": "Lettuce_Syphos2 in Bed 33",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-34": {
      "name": "Lettuce_Green_Towers2",
      "bed": "Bed 34",
      "description": "Lettuce_Green_Towers2 tracked in Bed 34.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/34.Lettuce_Green_Towers2/33.Lettuce_Green_Towers2.jpg",
          "alt": "Lettuce_Green_Towers2 in Bed 34",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-35": {
      "name": "Lettuce_Muir2",
      "bed": "Bed 35",
      "description": "Lettuce_Muir2 tracked in Bed 35.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/35.Lettuce_Muir2/34.Lettuce_Muir2.jpg",
          "alt": "Lettuce_Muir2 in Bed 35",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-36": {
      "name": "Lambsquarter_Magenta_Spreen1",
      "bed": "Bed 36",
      "description": "Lambsquarter_Magenta_Spreen1 tracked in Bed 36.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/36.Lambsquarter_Magenta_Spreen1/35.Lambsquarter_Magenta_Spreen1.jpg",
          "alt": "Lambsquarter_Magenta_Spreen1 in Bed 36",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-37": {
      "name": "Lettuce_Syphos1",
      "bed": "Bed 37",
      "description": "Lettuce_Syphos1 tracked in Bed 37.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/37.Lettuce_Syphos1/36.Lettuce_Syphos1.jpg",
          "alt": "Lettuce_Syphos1 in Bed 37",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-38": {
      "name": "Spinach_America1",
      "bed": "Bed 38",
      "description": "Spinach_America1 tracked in Bed 38.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/38.Spinach_America1/37.Spinach_America1.png",
          "alt": "Spinach_America1 in Bed 38",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-39": {
      "name": "Spinach_Bloomsdale_Longstanding1",
      "bed": "Bed 39",
      "description": "Spinach_Bloomsdale_Longstanding1 tracked in Bed 39.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/39.Spinach_Bloomsdale_Longstanding1/38.Spinach_Bloomsdale_Longstanding1.png",
          "alt": "Spinach_Bloomsdale_Longstanding1 in Bed 39",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-40": {
      "name": "French_Sorrel1",
      "bed": "Bed 40",
      "description": "French_Sorrel1 tracked in Bed 40.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/40.French_Sorrel1/39.French_Sorrel1.png",
          "alt": "French_Sorrel1 in Bed 40",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-41": {
      "name": "Salad_Green_LettuceMix1",
      "bed": "Bed 41",
      "description": "Salad_Green_LettuceMix1 tracked in Bed 41.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/41.Salad_Green_LettuceMix1/40.Salad_Green_LettuceMix1.jpg",
          "alt": "Salad_Green_LettuceMix1 in Bed 41",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-42": {
      "name": "Orach_Red_Flash1",
      "bed": "Bed 42",
      "description": "Orach_Red_Flash1 tracked in Bed 42.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/42.Orach_Red_Flash1/41.Orach_Red_Flash1.jpg",
          "alt": "Orach_Red_Flash1 in Bed 42",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-43": {
      "name": "Cabbage_Primax2",
      "bed": "Bed 43",
      "description": "Cabbage_Primax2 tracked in Bed 43.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/43.Cabbage_Primax2/42.Cabbage_Primax2.jpg",
          "alt": "Cabbage_Primax2 in Bed 43",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-44": {
      "name": "Cabbage_Amarant2",
      "bed": "Bed 44",
      "description": "Cabbage_Amarant2 tracked in Bed 44.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/44.Cabbage_Amarant2/43.Cabbage_Amarant2.jpg",
          "alt": "Cabbage_Amarant2 in Bed 44",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-45": {
      "name": "Cabbage_Charleston_Wakefield2",
      "bed": "Bed 45",
      "description": "Cabbage_Charleston_Wakefield2 tracked in Bed 45.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/45.Cabbage_Charleston_Wakefield2/44.Cabbage_Charleston_Wakefield2.jpg",
          "alt": "Cabbage_Charleston_Wakefield2 in Bed 45",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-46": {
      "name": "Cabbage_Primax1",
      "bed": "Bed 46",
      "description": "Cabbage_Primax1 tracked in Bed 46.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/46.Cabbage_Primax1/45.Cabbage_Primax1.jpg",
          "alt": "Cabbage_Primax1 in Bed 46",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-47": {
      "name": "Cabbage_Charleston_Wakefield1",
      "bed": "Bed 47",
      "description": "Cabbage_Charleston_Wakefield1 tracked in Bed 47.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/47.Cabbage_Charleston_Wakefield1/46.Cabbage_Charleston_Wakefield1.jpg",
          "alt": "Cabbage_Charleston_Wakefield1 in Bed 47",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-48": {
      "name": "Cabbage_Early_Round_Dutch1",
      "bed": "Bed 48",
      "description": "Cabbage_Early_Round_Dutch1 tracked in Bed 48.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/48.Cabbage_Early_Round_Dutch1/47.Cabbage_Early_Round_Dutch1.png",
          "alt": "Cabbage_Early_Round_Dutch1 in Bed 48",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    },
    "bed-49": {
      "name": "Cabbage_Amarant1",
      "bed": "Bed 49",
      "description": "Cabbage_Amarant1 tracked in Bed 49.",
      "entries": [
        {
          "dayNumber": 25,
          "date": "May 26th",
          "image": "2026_Oak_Creek Greens_Polts/49.Cabbage_Amarant1/48.Cabbage_Amarant1.jpg",
          "alt": "Cabbage_Amarant1 in Bed 49",
          "note": "Day 25 growth photo."
        },
        {
          "dayNumber": 0,
          "textOnly": true,
          "text": "Transplanting on May 1st"
        }
      ]
    }
  }
};
