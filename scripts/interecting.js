/*
 * Copyright (c) 2023 Michael Kolesidis
 * GNU Affero General Public License v3.0
 * https://www.gnu.org/licenses/gpl-3.0.html
 *
 */

let totalTime = 2000;
let x1 = 300;
let y1 = 300;
let r1 = 100;
let speedX1;
let speedY1;
let x2 = 500;
let y2 = 300;
let r2 = 100;
let speedX2;
let speedY2;
let speedFactor = 1.5;

// Setup
function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);

  speedX1 = random(6) * speedFactor * noise(frameCount);
  speedY1 = random(6) * speedFactor * noise(frameCount);
  speedX2 = -random(6) * speedFactor * noise(frameCount);
  speedY2 = -random(6) * speedFactor * noise(frameCount);

  savedTime = millis();
  background(random(155, 255), random(155, 255), random(155, 255));
}
// Draw
function draw() {
  if (width <= height) {
    r1 = width / 8;
    r2 = width / 8;
  } else {
    r1 = height / 8;
    r2 = height / 8;
  }

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

// Resize
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Fullscreen
window.addEventListener("dblclick", () => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;

  if (!fullscreenElement) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});
