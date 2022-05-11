totalTime = 2000;
x1 = 200;
y1 = 200;
r1 = 100;
speedX1 = 2;
speedY1 = 2;
x2 = 500;
y2 = 300;
r2 = 100;
speedX2 = -2;
speedY2 = -4;

function setup() {
  createCanvas(800, 600);
  savedTime = millis();
  background(random(155, 255), random(155, 255), random(155, 255));
}

function draw() {
  passedTime = millis() - savedTime;
  if (passedTime > totalTime) {
    background(random(155, 255), random(155, 255), random(155, 255));
    savedTime = millis();
  }

  x1 += speedX1;
  y1 += speedY1;

  if (x1 <= 0 + r1 || x1 >= width - r1) {
    speedX1 *= -1;
  }
  if (y1 <= 0 + r1 || y1 >= height - r1) {
    speedY1 *= -1;
  }
  x2 += speedX2;
  y2 += speedY2;

  if (x2 <= 0 + r2 || x2 >= width - r2) {
    speedX2 *= -1;
  }
  if (y2 <= 0 + r2 || y2 >= height - r2) {
    speedY2 *= -1;
  }

  if (dist(x1, y1, x2, y2) < r1 + r2) {
    fill(random(155, 255), random(155, 255), random(155, 255));
  } else {
    fill(255);
  }
  ellipseMode(CENTER);
  noStroke();
  ellipse(x1, y1, 2 * r1, 2 * r1);
  ellipse(x2, y2, 2 * r2, 2 * r2);
}