console.log('local-init.js start');

const b1 = document.getElementById('btn1');
const canvasInit = document.createElement('canvas');

canvasInit.id = 'canvas';
canvasInit.width = window.innerWidth;
canvasInit.height = window.innerHeight - 150;

document.body.insertBefore(canvasInit, b1);

const canvas = canvasInit.getContext('2d');
const b2 = document.getElementById('btn2');
const b3 = document.getElementById('btn3');
var WINDOW_WIDTH = window.innerWidth;
var WINDOW_HEIGHT = window.innerHeight;
var CANVAS_WIDTH = canvasInit.width;
var CANVAS_HEIGHT = canvasInit.height;

window.addEventListener('resize', function() {
  canvasInit.width = window.innerWidth;
  canvasInit.height = window.innerHeight - 150;
  CANVAS_WIDTH = window.innerWidth;
  CANVAS_HEIGHT = window.innerHeight - 150;
  WINDOW_WIDTH = window.innerWidth;
  WINDOW_HEIGHT = window.innerHeight;
  woodMined = Number.parseInt(sessionStorage.getItem('score'));
});

window.addEventListener('reset',function() {
  sessionStorage.setItem('score', woodMined);
  woodMined = Number.parseInt(sessionStorage.getItem('score'));
});

/*
const directionEnum = {
  'none': 0,
  'northwest': 1,
  'north': 2,
  'northeast ': 3,
  'west': 4,
  'east': 5,
  'southwest': 6,
  'south': 7,
  'southeast ': 8
};

const entityTypeEnum = {
  'block': 0,
  'item': 1,
  'mob': 2
}*/

const colorEnum = {
  // Pure
  black: "#000000",
  white: '#FFFFFF',
  purered: '#FF0000',
  puregreen: '#00FF00',
  pureblue: '#0000FF',
  pureyellow: '#FFFF00',
  // brown
  brown: '#A35600',
  lightbrown: '#C57800',
  dimbrown: '#904F00',
  darkbrown: '#643700',
  // green
  green: '#00CB0B',
  lightgreen: '#00EA0C',
  dimgreen: '#009F08',
  darkgreen: '#005600',
  // blue
  blue: '#1E90FF',
  lightblue: '#87CEFA',
  dimblue: '#4682B4',
  darkblue: '#000080',
  // grey
  grey: '#C0C0C0',
  lightgrey: '#D3D3D3',
  dimgrey: '#A9A9A9',
  darkgrey: '#808080'
};
/*
const styleFlagEnum = {
  'clear': 0,
  'fill': 1,
  'stroke': 2
}
const spriteMemberEnum = {
  'w': 0,
  'h': 1,
  'x': 2,
  'y': 3,
  'c': 4,
  's': 5
}*/
var tx1 = 0;
var ty1 = 0;
var tx2 = 0;
var ty2 = 0;
var t1a = false;
var t2a = false;
var tngb1 = false;
var tngb2 = false;
var tngb3 = false;
/*
var player;
var ground;
var tree;
var axe;

var woodMined;
var treeExists;
var playerHoldingTool;
var playerUsingTool;*/

function addHandler1(element) {
  element.ontouchstart = function(ev) {
    ev.preventDefault();
    if (!(ev.touches.length >= 2 && ev.targetTouches.length >= 2)) {
      tx1 = Math.round(ev.targetTouches[0].pageX);
      ty1 = Math.round(ev.targetTouches[0].pageY);
      t1a = true;
    }
  };
  element.ontouchmove = function(ev) {
    ev.preventDefault();
    if (!(ev.touches.length >= 2 && ev.targetTouches.length >= 2)) {
      tx1 = Math.round(ev.targetTouches[0].pageX);
      ty1 = Math.round(ev.targetTouches[0].pageY);
      t1a = true;
    }
  };
  element.ontouchcancel = function(ev) {
    ev.preventDefault();
    if (!(ev.touches.length >= 2 && ev.targetTouches.length >= 2)) {
      tx1 = 0;
      ty1 = 0;
      t1a = false;
    }
  };
  element.ontouchend = function(ev) {
    ev.preventDefault();
    if (!(ev.touches.length >= 2 && ev.targetTouches.length >= 2)) {
      tx1 = 0;
      ty1 = 0;
      t1a = false;
    }
  };
}

function addHandler2(element) {
  element.ontouchstart = function(ev) {
    ev.preventDefault();
    if (!(ev.touches.length >= 2 && ev.targetTouches.length >= 2)) {
      tx2 = Math.round(ev.targetTouches[0].pageX);
      ty2 = Math.round(ev.targetTouches[0].pageY);
      ta = true;
    }
  };
  element.ontouchmove = function(ev) {
    ev.preventDefault();
    if (!(ev.touches.length >= 2 && ev.targetTouches.length >= 2)) {
      tx2 = Math.round(ev.targetTouches[0].pageX);
      ty2 = Math.round(ev.targetTouches[0].pageY);
      t2a = true;
    }
  };
  element.ontouchcancel = function(ev) {
    ev.preventDefault();
    if (!(ev.touches.length >= 2 && ev.targetTouches.length >= 2)) {
      tx2 = 0;
      ty2 = 0;
      t2a = false;
    }
  };
  element.ontouchend = function(ev) {
    ev.preventDefault();
    if (!(ev.touches.length >= 2 && ev.targetTouches.length >= 2)) {
      tx2 = 0;
      ty2 = 0;
      t2a = false;
    }
  };
}

function touchInButton(element, tx, ty) {
  if (tx >= element.offsetLeft &&
    tx < element.offsetLeft + element.offsetWidth &&
    ty >= element.offsetTop &&
    ty < element.offsetTop + element.offsetHeight) {
    return true;
  }
  return false;
}

function fillRect(entity) {
  canvas.fillStyle = entity[4];
  canvas.fillRect(entity[2], entity[3], entity[0], entity[1]);
}
/*
function strokeRect(entity) {
  canvas.strokeRect(entity.posx, entity.posy, entity.width, entity.height);
}
*/
function setfillStyle(color) {
  canvas.fillStyle = color;
}
/*
function setstrokeStyle(color) {
  canvas.strokeStyle = color;
}
*/
function collidesRect(rect1, rect2) {
  if (rect1[2] < rect2[2] + rect2[0] &&
    rect1[2] + rect1[0] > rect2[2] &&
    rect1[3] < rect2[3] + rect2[1] &&
    rect1[3] + rect1[1] > rect2[3]) {
    return true;
  }
  return false;
}
/*
function fillEntity(entity, color) {
  setfillStyle(color);
  fillRect(entity);
}

function strokeEntity(entity, color) {
  setstrokeStyle(color);
  strokeEntity(entity);
}

function minimalize(result) {
  return (result == 0) ? 1 : result;
}

function renderEntity(gameEntity) {
  var counter = 0;
  var w, h, x, y, c;
  for (let i = 0; i < minimalize(gameEntity.sprite.length / 6); i++) {
    w = gameEntity.sprite[counter];
    counter++;
    h = gameEntity.sprite[counter];
    counter++;
    x = gameEntity.sprite[counter];
    counter++;
    y = gameEntity.sprite[counter];
    counter++;
    c = gameEntity.sprite[counter];
    counter++;
    switch (gameEntity.sprite[counter]) {
      case styleFlagEnum.clear:
        canvas.clearRect(w, h, x, y);
        break;
      case styleFlagEnum.fill:
        canvas.fillStyle = c;
        canvas.fillRect(x, y, w, h);
        break;
      case styleFlagEnum.stroke:
        canvas.strokeStyle = c;
        canvas.strokeRect(w, h, x, y);
        break;
    }
    counter++;
  }
  setfillStyle('black');
}*/

console.log('local-init.js end');
