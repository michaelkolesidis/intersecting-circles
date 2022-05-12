/*
 * Copyright (c) 2022 Michael Kolesidis
 * MIT License
 * 
 */

let totalTime = 2000;
let x1 = 300;
let y1 = 300;
let r1;
let speedX1;
let speedY1;
let x2 = 500;
let y2 = 300;
let r2 = 100;
let speedX2;
let speedY2;

function setup() {
  createCanvas(
    windowWidth - (windowWidth * 0.4) / 100,
    windowHeight - (windowHeight * 0.4) / 100
  );
  
  speedX1 = random(6)
  speedY1 = random(6)
  speedX2 = - random(6)
  speedY2 = - random(6)


  savedTime = millis();
  background(random(155, 255), random(155, 255), random(155, 255));
}

function draw() {

  r1 = width / 6;
  r2 = width / 6;

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


function windowResized() {
  resizeCanvas(
    windowWidth - (windowWidth * 0.4) / 100,
    windowHeight - (windowHeight * 0.4) / 100
  );
}