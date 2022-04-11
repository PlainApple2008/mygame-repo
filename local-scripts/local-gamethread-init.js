console.log('local-gamethread-init.js start');

addHandler1(b1);
addHandler1(b2);
addHandler2(b3);

var woodMined = 0;
var treeKillCount = 0;
var treeDropCount = 1;
var treeHealth = 0;
var playerLevel = 0;
var axePower = 1;
var axeTouchedGround = false;

const groundBaseRect = [CANVAS_WIDTH, 150, 0, CANVAS_HEIGHT - 150, colorEnum.brown];
const groundTopRect = [CANVAS_WIDTH, 25, 0, CANVAS_HEIGHT - 150, colorEnum.lightgreen];
const treeBaseRect = [30, 125, 350, CANVAS_HEIGHT - groundBaseRect[1] - 125, colorEnum.dimbrown];
const treeMiddleRect = [80, 40, treeBaseRect[2] - 25, treeBaseRect[3] - 40, colorEnum.darkgreen];
const treeTopRect = [40, 30, treeBaseRect[2] - 5, treeMiddleRect[3] - 30, colorEnum.dimgreen];
const axeBaseRect = [10, 75, 200, 0, colorEnum.lightbrown];
const axeTopRect = [40, 35, 200, 0, colorEnum.grey];
const playerBaseRect = [100, 100, 100, CANVAS_HEIGHT - 100 - groundBaseRect[1], colorEnum.lightblue];

const treeBaseWidth = 180;
const axeBaseWidth = 40;

canvas.imageSmoothingEnabled = false;

sessionStorage.setItem('score', woodMined);
console.log('local-gamethread-init.js end');
