//🔸🔸🔸🔸 EVENTS 🔸🔸🔸🔸

// In browser-based JavaScript applications, a major part of our code responds to user actions — like:

// Clicking a button
// Hovering over a link
// Typing in a form

// These actions are called events.

//🔸Event-driven programming is a style where parts of your code run in response to events, rather than in a strict top-down order.
// used heavily in node.js

// listen for specific events and register functions that will execute in response to those events so our events will take place callback function fires.

//🔸setuping up our own events-------

//🔸EventEmitter is a class in Node.js it allows us to create, listen for, and handle custom events .

// we have two options :
//  if we wanna create something custom ,we need to extend this class.
// if we want to emit an event as well as listen for it ,then we can create an instance .
// -----------------------------------
// const EventEmitter = require('events');
// ----------------------------------
// Create an instance (object)(BASIC SETUP)
// const customEmitter = new EventEmitter();


// customEmitter.on('response',(name,id)=>{
//     console.log(`data recieved ${id} ${name}`);   
// })
// customEmitter.on('res',(name,id)=>{
//     console.log(`some other name here ${name} ${id} `);   
// })

// customEmitter.emit('response',"John",1)
// customEmitter.emit('res',"cena",1)

// --------------------------------

//🎯IMPORTANT POINTS -----------------

//🎯objectname.method(event name) 

// syntax :.on and emit method >>>>

//📌M1 : .on(eventName, callback)
// Registers (listens to) an event.

//📌M2 : .emit(eventName, arg1, arg2, ...)
// Emits (triggers)  the event, passing optional data to the listener.

//📌WE Can have as many functions as we would want here that will listen for an event and do some other logic for this event

//📌 ORDER MATTERS : first listen ---> then emit (trigger)

//🎯NOTES :

//📌LISTENER : just a CALLBACK FUNCTION that waits for a specific event to happen.
// When the event happens (emitted), the listener runs automatically.

//📌REGISTER FUNTIONS :
// A register function is a function used to register a listener — meaning you're telling the program:
// "Hey, when this event happens, run this function."
//📌.on() method is the register function.