console.log('helper.js start');
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

const canvas = document.getElementById('canvas').getContext('2d');
const b1 = document.getElementById('btn1');
const b2 = document.getElementById('btn2');
const b3 = document.getElementById('btn3');
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;

var tx1 = 0;
var ty1 = 0;
var tx2 = 0;
var ty2 = 0;
var t1a = false;
var t2a = false;
var tngb1 = false;
var tngb2 = false;
var tngb3 = false;

var Player;
var Ground;
var Tree;
var Axe;

var woodMined;
var treeExists;
var playerHoldingTool;
var playerUsingTool;
console.log('helper.js end');
