console.log('gamethread.js start');

function run() {
  focus('function run called');
  requestAnimationFrame(run);
}

run();
console.log('gamethread.js end');

