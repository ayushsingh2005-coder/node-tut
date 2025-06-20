// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})

customEmitter.emit('response', 'john', 34)

// NOTE :
// Node.js provides a built-in module called events.
// EventEmitter is a class inside this module that allows you to create and handle custom events.

// .emit(eventName, arg1, arg2, ...) triggers the 'response' event.
// All the listeners for that event will be executed in order.
// Arguments ('john', 34) are passed to the listeners — similar to function parameters.

// You can attach many listeners to the same event.