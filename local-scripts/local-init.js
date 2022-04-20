console.log('local-init.js start');

const guiContainer = document.getElementById('gui-container');
const b1 = document.getElementById('btn1');
const b2 = document.getElementById('btn2');
const b3 = document.getElementById('btn3');
const b4 = document.getElementById('btn4');

b3.style.float = 'right';

const canvasInit = document.createElement('canvas');
const canvas = canvasInit.getContext('2d');

canvasInit.width = window.innerWidth;
canvasInit.height = window.innerHeight - 137;

guiContainer.insertBefore(canvasInit, b1);

var canvas_width = canvasInit.width;
var canvas_height = canvasInit.height;
var client_orientation = (screen.availHeight < screen.availWidth) ? 'landscape' : 'portrait';
var refreshAllowed = false;
var pageRefreshed = (
  (window.performance.navigation &&
    window.performance.navigation.type === 1) || window.performance
  .getEntriesByType('navigation')
  .map((nav) => nav.type)
  .includes('reload')
);



const DEFAULT_CANVASWIDTH = 600;
const DEFAULT_CANVASHEIGHT = 400;

window.addEventListener('resize', function() {
  guiContainer.removeChild(canvasInit);
  canvasInit.width = window.innerWidth;
  canvasInit.height = window.innerHeight - 137;
  guiContainer.insertBefore(canvasInit, b1);
  refreshAllowed = true;
});


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
  canvas.fillStyle = entity[4];
  canvas.fillRect(entity[2], entity[3], entity[0], entity[1]);
}

function setfillStyle(color) {
  canvas.fillStyle = color;
}

function collidesRect(rect1, rect2) {
  if (rect1[2] < rect2[2] + rect2[0] &&
    rect1[2] + rect1[0] > rect2[2] &&
    rect1[3] < rect2[3] + rect2[1] &&
    rect1[3] + rect1[1] > rect2[3]) {
    return true;
  }
  return false;
}

function cache(key, value) {
  sessionStorage.setItem(key, value);
}

function store(key, value) {
  localStorage.setItem(key, value);
}

function retrieve(key) {
  return localStorage.getItem(key);
}

function getCache(key) {
  return sessionStorage.getItem(key);
}

function toGameRect(stringValue = '') {
  var outputSquare = [];
  var temp = '';
  var outputCounter = 0;
  var ignoreNumConversion = false;

  if (stringValue != '' && stringValue.startsWith(',') == false) {
    for (let i = 0; i < stringValue.length; i++) {
      if (stringValue[i] === ',' && ignoreNumConversion == false) {
        let t = temp.replace(',', '');
        outputSquare[outputCounter] = Number.parseInt(t);
        temp = '';
        outputCounter++;

      } else if (stringValue[i] === '#') {
        ignoreNumConversion = true;
        temp += stringValue[i];

      } else {
        temp += stringValue[i];
        if (temp.length === 7 && ignoreNumConversion == true) {
          outputSquare[outputCounter] = temp;
          break;
        }
      }
    }
  } else {
    throw 'cannot parse string starting with \',\' to gameSquare';
    return;
  }

  return outputSquare;
}

console.log('local-init.js end');
