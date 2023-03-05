const updateDebugInfo = () => {
  let { player } = game;
  const positionCell = document.getElementById("player-position");
  positionCell.innerText = `${player.x}, ${player.y}`;
};
