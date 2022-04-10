console.log('local-gamethread.js start');

function run() {
  canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  tngb1 = touchInButton(b1, tx1, ty1);
  tngb2 = touchInButton(b2, tx1, ty1);
  tngb3 = touchInButton(b3, tx2, ty2);

  if (!player.collides(ground)) {
    player.move(3, 's');
  }

  if (tngb1) {
    player.move(2, 'w');
  }
  
  if (tngb2) {
    player.move(2, 'e');
  }

  playerUsingTool = tngb3;

  if (tngb1) {
    axe.setX(player.posx - 20);
  }
  if (tngb2) {
    axe.setX(player.posx + player.width + 10);
  }

  axe.setY(player.posy - 30);

  if (playerHoldingTool && playerUsingTool && axe.collides(tree)) {
    tree.setX(Math.floor(Math.random() * (CANVAS_WIDTH - tree.width + 2) + 1));
    woodMined++;
  }

  player.setSprite([player.width, player.height, player.posx, player.posy, colorEnum.lightblue, 1]);
  ground.setSprite([ground.width, ground.height, ground.posx, ground.posy, colorEnum.dimbrown, 1]);
  axe.setSprite(
    // handle
    [axe.width / 10, axe.height - (axe.height / 5), axe.posx + (axe.width / 4), axe.posy + (axe.height / 5), colorEnum.lightbrown, 1,
     // blade
     axe.width - (axe.width / 4), axe.height / 5, axe.posx + (axe.width / 4), axe.posy + (axe.height / 5), colorEnum.grey, 1]
  );
  tree.setSprite(
    // wood base
    [tree.width / 4, tree.height * 1, tree.posx + (tree.width / 3), tree.posy + (tree.height / 2), colorEnum.brown, 1,
     // bottom leaf
     tree.width, tree.height / 4, tree.posx, tree.posy + (tree.height / 4), colorEnum.dimgreen, 1,
     // top leaf
     tree.width / 3, tree.height / 2, tree.posx + (tree.width / 3), tree.posy, colorEnum.green, 1]
  );
  
  renderEntity(ground);
  renderEntity(tree);
  renderEntity(axe);
  renderEntity(player);

  setfillStyle('#000000');
  canvas.font = "20px monospace";
  canvas.fillText('totalWoodYouHave: ' + woodMined, 0, 20, 400);

  focus(
    'touch1: x' + tx1 + ', y' + ty1 + ', isActive: ' + t1a +
    '<br>touch2: x' + tx2 + ', y' + ty2 + ', isActive: ' + t2a +
    '<br>touchInB1: ' + tngb1 +
    '<br>touchInB2: ' + tngb2 +
    '<br>touchInB3: ' + tngb3 +
    '<br>woodMined: ' + woodMined +
    '<br>Window: w' + WINDOW_WIDTH + ', h' + WINDOW_HEIGHT +
    '<br>Player: x' + player.getX() + ', y' + player.getY());
  requestAnimationFrame(run);
}

run();

console.log('local-gamethread.js end');
