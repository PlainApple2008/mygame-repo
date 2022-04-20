console.log('local-gamethread-init.js start');

addHandler1(b1);
addHandler1(b2);
addHandler2(b3);

var b4Clicked = false;

b4.onclick = function() {
  b4Clicked = true;
};

var totalWood;
var axeFacingRight;
var playerSpeed;
var playerIsFalling;

var groundBaseRect;
var groundTopRect;
var treeBaseRect;
var treeMiddleRect;
var treeTopRect;
var playerBaseRect;
var axeBaseRect;
var axeTopRect;
var shopBaseRect;
var shopDoorRect;
var shopWindowRect;

const treeBaseWidth = 180;

if (pageRefreshed === false) {
  if (client_orientation == 'landscape') playerSpeed = 15;
  else playerSpeed = 10;

  totalWood = 0;
  axeFacingRight = true;
  playerIsFalling = false;

  groundBaseRect = [canvas_width, 150, 0, canvas_height - 150, colorEnum.brown];
  groundTopRect = [canvas_width, 25, 0, canvas_height - 150, colorEnum.lightgreen];
  treeBaseRect = [30, 125, 350, canvas_height - groundBaseRect[1] - 125, colorEnum.dimbrown];
  treeMiddleRect = [80, 40, treeBaseRect[2] - 25, treeBaseRect[3] - 40, colorEnum.darkgreen];
  treeTopRect = [40, 30, treeBaseRect[2] - 5, treeMiddleRect[3] - 30, colorEnum.dimgreen];
  playerBaseRect = [50, 50, 100, canvas_height - 50 - groundBaseRect[1], colorEnum.lightblue];
  axeBaseRect = [10, 75, playerBaseRect[2] + playerBaseRect[0] + 15, playerBaseRect[3] - 15, colorEnum.lightbrown];
  axeTopRect = [40, 35, axeBaseRect[2], axeBaseRect[3], colorEnum.grey];
  shopBaseRect = [265, 165, canvas_width - 265 - 60, canvas_height - groundBaseRect[1] - 165, colorEnum.lightgrey];
  shopDoorRect = [58, 80, shopBaseRect[2] + 25, canvas_height - groundBaseRect[1] - 80, colorEnum.darkbrown];
  shopWindowRect = [150, 55, shopBaseRect[2] + shopBaseRect[0] - 150 - 25, shopBaseRect[3] + 20, colorEnum.lightblue];

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
  cache('playerSpeed', playerSpeed);

} else {

  groundBaseRect = toGameRect(getCache('groundBaseRect'));
  groundTopRect = toGameRect(getCache('groundTopRect'));
  treeBaseRect = toGameRect(getCache('treeBaseRect'));
  treeMiddleRect = toGameRect(getCache('treeMiddleRect'));
  treeTopRect = toGameRect(getCache('treeTopRect'));
  playerBaseRect = toGameRect(getCache('playerBaseRect'));
  axeBaseRect = toGameRect(getCache('axeBaseRect'));
  axeTopRect = toGameRect(getCache('axeTopRect'));
  shopBaseRect = toGameRect(getCache('shopBaseRect'));
  shopDoorRect = toGameRect(getCache('shopDoorRect'));
  shopWindowRect = toGameRect(getCache('shopWindowRect'));
}

canvas.imageSmoothingEnabled = false;

if (retrieve('totalWood') === null) {
  store('totalWood', totalWood);
}

function refreshGameVariables() {
  totalWood = Number.parseInt(retrieve('totalWood'));
}

refreshGameVariables();

function refreshGlobalVariables() {
  canvasInit.width = window.innerWidth;
  canvasInit.height = window.innerHeight - 137;
  canvas_width = canvasInit.width;
  canvas_height = canvasInit.height;
  client_orientation = (screen.availHeight > screen.availWidth) ? 'landscape' : 'portrait';
}

console.log('local-gamethread-init.js end');
