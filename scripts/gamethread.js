console.log('gamethread.js start');

function run() {
  canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  tngb1 = touchInButton(b1, tx1, ty1);
  tngb2 = touchInButton(b2, tx1, ty1);
  tngb3 = touchInButton(b3, tx2, ty2);

  if (!player.collides(ground)) {
    player.posy += 3;
  }
  if (tngb1) {
    player.posx -= 2;
  }
  if (tngb2) {
    player.posx += 2;
  }

  playerUsingTool = tngb3;

  if (tngb1) {
    axe.posx = player.posx - 20;
  }
  if (tngb2) {
    axe.posx = player.posx + player.width + 10;
  }

  axe.posy = player.posy - 30;

  if (playerHoldingTool && playerUsingTool && axe.collides(tree)) {
    tree.posx = Math.floor(Math.random() * (CANVAS_WIDTH - tree.width + 2) + 1);
    woodMined++;
  }

  fillEntity(ground, '#3E2222');
  fillEntity(player, 'steelblue');
  if (treeExists) {
    fillEntity(tree, '#6E3B00');
  }
  fillEntity(axe, '#FF961D');
  setfillStyle('#000000');
  canvas.font = "20px monospace";
  canvas.fillText('totalWoodYouHave: ' + woodMined, 0, 20, 400);

  focus(
    'touch1: x' + tx1 + ', y' + ty1 + ', isActive: ' + t1a +
    '<br>touch2: x' + tx2 + ', ' + ty2 + ', isActive: ' + t2a +
    '<br>touchInB1: ' + tngb1 +
    '<br>touchInB2: ' + tngb2 +
    '<br>touchInB3: ' + tngb3 +
    '<br>woodMined: ' + woodMined +
    '<br>Window: w' + WINDOW_WIDTH + ', h' + WINDOW_HEIGHT);
  requestAnimationFrame(run);
}

run();
console.log('gamethread.js end');