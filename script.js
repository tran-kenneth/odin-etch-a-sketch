function createGrid(length = 16) {
  const grid = document.querySelector(".grid-container");

  for (let i = 0; i < length ** 2; i++) {
    let gridPixel = document.createElement("div");
    gridPixel.classList.add("grid-pixel");
    grid.appendChild(gridPixel);
  }
}

function deleteGrid() {
  const grid = document.querySelector(".grid-container");

  while (grid.hasChildNodes()) {
    grid.removeChild(grid.firstChild);
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

function validGridLength(length) {
  return length >= 16 && length <= 100;
}

function promptChangeGrid() {
  let userEntry;

  while (!validGridLength(userEntry)) {
    userEntry = Number(prompt("Enter a number"));
  }

  return userEntry;
}

function changeGrid() {
  let newLength = promptChangeGrid();

  deleteGrid();
  createGrid(newLength);
  addMouseEventToGrid();
}

function addResetButtonListener() {
  const resetButton = document.querySelector(".btn-reset");

  resetButton.addEventListener("click", resetGrid);
}

function addChangeGridButtonListener() {
  const changeGridButton = document.querySelector(".btn-change-grid");

  changeGridButton.addEventListener("click", changeGrid);
}

addResetButtonListener();
addChangeGridButtonListener();
createGrid();
addMouseEventToGrid();
