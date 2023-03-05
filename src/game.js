console.log("hey");
const FRAME_RATE = 20;

let keys = {
  down: false,
  up: false,
  right: false,
  left: false,
};

let { player } = game;

const createPlayer = () => {
  game.player = new Player("max");
};

const drawPlayer = () => {
  let { player } = game;
  circle(player.x, player.y, player.size, "blue");
};

const drawExit = (exit) => {
  if (!exit.hidden) {
    rect(exit.x, exit.y, 25, 50, "orange");
  }
};

const drawGoodie = (goodie) => {
  if (goodie.eaten) {
    return;
  }
  circle(goodie.x, goodie.y, 3, "purple");
};

const drawRoom = () => {
  let { currentRoom } = game;
  const height = currentRoom.location.y2 - currentRoom.location.y1;
  const width = currentRoom.location.x2 - currentRoom.location.x1;

  rect(
    currentRoom.location.x1,
    currentRoom.location.y1,
    width,
    height,
    currentRoom.color
  );

  for (goodie of currentRoom.goodies) {
    drawGoodie(goodie);
  }
  for (exit of currentRoom.exits) {
    drawExit(exit);
  }
};

const arrowKeysOff = () => {
  keys.right = false;
  keys.left = false;
  keys.up = false;
  keys.down = false;
};

const movePlayer = () => {
  let { player } = game;
  // We have to account for the fact that the player is a circle with a radius.
  if (keys.up) {
    checkIfExiting(player.x, player.y - player.size * 2);
    if (player.y - player.size * 2 >= game.currentRoom.location.y1) {
      player.moveUp();
    }
  }

  if (keys.down) {
    checkIfExiting(player.x, player.y + player.size * 2);
    if (player.y + player.size * 2 <= game.currentRoom.location.y2) {
      player.moveDown();
    }
  }

  if (keys.left) {
    checkIfExiting(player.x - player.size * 2, player.y);
    if (player.x - player.size * 2 >= game.currentRoom.location.x1) {
      player.moveLeft();
    }
  }

  if (keys.right) {
    let { player } = game;
    checkIfExiting(player.x + player.size * 2, player.y);
    if (player.x + player.size * 2 <= game.currentRoom.location.x2) {
      player.moveRight();
    }
  }

  checkForCollisions();
};

const checkForCollisions = () => {
  const { player } = game;
  for (goodie of game.currentRoom.goodies) {
    if (
      !goodie.eaten &&
      distanceBetween(goodie.x, goodie.y, player.x, player.y) < 10 + 3 // the goodie and player sizes
    ) {
      console.log("NOM");
      goodie.eaten = true;
      player.goodies++;

      for (exit of game.currentRoom.exits) {
        if (exit.hidden && player.goodies >= exit.minGoodies) {
          exit.hidden = false;
        }
      }
    }
  }
};

const checkIfExiting = (x, y) => {
  for (exit of game.currentRoom.exits) {
    if ((!exit.hidden && keys.right) || keys.left) {
      if (x > exit.x && x < exit.x + 25 && y > exit.y && y < exit.y + 50) {
        if (game.rooms[exit.to] === undefined) {
          throw new Error(`Room '${exit.to}' doesn't exist yet!`);
        }

        game.currentRoom = game.rooms[exit.to];

        game.player.x = game.currentRoom.location.x1 + 50;
        game.player.y = game.currentRoom.location.y1 + 50;
        arrowKeysOff();
      }
    }
  }
};

initEventListeners = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && !keys.up) {
      keys.up = true;
    } else if (e.key === "ArrowDown" && !keys.down) {
      keys.down = true;
    } else if (e.key === "ArrowLeft" && !keys.left) {
      keys.left = true;
    } else if (e.key === "ArrowRight" && !keys.right) {
      keys.right = true;
    } else {
      //console.log(e.key);
    }
  });

  document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowUp" && keys.up) {
      keys.up = false;
    } else if (e.key === "ArrowDown" && keys.down) {
      keys.down = false;
    } else if (e.key === "ArrowLeft" && keys.left) {
      keys.left = false;
    } else if (e.key === "ArrowRight" && keys.right) {
      keys.right = false;
    } else {
      //console.log(e.key);
    }
  });
};

const init = () => {
  createPlayer();
  initEventListeners();
  game.currentRoom = game.rooms.tutorial;
  setInterval(gameLoop, FRAME_RATE);
};

const gameLoop = () => {
  clear();
  drawBackground();
  drawRoom();
  movePlayer();
  drawPlayer();
  updateDebugInfo();

  //requestAnimationFrame(gameLoop);
};

init();
