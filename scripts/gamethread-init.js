console.log('gamethread-init.js start');

  addHandler1(b1);
  addHandler1(b2);
  addHandler2(b3);
  
  woodMined = 0;
  treeExists = true;
  playerHoldingTool = true;
  playerUsingTool = false;
  
  player = new Player(30, 75);
  ground = new DirtBlock(CANVAS_WIDTH, 100, 0, CANVAS_HEIGHT - 93);
  tree = new Tree(100, 100, (CANVAS_WIDTH / 2) + 30, CANVAS_HEIGHT - ground.height - 145)
  axe = new Axe(100, 100);
  
  canvas.imageSmoothingEnabled = false;


console.log('gamethread-init.js end');
