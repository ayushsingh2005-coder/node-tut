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


const names = require('./4-Names');
// console.log(names);

const sayHi= require('./5-utils');
// console.log(func);

const data = require('./6-alternative-flavour');

require('./7-mind-grenade')

sayHi(`susan`);
sayHi(names.john);
sayHi(names.peter);
