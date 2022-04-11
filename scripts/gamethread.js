console.log('gamethread.js start');

function run() {
  let w = 0;
  let h = 1;
  let x = 2;
  let y = 3;
  let c = 4;
  let oneTime = false;

  canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  tngb1 = touchInButton(b1, tx1, ty1);
  tngb2 = touchInButton(b2, tx1, ty1);
  tngb3 = touchInButton(b3, tx2, ty2);

  if (!collidesRect(playerBaseRect, groundTopRect)) {
    playerBaseRect[y] += 3;
  }

  if (tngb1) {
    playerBaseRect[x] += -2;
    axeBaseRect[x] = playerBaseRect[x] - 20;
    axeBaseRect[y] = playerBaseRect[y] - 15;
    axeTopRect[x] = playerBaseRect[x] - axeTopRect[w] - axeBaseRect[w];
    axeTopRect[y] = playerBaseRect[y] - 15;
  }

  if (tngb2) {
    playerBaseRect[x] += 2;
    axeBaseRect[x] = playerBaseRect[x] + playerBaseRect[w] + 10;
    axeBaseRect[y] = playerBaseRect[y] - 15;
    axeTopRect[x] = playerBaseRect[x] + playerBaseRect[w] + axeBaseRect[w];
    axeTopRect[y] = playerBaseRect[y] - 15;
  }

  if (tngb3 && collidesRect(axeTopRect, treeBaseRect)) {
    treeBaseRect[x] = (Math.floor(Math.random() * (CANVAS_WIDTH - treeBaseWidth + 2) + 1));
    treeTopRect[x] = treeBaseRect[x] - 5;
    treeMiddleRect[x] = treeBaseRect[x] - 25;
    woodMined++;
  }
  sessionStorage.setItem('score', woodMined);

  fillRect(groundBaseRect);
  fillRect(groundTopRect);
  fillRect(treeBaseRect);
  fillRect(treeTopRect);
  fillRect(treeMiddleRect);
  fillRect(playerBaseRect);
  fillRect(axeBaseRect);
  fillRect(axeTopRect);

  setfillStyle('#000000');
  canvas.font = "20px monospace";
  canvas.fillText('totalWoodYouHave: ' + sessionStorage.getItem('score'), 0, 20, 400);

  focus(
    /* 'touch1: x' + tx1 + ', y' + ty1 + ', isActive: ' + t1a +
     '<br>touch2: x' + tx2 + ', y' + ty2 + ', isActive: ' + t2a +
     '<br>touchInB1: ' + tngb1 +
     '<br>touchInB2: ' + tngb2 +
     '<br>touchInB3: ' + tngb3 +
     '<br>woodMined: ' + woodMined +*/
    'Window: w' + WINDOW_WIDTH + ', h' + WINDOW_HEIGHT);
  requestAnimationFrame(run);
}

run();
console.log('gamethread.js end');
