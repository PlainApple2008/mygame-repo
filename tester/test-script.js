console.log('test-script.js start');



const canvas = document.getElementById('tester-canvas').getContext('2d');
const b1 = document.getElementById('btn1');
const b2 = document.getElementById('btn2');
const b3 = document.getElementById('btn3');
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;
const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HEIGHT = window.innerHeight;
var player;
var ground;
var tree;
var axe;

var woodMined;
var treeExists;
var playerHoldingTool;
var playerUsingTool;

function init() {

  addHandler1(b1);
  addHandler1(b2);
  addHandler2(b3);

  woodMined = 0;
  treeExists = true;
  playerHoldingTool = true;
  playerUsingTool = false;

  player = new Entity(40, 75);
  ground = new Entity(CANVAS_WIDTH, 93, 0, CANVAS_HEIGHT - 93);
  tree = new Entity(35, 145, (CANVAS_WIDTH / 2) + 30, CANVAS_HEIGHT - ground.height - 145)
  axe = new Entity(10, 65);

  canvas.imageSmoothingEnabled = false;

  fillEntity(ground, '#3E2222');
  fillEntity(player, 'steelblue');
  fillEntity(tree, '#6E3B00');
  fillEntity(axe, 'FF961D');
}

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

init();
run();

console.log('test-script.js end');
