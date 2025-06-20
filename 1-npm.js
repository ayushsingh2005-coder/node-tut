
//NPM(Node Package Manager)

// npm enables us to do three things:
// 1.reuse our own code in other project
// 2.use code written by other developers
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