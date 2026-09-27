# Flash Archive

A lightweight static website for collecting and showcasing older Flash work.

## Structure

- `index.html` — landing page with a grid of demo cards
- `assets/css/styles.css` — site styling
- `assets/js/main.js` — demo card data and rendering
- `demos/` — per-demo folders for each preserved Flash piece

## How to add a demo

1. Create a new folder inside `demos/`.
2. Add an `index.html` page using the same pattern as the sample demos.
3. Place the SWF file in the same folder as the HTML file, e.g. `demo.swf` or `nebula.swf`.
4. Update the demo data inside `assets/js/main.js` when you want it to appear on the home page.

## Preview locally

From the project root, run:

```bash
python -m http.server 8000
```

Then open: `http://localhost:8000`
