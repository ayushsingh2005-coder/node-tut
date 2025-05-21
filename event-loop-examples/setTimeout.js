// started operating system process 
console.log('first')
setTimeout(() =>{
    console.log('second');
    
},0)
console.log('third');
// completed and exited operating systen process

// the order is first -> third -> second as the setTimeout is asynchronous so due to event loop in node.js ,it execute the synchornous code first and then it goes for asynchornous code (offloading principle).