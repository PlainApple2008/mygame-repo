console.log('test-script.js start');


var x;

function init() {
  x = 0;
}


function run() {
  focus(x);
  x++;
  requestAnimationFrame(run);
}

init();
run();
console.log('test-script.js end');
