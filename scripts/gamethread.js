console.log('gamethread.js start');

function run() {
  canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  
  tngb1 = touchInButton(b1, tx1, ty1);
  tngb2 = touchInButton(b2, tx1, ty1);
  tngb3 = touchInButton(b3, tx2, ty2);
  
  if (!Player.collides(Ground)) {
    Player.posy += 3;
  }
  if (tngb1) {
    Player.posx -= 2;
  }
  if (tngb2) {
    Player.posx += 2;
  }
  
  playerUsingTool = tngb3;
  
  if (tngb1) {
    Axe.posx = Player.posx - 20;
  }
  if (tngb2) {
    Axe.posx = Player.posx + Player.width + 10;
  }
  
  Axe.posy = Player.posy - 30;
  
  if (playerHoldingTool && playerUsingTool && Axe.collides(Tree)) {
    Tree.posx = Math.floor(Math.random() * (CANVAS_WIDTH - Tree.width + 2) + 1);
    woodMined++;
  }
  
  canvas.fillStyle = '#3E2222';
  canvas.fillRect(Ground.posx, Ground.posy, Ground.width, Ground.height);
  canvas.fillStyle = 'steelblue';
  canvas.fillRect(Player.posx, Player.posy, Player.width, Player.height);
  if (treeExists) {
    canvas.fillStyle = '#6E3B00';
    canvas.fillRect(Tree.posx, Tree.posy, Tree.width, Tree.height);
  }
  canvas.fillStyle = '#FF961D';
  canvas.fillRect(Axe.posx, Axe.posy, Axe.width, Axe.height);
  canvas.fillStyle = '#000000';
  canvas.font = "20px monospace";
  canvas.fillText('totalWoodYouHave: ' + woodMined, 0, 20, 400);
  
  focus(
    'touch1: x' + tx1 + ', y' + ty1 + ', isActive: ' + t1a +
    '<br>touch2: x' + tx2 + ', ' + ty2 + ', isActive: ' + t2a +
    '<br>touchInB1: ' + tngb1 +
    '<br>touchInB2: ' + tngb2 +
    '<br>touchInB3: ' + tngb3 +
    '<br>woodMined: ' + woodMined);
  requestAnimationFrame(run);
}

run();
console.log('gamethread.js end');

