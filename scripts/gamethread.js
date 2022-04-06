console.log('gamethread.js start');

function run() {
  focus(x);
  x++;
  requestAnimationFrame(run);
}

run();
console.log('gamethread.js end');

