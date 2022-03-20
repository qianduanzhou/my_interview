onconnect = function(e) {
  var port = e.ports[0];
  /** start方式 */
  // port.start();
  // port.addEventListener('message', function(e) {
  //   console.log('message', e)
  //   var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  //   port.postMessage(workerResult);
  // });

  /** onmessage方式 */
  port.onmessage = function(e) {
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    port.postMessage(workerResult);
  }
}
onerror = function(e) {
  console.log('onerror', e)
}