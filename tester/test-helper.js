console.log('test-helper.js start');
var tx1 = 0;
var ty1 = 0;
var tx2 = 0;
var ty2 = 0;
var t1a = false;
var t2a = false;
var tngb1 = false;
var tngb2 = false;
var tngb3 = false;

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
  canvas.fillRect(entity.posx, entity.posy, entity.width, entity.height);
}

function setfillStyle(color) {
  canvas.fillStyle = color;
}

function fillEntity(entity, color) {
  setfillStyle(color);
  fillRect(entity);
}
const objectType = {
  '': 3
};
const directionEnum = {
  'none': 0,
  'northwest': 1,
  'north': 2,
  'northeast': 3,
  'west': 4,
  'east': 5,
  'southwest': 6,
  'south': 7,
  'southeast': 8
};
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
class Player extends Entity {
  constructor(width, height, x = 0, y = 0) {
    super(width, height, x, y);
    this.direction = directionEnum.none;
    this.holdingTool = false;
    this.usingTool = false;
    this.inventory = [];
    this.objectType = 39;
  }

  moveupleft() {

  }
  moveup() {

  }
  moveupright() {

  }
  moveleft() {

  }
  moveright() {}
  movedownleft() {}
  movedown() {}
  movedownright() {}
}

class Leaf_Block {

}

class Wooden_Log_Block {

}

class Wooden_Axe {

}

console.log('test-helper.js end');
