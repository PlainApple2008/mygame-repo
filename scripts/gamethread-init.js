console.log('gamethread-init.js start');

function init() {
  addHandler1(b1);
  addHandler1(b2);
  addHandler2(b3);

  woodMined = 0;
  treeExists = true;
  playerHoldingTool = true;
  playerUsingTool = false;

  player = new Entity(40, 75);
  ground = new Entity(CANVAS_WIDTH, 93, 0, CANVAS_HEIGHT - 93);
  tree = new Entity(35, 145, (CANVAS_WIDTH / 2) + 30, CANVAS_HEIGHT - ground.height - 145)
  axe = new Entity(10, 65);

  canvas.imageSmoothingEnabled = false;

  fillEntity(ground, '#3E2222');
  fillEntity(player, 'steelblue');
  fillEntity(tree, '#6E3B00');
  fillEntity(axe, 'FF961D');
}

init();

console.log('gamethread-init.js end');
