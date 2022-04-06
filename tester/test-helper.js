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

console.log('test-helper.js end');
