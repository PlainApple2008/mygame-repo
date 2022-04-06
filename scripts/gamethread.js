console.log('gamethread.js start');

function run() {
  focus('function run called');
 // document.getElementById('debug-focused-content').innerHTML = 'function run called';
  requestAnimationFrame(run);
}

run();
console.log('gamethread.js end');

