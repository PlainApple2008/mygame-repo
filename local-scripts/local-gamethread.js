console.log('local-gamethread.js start');

function run() {
  let w = 0;
  let h = 1;
  let x = 2;
  let y = 3;
  let c = 4;

  if (b4Clicked == true && playerIsFalling) {
    playerBaseRect[y] = canvas_height - groundBaseRect[h] - playerBaseRect[h];
    playerBaseRect[x] = 300;
    b4Clicked = false;
  }

  if (refreshAllowed) {
    if (client_orientation == 'landscape') {
      if (getCache('playerSpeed') === null) {
        playerSpeed = 15;
        cache('playerSpeed', playerSpeed);
      } else {
        playerSpeed = Number.parseInt(getCache('playerSpeed'));
      }
    } else if (client_orientation == 'portrait') {
      if (getCache('playerSpeed') === null) {
        playerSpeed = 10;
        cache('playerSpeed', playerSpeed);
      } else {
        playerSpeed = Number.parseInt(getCache('playerSpeed'));
      }
    } else {
      alert('error occured!\nreport: client_orientation do not match any orientation\nclient_orientation = \'' + client_orientation + '\'');
    }

    refreshGlobalVariables();
    refreshGameVariables();
    refreshAllowed = false;
    // r1
    groundBaseRect[w] = canvas_width;
    groundBaseRect[h] = toGameRect(getCache('groundBaseRect'))[h];
    groundBaseRect[x] = toGameRect(getCache('groundBaseRect'))[x];
    groundBaseRect[y] = canvas_height - toGameRect(getCache('groundBaseRect'))[h];
    // r2
    groundTopRect[w] = groundBaseRect[w];
    groundTopRect[h] = toGameRect(getCache('groundTopRect'))[h];
    groundTopRect[x] = groundBaseRect[x];
    groundTopRect[y] = groundBaseRect[y];
    // r3
    treeBaseRect[w] = toGameRect(getCache('treeBaseRect'))[w];
    treeBaseRect[h] = toGameRect(getCache('treeBaseRect'))[h];
    treeBaseRect[x] = toGameRect(getCache('treeBaseRect'))[x];
    treeBaseRect[y] = canvas_height - groundBaseRect[h] - toGameRect(getCache('treeBaseRect'))[h];
    // r4
    treeMiddleRect[w] = toGameRect(getCache('treeMiddleRect'))[w];
    treeMiddleRect[h] = toGameRect(getCache('treeMiddleRect'))[h];
    treeMiddleRect[x] = treeBaseRect[x] - 25;
    treeMiddleRect[y] = treeBaseRect[y] - toGameRect(getCache('treeMiddleRect'))[h];
    // r5
    treeTopRect[w] = toGameRect(getCache('treeTopRect'))[w];
    treeTopRect[h] = toGameRect(getCache('treeTopRect'))[h];
    treeTopRect[x] = treeBaseRect[x] - 5;
    treeTopRect[y] = treeMiddleRect[y] - 30;
    // r6
    playerBaseRect[w] = toGameRect(getCache('playerBaseRect'))[w];
    playerBaseRect[h] = toGameRect(getCache('playerBaseRect'))[h];
    playerBaseRect[x] = toGameRect(getCache('playerBaseRect'))[x];
    playerBaseRect[y] = canvas_height - groundBaseRect[h] - toGameRect(getCache('playerBaseRect'))[h];
    // r7
    axeBaseRect[w] = toGameRect(getCache('axeBaseRect'))[w];
    axeBaseRect[h] = toGameRect(getCache('axeBaseRect'))[h];
    axeBaseRect[x] = (axeFacingRight == true) ? playerBaseRect[x] + playerBaseRect[w] + 15 : playerBaseRect[x] - playerBaseRect[w] - 15;
    axeBaseRect[y] = playerBaseRect[y] - 15;
    // r8
    axeTopRect[w] = toGameRect(getCache('axeTopRect'))[w];
    axeTopRect[h] = toGameRect(getCache('axeTopRect'))[h];
    axeTopRect[x] = axeBaseRect[x];
    axeTopRect[y] = axeBaseRect[y];
    // r9
    shopBaseRect[w] = toGameRect(getCache('shopBaseRect'))[w];
    shopBaseRect[h] = toGameRect(getCache('shopBaseRect'))[h];
    shopBaseRect[x] = canvas_width - 60 - toGameRect(getCache('shopBaseRect'))[w];
    shopBaseRect[y] = canvas_height - groundBaseRect[h] - toGameRect(getCache('shopBaseRect'))[h];
    // r10
    shopDoorRect[w] = toGameRect(getCache('shopDoorRect'))[w];
    shopDoorRect[h] = toGameRect(getCache('shopDoorRect'))[h];
    shopDoorRect[x] = shopBaseRect[x] + 25;
    shopDoorRect[y] = canvas_height - groundBaseRect[h] - toGameRect(getCache('shopDoorRect'))[h];
    // r11
    shopWindowRect[w] = toGameRect(getCache('shopWindowRect'))[w];
    shopWindowRect[h] = toGameRect(getCache('shopWindowRect'))[h];
    shopWindowRect[x] = shopBaseRect[x] + shopBaseRect[w] - toGameRect(getCache('shopWindowRect'))[w] - 25;
    shopWindowRect[y] = shopBaseRect[y] + 20;
  }

  canvas.clearRect(0, 0, canvas_width, canvas_height);

  tngb1 = touchInButton(b1, tx1, ty1);
  tngb2 = touchInButton(b2, tx1, ty1);
  tngb3 = touchInButton(b3, tx2, ty2);

  if (!collidesRect(playerBaseRect, groundTopRect)) {
    playerBaseRect[y] = playerBaseRect[y] + 3;
  }

  if (tngb1) {
    playerBaseRect[x] = playerBaseRect[x] + -playerSpeed;
    axeBaseRect[x] = playerBaseRect[x] - 20;
    axeBaseRect[y] = playerBaseRect[y] - 15;
    axeTopRect[x] = playerBaseRect[x] - axeTopRect[w] - axeBaseRect[w];
    axeTopRect[y] = playerBaseRect[y] - 15;
    axeFacingRight = false;
  }

  if (tngb2) {
    playerBaseRect[x] = playerBaseRect[x] + playerSpeed;
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
    totalWood++;
    store('totalWood', totalWood);
  }

  fillRect(groundBaseRect);
  fillRect(groundTopRect);
  fillRect(shopBaseRect);
  fillRect(shopWindowRect);
  fillRect(shopDoorRect);
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
  cache('shopBaseRect', shopBaseRect);
  cache('shopDoorRect', shopDoorRect);
  cache('shopWindowRect', shopWindowRect);

  cache('axeFacingRight', axeFacingRight);

  setfillStyle('#000000');
  canvas.font = "20px monospace";
  canvas.fillText('totalWoodYouHave: ' + retrieve('totalWood'), 0, 20, 400);
  canvas.font = '10px monospace';
  canvas.fillText('This is an unfinished project', 0, 40, 400);
  canvas.font = '15px monospace';
  canvas.fillText('player: posx=' + playerBaseRect[x] +
    ' posy=' + playerBaseRect[y], 0, 60, 400);

  if (playerBaseRect[y] > groundBaseRect[y]) {
    canvas.fillText('you are falling .... dont do it again.', 0, 80, 400);
    playerIsFalling = true;
  }

  focus(
    'DEBUG: Focused Variables' +
    '<br>touch1: x' + tx1 + ', y' + ty1 + ', isActive: ' + t1a +
    '<br>touch2: x' + tx2 + ', y' + ty2 + ', isActive: ' + t2a +
    '<br>touchInB1: ' + tngb1 +
    '<br>touchInB2: ' + tngb2 +
    '<br>touchInB3: ' + tngb3 +
    '<br>totalWood: ' + totalWood +
    '<br>Window: w' + window.innerWidth + ', h' + window.innerHeight);
  requestAnimationFrame(run);
}

run();
console.log('local-gamethread.js end');
