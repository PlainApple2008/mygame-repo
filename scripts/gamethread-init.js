console.log('gamethread-init.js start');

function init() {
  addHandler1(b1);
  addHandler1(b2);
  addHandler2(b3);

  woodMined = 0;
  treeExists = true;
  playerHoldingTool = true;
  playerUsingTool = false;

  Player = new Entity(40, 75);
  Ground = new Entity(CANVAS_WIDTH, 93, 0, CANVAS_HEIGHT - 93);
  Tree = new Entity(35, 145, (CANVAS_WIDTH / 2) + 30, CANVAS_HEIGHT - Ground.height - 145)
  Axe = new Entity(10, 65);

  canvas.imageSmoothingEnabled = false;

  canvas.fillStyle = '#3E2222';
  canvas.fillRect(Ground.posx, Ground.posy, Ground.width, Ground.height);
  canvas.fillStyle = 'steelblue';
  canvas.fillRect(Player.posx, Player.posy, Player.width, Player.height);
  canvas.fillStyle = '#6E3B00';
  canvas.fillRect(Tree.posx, Tree.posy, Tree.width, Tree.height);
  canvas.fillStyle = '#FF961D';
  canvas.fillRect(Axe.posx, Axe.posy, Axe.width, Axe.height);
  
}

init();
console.log('gamethread-init.js end');
