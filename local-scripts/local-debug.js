console.log('local-debug.js start');

function focus(content) {
  document.getElementById('focused-content').innerHTML = content;
}

function debugObject(object) {
  var buffer = "";
  buffer += "[";
  for (var k of Object.keys(object)) {
    buffer += k + ': ' + object[k] + ',<br>';
  }
  buffer += "]";
  document.getElementById('focused-content').innerHTML = buffer;
}
console.log('local-debug.js end');
