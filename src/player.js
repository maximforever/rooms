class Player {
  constructor(name) {
    this.name = name;
    this.currentRoom = null;
    this.x = 200;
    this.y = 200;
    this.size = 10;
    this.goodies = 0;
    this.hp = 100;
  }

  moveUp(room) {
    this.y -= this.size;
  }
  moveDown(room) {
    this.y += this.size;
  }

  moveLeft(room) {
    this.x -= this.size;
  }
  moveRight(room) {
    this.x += this.size;
  }
}
