importScripts('foo.js'); //引入foo.js
onmessage = function(e) {
  close()
  console.log('Worker: Message received from main script');
  const result = e.data[0] * e.data[1];
  if (isNaN(result)) {
    postMessage('Please write two numbers');
  } else {
    const workerResult = 'Result: ' + result;
    console.log('Worker: Posting message back to main script');
    postMessage(workerResult);
  }
  /** 触发onerror ————*/
  // let obj = null;
  // obj.a = 5;
  /** ————*/
}