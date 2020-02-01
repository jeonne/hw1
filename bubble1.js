var x;
var y;
var radius;

function setup() {
  createCanvas(450, 650);
  x = random(width);
  y = random(height);
  radius = 25;
}

function draw() {
  background(200, 237, 119);

  if (dist(mouseX, mouseY, x, y) < radius) {
    if (mouseIsPressed) {
      x = random(width);
      y = random(height);
    }
    fill(255, 21, 111, 205);
  }
  else {
    fill(255, 199, 69);
  }

  ellipse(x, y, radius * 2);
  x += random(-9, 9);
  y += random(-8, 8);
}
