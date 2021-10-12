let geodata;
let streets;

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

  noLoop();
}

function draw() {
  background(255);

  for (let i = 0; i < 10; i++) {
    let waterObject = waterData[i];

    let geometry = waterObject.geometry;
    let properties = waterObject.properties;
    let name = properties.name;
    console.log("name", name);
    let coordinates = geometry.coordinates[0][0];

    noStroke();
    fill(random(0, 255), random(0, 255), random(255, 0));
    beginShape();
    // console.log("coordinates.length", coordinates.length);
    for (let j = 0; j < coordinates.length; j++) {
      let coord = coordinates[j];
      let lat = coord[1];
      let lon = coord[0];

      let x = map(lon, bounds.left, bounds.right, 0, width);
      let y = map(lat, bounds.top, bounds.bottom, 0, height);
      // console.log(x, y);

      curveVertex(x, y);
    }
    endShape();
  }
}

function keyTyped() {
  console.log("saving...");
  saveCanvas("meinsdchoenesluzern", "png");
  console.log("done");
}
