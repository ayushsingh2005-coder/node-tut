//🔶GLOBALS - NO WINDOW !!!!🔶

// __dirname  - path to current directory
// __filename - filename
// require(parameter)    - function to use modules (Common JS)
// module     - info about current module(file)
// process    - info about env(environment) where the program is being executed.

// Note :there are more globles variable
// =============================


// console.log(__dirname);
// setInterval(() => {
//     console.log(`hello world`);
// },1000).

// ===========================
// 🔶 MODULES 🔶

// CommonJs,in node every file is module(by default)
// encapsulated code (only share minimum)

// const secret = 'SUPER SECRET'
// const john ="john"
// const peter = 'peter'

// const sayHi = (name) =>{
//     console.log(`hello there ${name}`);
// }

// 🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸

// const names = require('./Names');
// console.log(names);

// const sayHi= require('./utils');
// console.log(func);

// const data = require('./alternative-flavour');
// console.log(data);

//🔸use the below code when you export the function as function
// sayHi(`susan`);
// sayHi(names.john);
// sayHi(names.peter);

//🔸use this when we have exported the function as an object
// sayHi.sayHi('susan');
// sayHi.sayHi(names.john);
// sayHi.sayHi(names.peter);

//🔸we can also use destructing to do the above task

// -------------------------------
// mind-greanade file content here .
// if we have a function inside module that we invoke ,the code will run even though we didn't assign it to variable .
// require('./mind-grenade'); //result =15

// ===============================

// Built-in Modules 🔶
// 1.OS ---->os-module.js
// 2.PATH 
// 3.FS
// 4.HTTP


//NPM(Node Package Manager)

// npm enables us to do three things:
// 1.reuse our own code in other project
// 2.use code wrutten by other developers
// 3.share our own solutions with other developers

// Note:
// a package is a folder that contains a js code.--->> also known as module or dependencies

// npm - global command,comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName> (windows)

// -------package.json ------------
// package.json - manifest file(stores important info about project/package)'
// manual approach(created package.json in the roots,create properties etc)
// npm init (step by step , press enter to skip)
// npm init -y (everything default)


// const _ = require('lodash');
// const { EventEmitter } = require('stream');

// const items = [1,[2,[3,[4]]]]
// const newItems = _.flattenDeep(items);
// console.log(newItems);

//  _ (which is a common naming convention).

// Lodash is a popular JavaScript utility library that provides a lot of helpful functions to work with:

// Arrays
// Objects
// Strings 
// Numbers
// Collections
// And more...

// package.json is the metadata file that sits at the root of any Node.js project. It tells:

// what your project is,

// which packages it uses,

// how to run it,

// for more info visit nodesource website

// -------------------------------
//  CORE CONCEPTS 

// EVENT LOOP 
// ASYNC PATTERNS
// EVENTS EMITTER 
// STREAMS 
// ------------------------------

// 1.EVENT LOOP 

// the event loop is what allows Node.js to perform non-blocking I/O operations -despite the fact that JS is single threaded - by offloading operations to the system kernel whenever possible 

// 💡 Blocking I/O vs. Non-Blocking I/O

// Feature                                           Blocking I/O	                                      Non-Blocking I/O

// Behavior	                         Waits (blocks) until the task is done	               Does not wait, continues execution
// Example language	              Java (by default), Python (without asyncio)	           Node.js, Go, JavaScript in browsers
// Execution style	                                   Synchronous	                                         Asynchronous
// Scalability	                                Poor for high concurrency	                   Great for handling many requests
// Use case	                              Simple scripts or CPU-bound tasks	        Web servers, APIs, real-time apps (chat, etc.)


//🧠Node.js is single-threaded at the JavaScript level but multi-threaded underneath.
// ----------------------------------


//🔥 🔥  "Modern File System Operations in Node.js Using Promises and Async/Await"🔥 🔥 

// ------------------------------------
// --- Manual approach ------🔥 This is helpful when dealing with older libraries or APIs that don’t support Promises.
// ------------------------------------

// const {readFile} = require('fs');

// This is a function that wraps readFile inside a Promise so that it can be used with async/await.---comment---

// const getText = (path) => {
//     return new Promise ((resolve,reject) =>{
//     readFile(path,'utf-8' ,(err,data)=>{
//     if(err){
//        reject(err)
//     }
//     else{
//        resolve(data);
        
//     }
// })
//     })
// }


// const start = async () =>{
//     try {
//         const first = await getText('./content/first.txt');
//         const second = await getText('./content/second.txt');
//         console.log(first,second); 
//     } catch (error) {
//         console.log(error);
        
//     }  
// }

// start()

// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch((err) => console.log(err))



// ---------------------------------------------
// method 2:using built-in utility module :🔥 
// ---------------------------------------------

// const {readFile,writeFile} = require('fs');

// const util = require('util');
// const readFilePromise =util.promisify(readFile);
// const writeFilePromise =util.promisify(writeFile);


// const start = async () =>{
//     try {
//         const first = await readFilePromise('./content/first.txt','utf-8');
//         const second = await readFilePromise('./content/second.txt','utf-8');

//         await writeFilePromise('./content/result-mind-grenade.txt',`this is awesome : ${first} ${second}`)

//         console.log(first,second); 
//     } catch (error) {
//         console.log(error);
        
//     }  
// }

// start()

//-------- automated method -------🔥 

// const { readFile } = require('fs/promises');

// const start = async () => {
//     try {
//         const data = await readFile('./content/first.txt', 'utf-8');
//         console.log(data);
//     } catch (err) {
//         console.error(err);
//     }
// };

// start();

// ------------------------------------------
// more cool method :mind-grenade :🔥 
// ------------------------------------------
// const {readFile,writeFile} = require('fs').promises;


// const start = async () =>{
//     try {
//         const first = await readFile('./content/first.txt','utf-8');
//         const second = await readFile('./content/second.txt','utf-8');
        
//         await writeFile('./content/result-mind-grenade.txt',`this is awesome : ${first} ${second}`,{flag : 'a'})
        
//         console.log(first,second); 
//     } catch (error) {
//         console.log(error);
        
//     }  
// }

// start()

// -----------------------------------

// 🔸🔸🔸 EVENTS 🔸🔸🔸🔸

// In browser-based JavaScript applications, a major part of your code responds to user actions — like:

// Clicking a button
// Hovering over a link
// Typing in a form

// These actions are called events.

//🔸Event-driven programming is a style where parts of your code run in response to events, rather than in a strict top-down order.
// used heavily in node.js

// listen for specific events and register functions that will execute in response to those events so our events will take place callback function fires.

//🔸setuping up our own events

//🔸EventEmitter is a class in Node.js it allows us to create, listen for, and handle custom events .

const EventEmitter = require('events');






