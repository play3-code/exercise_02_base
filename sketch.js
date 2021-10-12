let geodata;

let bounds = {
  left: 8.20782,
  top: 47.094669,
  right: 8.365691,
  bottom: 47.024504,
};

function preload() {
  geodata = loadJSON("lucerne-roads.geojson");
}

function setup() {
  createCanvas(900, 650);

  console.log(geodata);

  noLoop();
}

function draw() {
  background(255);
}

function keyTyped() {
  console.log("saving...");
  saveCanvas("meinsdchoenesluzern", "png");
  console.log("done");
}
