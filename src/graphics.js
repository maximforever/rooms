let canvas = document.getElementById("board");
let ctx = canvas.getContext("2d");
let WIDTH = canvas.width;
let HEIGHT = canvas.height;

function drawBackground() {
  rect(0, 0, WIDTH, HEIGHT, "rgb(0, 0, 0)");
}

// LIBRARY CODE

function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT); // creates a rectangle the size of the entire canvas that clears the area
}

function circle(x, y, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, false); // start at 0, end at Math.PI*2
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function emptyCircle(x, y, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, false); // start at 0, end at Math.PI*2
  ctx.closePath();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fill();
}

function rect(x, y, w, h, color) {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.closePath();

  ctx.lineWidth = 2;
  ctx.strokeStyle = "#4d4d4d";
  ctx.fillStyle = color;
  //ctx.stroke();
  ctx.fill();
}

function roundRect(x, y, w, h, r, color) {
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.arcTo(x + w, y, x + w, y + h, 0);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, 0);
  ctx.closePath();

  ctx.fillStyle = color;
  ctx.fill();
}

function text(text, x, y, size, color, centerAlign) {
  ctx.font = size + "px Arial";
  ctx.fillStyle = color;

  if (centerAlign) {
    ctx.textAlign = "center";
  } else {
    ctx.textAlign = "left";
  }

  ctx.fillText(text, x, y);
}

function line(x1, y1, x2, y2, color) {
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = color;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function perspectiveLine(x1, y1, x2, y2, color) {
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = color;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

/* other functions */

function randBetween(min, max) {
  return Math.random() * (max - min) + min;
}
