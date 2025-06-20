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