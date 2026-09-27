const demoCatalog = [
  {
    title: "Flash Nebula",
    description: "A Flash animation and atmospheric motion piece.",
    folder: "demos/flash-nebula/",
    icon: "N",
    colors: ["#d4a76a", "#7d4f3d"],
  },
  {
    title: "Eyeball Interface",
    description: "A interactive Flash interface study.",
    folder: "demos/eyeball-interface/",
    icon: "E",
    colors: ["#d5b48a", "#4d4a59"],
  },
  {
    title: "Marvel Menswear",
    description: "An intro sequence for a fashion-led brand presentation.",
    folder: "demos/marvel-menswear/",
    icon: "M",
    colors: ["#e7d4a8", "#8c4d3f"],
  },
];

const grid = document.querySelector("#demo-grid");
const count = document.querySelector("#demo-count");

if (grid) {
  grid.innerHTML = demoCatalog
    .map(
      (demo) => `
        <article class="demo-card">
          <a class="demo-link" href="${demo.folder}">
            <div
              class="demo-thumb"
              style="--thumb-start: ${demo.colors[0]}; --thumb-end: ${demo.colors[1]};"
            >
              <span>${demo.icon}</span>
            </div>
            <div class="demo-card-body">
              <h3>${demo.title}</h3>
              <p>${demo.description}</p>
            </div>
          </a>
        </article>
      `,
    )
    .join("");

  count.textContent = `${demoCatalog.length} demo${demoCatalog.length === 1 ? "" : "s"}`;
}
