console.log('local-gamethread-init.js start');

addHandler1(b1);
addHandler1(b2);
addHandler2(b3);

const gameValPool = new Map();
const gameEntPool = new Map();

var woodMined = 0;
var treeKillCount = 0;
var treeDropCount = 1;
var treeHealth = 0;
var playerLevel = 0;
var axePower = 1;
var axeTouchedGround = false;
var axeFacingRight = false;

var groundBaseRect = [canvas_width, 150, 0, canvas_height - 150, colorEnum.brown];
var groundTopRect = [canvas_width, 25, 0, canvas_height - 150, colorEnum.lightgreen];
var treeBaseRect = [30, 125, 350, canvas_height - groundBaseRect[1] - 125, colorEnum.dimbrown];
var treeMiddleRect = [80, 40, treeBaseRect[2] - 25, treeBaseRect[3] - 40, colorEnum.darkgreen];
var treeTopRect = [40, 30, treeBaseRect[2] - 5, treeMiddleRect[3] - 30, colorEnum.dimgreen];
var playerBaseRect = [50, 50, 100, canvas_height - 50 - groundBaseRect[1], colorEnum.lightblue];
var axeBaseRect = [10, 75, playerBaseRect[2] + playerBaseRect[0] + 15, playerBaseRect[3] - 15, colorEnum.lightbrown];
var axeTopRect = [40, 35, axeBaseRect[2], axeBaseRect[3], colorEnum.grey];

const treeBaseWidth = 180;
const axeBaseWidth = 40;

canvas.imageSmoothingEnabled = false;

if (localStorage.getItem('score') === null) {
  console.log('invoked setting score');
  localStorage.setItem('score', woodMined);
}

woodMined = Number.parseInt(localStorage.getItem('score'));

function refreshObjects() {
  groundBaseRect = toGameSquare(sessionStorage.getItem('groundBaseRect')); //[canvas_width, 150, 0, canvas_height - 150, colorEnum.brown];
  groundTopRect = toGameSquare(sessionStorage.getItem('groundTopRect')); //[canvas_width, 25, 0, canvas_height - 150, colorEnum.lightgreen];
  treeBaseRect = toGameSquare(sessionStorage.getItem('treeBaseRect')); //[30, 125, 350, canvas_height - groundBaseRect[1] - 125, colorEnum.dimbrown];
  treeMiddleRect = toGameSquare(sessionStorage.getItem('treeMiddleRect')); // [80, 40, treeBaseRect[2] - 25, treeBaseRect[3] - 40, colorEnum.darkgreen];
  treeTopRect = toGameSquare(sessionStorage.getItem('treeTopRect')); // [40, 30, treeBaseRect[2] - 5, treeMiddleRect[3] - 30, colorEnum.dimgreen];
  playerBaseRect = toGameSquare(sessionStorage.getItem('playerBaseRect')); //[50, 50, 100, canvas_height - 50 - groundBaseRect[1], colorEnum.lightblue];
  axeBaseRect = toGameSquare(sessionStorage.getItem('axeBaseRect')); //[10, 75, playerBaseRect[2] + playerBaseRect[0] + 15, playerBaseRect[3] - 15, colorEnum.lightbrown];
  axeTopRect = toGameSquare(sessionStorage.getItem('axeTopRect')); // [40, 35, axeBaseRect[2], axeBaseRect[3], colorEnum.grey];
}

function refreshGameVariables() {
  woodMined = Number.parseInt(localStorage.getItem('score'));
}

function refreshGlobalVariables() {
canvasInit.width = window.innerWidth;
  canvasInit.height = window.innerHeight - 137;
  canvas_width = canvasInit.width;
  canvas_height = canvasInit.height;
  client_orientation = (screen.availHeight > screen.availWidth) ? 'landscape' : 'portrait';
}

function scaleObjects() {
  if (client_orientation == 'landscape') {

  }
}
console.log('local-gamethread-init.js end');
