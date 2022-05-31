function createGrid(length = 16) {
  const grid = document.querySelector(".grid-container");

  for (let i = 0; i < 256; i++) {
    let gridPixel = document.createElement("div");
    gridPixel.classList.add("grid-pixel");
    grid.appendChild(gridPixel);
  }
}

function addMouseEventToGrid() {
  const gridPixels = document.querySelectorAll(".grid-pixel");
  console.log(gridPixels);
  gridPixels.forEach((gridPixel) => {
    gridPixel.addEventListener("mouseenter", console.log);
  });
}

createGrid();
addMouseEventToGrid();
