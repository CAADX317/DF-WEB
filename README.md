# Oak Creek Dry Farming Greens

A crop journal website with an interactive 5-row garden map and photo timelines.

## Open the site

Double-click `index.html`, or run:

```bash
python3 -m http.server 8000
```

Visit http://localhost:8000

## Garden map layout

| Row | Layout |
|-----|--------|
| 1 | 5 large **Okra** beds (Beds 1–5) |
| 2 | 13-column grid: 3 **Lettuce** beds (3 cols each) + 4 small beds |
| 3 | 12 small beds (North / Middle / South rows, Tomatoes, etc.) |
| 4 | 13 small beds (Future / Empty) |
| 5 | 10 small beds (Future / Empty) |

**Edit all beds in one file:** `js/garden-data.js`

| Change | Field |
|--------|--------|
| Crop name | `crop` |
| Bed label | `bed` |
| Row (1–5) | `mapRow` |
| Width in row | `colSpan` (Row 1: use 1 of 5; Row 2: max 13; Row 3–5: use 1) |
| Hover photos | `images` array |
| Timeline link | `link` (e.g. `"okra.html"`) |
| Section color | `color` |
| Filter button group | `filter` |

**Map colors:** `css/garden-map.css` → `:root`

## File structure

```
index.html              Homepage + garden map
okra.html, lettuce.html, …   Crop timeline pages
css/garden-map.css      Map layout & hover styles
js/garden-data.js       ← Edit beds & timelines here
js/garden-map.js        Map rendering (rarely edit)
js/garden-timeline.js   Timeline pages (rarely edit)
js/data.js              Optional journal crop cards section
```

## Add a timeline photo

In `js/garden-data.js`, find the crop under `timelines` and add to `entries`:

```javascript
{ dayNumber: 30, date: "June 1, 2026", image: "images/crops/okra/2026-06-01.jpg", alt: "Description", note: "Field notes." },
```
