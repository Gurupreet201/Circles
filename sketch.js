let r,
  g,
  b,
  x,
  y,
  on = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  r = random(255);
  g = 0;
  b = random(255);
  x = random(width);
  y = random(height);
  noStroke();
  fill(r, g, b, 100);
  circle(x, y, 24);
}

function mousePressed() {
  on = !on;
  if (on) {
    background(255);
  } else {
    background(0);
  }
}
