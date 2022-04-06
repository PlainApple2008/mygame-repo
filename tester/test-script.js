console.log('test-script.js start');

class Entity {
  constructor(width, height, x = 0, y = 0) {
    this.width = width;
    this.height = height;
    this.posx = x;
    this.posy = y;
  }

  collides(entity) {
    if (this.posx < entity.posx + entity.width &&
      this.posx + this.width > entity.posx &&
      this.posy < entity.posy + entity.height &&
      this.posy + this.height > entity.posy) {
      return true;
    }
    return false;
  }
}

const canvas = document.getElementById('tester-canvas').getContext('2d');
const b1 = document.getElementById('btn1');
const b2 = document.getElementById('btn2');
const b3 = document.getElementById('btn3');
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;
var Player;
var Ground;
var Tree;
var Axe;

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

  Player = new Entity(40, 75);
  Ground = new Entity(CANVAS_WIDTH, 93, 0, CANVAS_HEIGHT - 93);
  Tree = new Entity(35, 145, (CANVAS_WIDTH / 2) + 30, CANVAS_HEIGHT - Ground.height - 145)
  Axe = new Entity(10, 65);

  canvas.imageSmoothingEnabled = false;

  canvas.fillStyle = '#3E2222';
  canvas.fillRect(Ground.posx, Ground.posy, Ground.width, Ground.height);
  canvas.fillStyle = 'steelblue';
  canvas.fillRect(Player.posx, Player.posy, Player.width, Player.height);
  canvas.fillStyle = '#6E3B00';
  canvas.fillRect(Tree.posx, Tree.posy, Tree.width, Tree.height);
  canvas.fillStyle = '#FF961D';
  canvas.fillRect(Axe.posx, Axe.posy, Axe.width, Axe.height);
  
}

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
  canvas.fillText('totalWoodYouHave: ' + woodMined,0,20,400);
  
  focus(
    'touch1: x' + tx1 + ', y' + ty1 + ', isActive: ' + t1a +
    '<br>touch2: x' + tx2 + ', ' + ty2 + ', isActive: ' + t2a +
    '<br>touchInB1: ' + tngb1 +
    '<br>touchInB2: ' + tngb2 +
    '<br>touchInB3: ' + tngb3 +
    '<br>woodMined: ' + woodMined);
  requestAnimationFrame(run);
}

init();
run();
//console.log(canvas);
console.log('test-script.js end');
