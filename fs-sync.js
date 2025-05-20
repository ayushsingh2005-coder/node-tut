
const {readFileSync,writeFileSync} = require('fs');

console.log('start');

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

// console.log(first,second);

writeFileSync(
    './content/result-sync.txt',`here is the result : ${first},${second}`,
    {flag:'a'}
);
console.log('done with the task');
console.log('starting the next one');

// the problem arises here is time :
// suppose a user first read the file and then it would write a new file and for node it would be difficult if same goes with 10 user,so here we have to go with async approach


// -------------------------------------------------------------------------------------------------------------
//🔸require('fs') returns the FS module object.
//🔸readFileSync is a property of the fs module object, and we're using object destructuring to assign it to a local variable of the same name.
//🔸this is equivalent to :
// const fs = require('fs');
// const readFileSync = fs.readFileSync;
// ------------------------------------------------------------------------------------------------------------
//a new file is created .

//🔸{flag:'a'}  -->> this will handle the file like if file is created it will append the content at the end of the file and if it doesn't exist it will create one and then it add the content inside the file .

//🔸'utf-8' string is the character encoding used to decode the contents of the file.

// -------------------------------
//🔸When reading a file in Node.js:
// -------------------------------
//🔸If we don’t specify any encoding, the file contents will be returned as a Buffer (raw binary data).

//🔸If we specify 'utf-8', Node.js will decode the file's binary data into a human-readable string.

// ----------------------------
//🔸writing a file in nodejs
// ----------------------------

//🔸writeFileSync creates a new file if it doesn't exist and if it exist it will overwrite the contents in that file .

//🔸it requires two parameters:
// 1.filename
// 2.content to add


//🔸The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.

//🔸To use the promise-based APIs:
// import * as fs from 'node:fs/promises';

//🔸To use the callback and sync APIs:
// import * as fs from 'node:fs';



