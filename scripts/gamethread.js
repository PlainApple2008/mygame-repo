console.log('gamethread.js start');

function run() {
  let w = 0;
  let h = 1;
  let x = 2;
  let y = 3;
  let c = 4;
  let oneTime = false;

  if (refreshAllowed) {
    refreshGlobalVariables();
    refreshGameVariables();
    //  refreshObjects();
    refreshAllowed = false;
    // r1
    groundBaseRect[w] = canvas_width;
    groundBaseRect[h] = toGameSquare(sessionStorage.getItem('groundBaseRect'))[h];
    groundBaseRect[x] = toGameSquare(sessionStorage.getItem('groundBaseRect'))[x];
    groundBaseRect[y] = canvas_height - toGameSquare(sessionStorage.getItem('groundBaseRect'))[h];
    // r2
    groundTopRect[w] = groundBaseRect[w];
    groundTopRect[h] = toGameSquare(sessionStorage.getItem('groundTopRect'))[h];
    groundTopRect[x] = groundBaseRect[x];
    groundTopRect[y] = groundBaseRect[y];
    // r3
    treeBaseRect[w] = toGameSquare(sessionStorage.getItem('treeBaseRect'))[w];
    treeBaseRect[h] = toGameSquare(sessionStorage.getItem('treeBaseRect'))[h];
    treeBaseRect[x] = toGameSquare(sessionStorage.getItem('treeBaseRect'))[x];
    treeBaseRect[y] = canvas_height - groundBaseRect[h] - toGameSquare(sessionStorage.getItem('treeBaseRect'))[h];
    // r4
    treeMiddleRect[w] = toGameSquare(sessionStorage.getItem('treeMiddleRect'))[w];
    treeMiddleRect[h] = toGameSquare(sessionStorage.getItem('treeMiddleRect'))[h];
    treeMiddleRect[x] = treeBaseRect[x] - 25;
    treeMiddleRect[y] = treeBaseRect[y] - toGameSquare(sessionStorage.getItem('treeMiddleRect'))[h];
    // r5
    treeTopRect[w] = toGameSquare(sessionStorage.getItem('treeTopRect'))[w];
    treeTopRect[h] = toGameSquare(sessionStorage.getItem('treeTopRect'))[h];
    treeTopRect[x] = treeBaseRect[x] - 5;
    treeTopRect[y] = treeMiddleRect[y] - 30;
    // r6
    playerBaseRect[w] = toGameSquare(sessionStorage.getItem('playerBaseRect'))[w];
    playerBaseRect[h] = toGameSquare(sessionStorage.getItem('playerBaseRect'))[h];
    playerBaseRect[x] = toGameSquare(sessionStorage.getItem('playerBaseRect'))[x];
    playerBaseRect[y] = canvas_height - groundBaseRect[h] - toGameSquare(sessionStorage.getItem('playerBaseRect'))[h];
    // r7
    axeBaseRect[w] = toGameSquare(sessionStorage.getItem('axeBaseRect'))[w];
    axeBaseRect[h] = toGameSquare(sessionStorage.getItem('axeBaseRect'))[h];
    axeBaseRect[x] = (axeFacingRight) ? playerBaseRect[x] + playerBaseRect[w] + 15 : playerBaseRect[x] - playerBaseRect[w] - 15;
    axeBaseRect[y] = playerBaseRect[y] - 15;
    // r8
    axeTopRect[w] = toGameSquare(sessionStorage.getItem('axeTopRect'))[w];
    axeTopRect[h] = toGameSquare(sessionStorage.getItem('axeTopRect'))[h];
    axeTopRect[x] = axeBaseRect[x];
    axeTopRect[y] = axeBaseRect[y];

    console.log(
      'w:' + canvasInit.width +
      '\nh:' + canvasInit.height +
      '\ncw:' + canvas_width +
      '\nch:' + canvas_height +
      '\nwiw:' + window.innerWidth +
      '\nwih:' + window.innerHeight);
  }
  
  canvas.clearRect(0, 0, canvas_width, canvas_height);

  tngb1 = touchInButton(b1, tx1, ty1);
  tngb2 = touchInButton(b2, tx1, ty1);
  tngb3 = touchInButton(b3, tx2, ty2);

  if (!collidesRect(playerBaseRect, groundTopRect)) {
    playerBaseRect[y] = playerBaseRect[y] + 3;
  }

  if (tngb1) {
    playerBaseRect[x] = playerBaseRect[x] + -2;
    axeBaseRect[x] = playerBaseRect[x] - 20;
    axeBaseRect[y] = playerBaseRect[y] - 15;
    axeTopRect[x] = playerBaseRect[x] - axeTopRect[w] - axeBaseRect[w];
    axeTopRect[y] = playerBaseRect[y] - 15;
    axeFacingRight = false;
  }

  if (tngb2) {
    playerBaseRect[x] = playerBaseRect[x] + 2;
    axeBaseRect[x] = playerBaseRect[x] + playerBaseRect[w] + 10;
    axeBaseRect[y] = playerBaseRect[y] - 15;
    axeTopRect[x] = playerBaseRect[x] + playerBaseRect[w] + axeBaseRect[w];
    axeTopRect[y] = playerBaseRect[y] - 15;
    axeFacingRight = true;
  }

  if (tngb3 && collidesRect(axeTopRect, treeBaseRect)) {
    treeBaseRect[x] = (Math.floor(Math.random() * (canvas_width - treeBaseWidth + 2) + 1));
    treeTopRect[x] = treeBaseRect[x] - 5;
    treeMiddleRect[x] = treeBaseRect[x] - 25;
    woodMined++;
    localStorage.setItem('score', woodMined);
  }

  fillRect(groundBaseRect);
  fillRect(groundTopRect);
  fillRect(treeBaseRect);
  fillRect(treeTopRect);
  fillRect(treeMiddleRect);
  fillRect(playerBaseRect);
  fillRect(axeBaseRect);
  fillRect(axeTopRect);

  cache('groundBaseRect', groundBaseRect);
  cache('groundTopRect', groundTopRect);
  cache('treeBaseRect', treeBaseRect);
  cache('treeTopRect', treeTopRect);
  cache('treeMiddleRect', treeMiddleRect);
  cache('playerBaseRect', playerBaseRect);
  cache('axeBaseRect', axeBaseRect);
  cache('axeTopRect', axeTopRect);

  setfillStyle('#000000');
  canvas.font = "20px monospace";
  canvas.fillText('totalWoodYouHave: ' + localStorage.getItem('score'), 0, 20, 400);
  
    focus(
      'DEBUG: Focused Variables' +
      '<br>touch1: x' + tx1 + ', y' + ty1 + ', isActive: ' + t1a +
      '<br>touch2: x' + tx2 + ', y' + ty2 + ', isActive: ' + t2a +
      '<br>touchInB1: ' + tngb1 +
      '<br>touchInB2: ' + tngb2 +
      '<br>touchInB3: ' + tngb3 +
      '<br>woodMined: ' + woodMined +
      '<br>Window: w' + window.innerWidth + ', h' + window.innerHeight);
    //+ '<br><br><br>i<br><br>k<br><br>o<bd><br><br>k<br><br>');
   // console.log(sessionStorage.getItem('playerBaseRect'));
    
  requestAnimationFrame(run);
}
run();

run();
console.log('gamethread.js end');
