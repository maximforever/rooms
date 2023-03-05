function generateId(digits = 16) {
  if (digits < 1) {
    return;
  }

  const chars = "1234567890abcdefghijklmonpqrstuvwxyz";

  let id = "";
  for (let i = 0; i < digits; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }

  return id;
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function distanceBetween(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function inRectangle(x, y, rect) {
  var colliding = false;

  if (
    x > rect.x &&
    x < rect.x + rect.width &&
    y > rect.y &&
    y < rect.y + rect.height
  ) {
    colliding = true;
  }

  return colliding;
}
