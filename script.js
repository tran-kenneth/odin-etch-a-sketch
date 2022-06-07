function createGrid(length = 16) {
  const grid = document.querySelector(".grid-container");

  for (let i = 0; i < 256; i++) {
    let gridPixel = document.createElement("div");
    gridPixel.classList.add("grid-pixel");
    grid.appendChild(gridPixel);
  }
}

function mouseOnPixelEffect(e) {
  this.classList.add("dark-pixel");
}

function addMouseEventToGrid() {
  const gridPixels = document.querySelectorAll(".grid-pixel");

  gridPixels.forEach((gridPixel) => {
    gridPixel.addEventListener("mouseenter", mouseOnPixelEffect);
  });
}

function resetGrid() {
  const gridPixels = document.querySelectorAll(".grid-pixel");

  gridPixels.forEach((gridPixel) => {
    gridPixel.classList.remove("dark-pixel");
  });
}

function promptChangeGrid() {
  console.log("change");
}

function addResetButtonListener() {
  const resetButton = document.querySelector(".btn-reset");

  resetButton.addEventListener("click", resetGrid);
}

function addChangeGridButtonListener() {
  const changeGridButton = document.querySelector(".btn-change-grid");

  changeGridButton.addEventListener("click", console.log);
}

createGrid();
addMouseEventToGrid();
addResetButtonListener();
addChangeGridButtonListener();
