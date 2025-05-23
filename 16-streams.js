// 🔸🔸🔸🔸 STREAMS 🔸🔸🔸🔸

// Streams in Node.js are objects that let us read data from a source or write data to a destination in a continuous fashion, i.e., chunk by chunk (not all at once).

// TYPES OF STREAMS ---------

//🔸Writeable - used to write data sequentially.

//🔸Readable - used to read data sequentially.

//🔸Duplex - used to both read and write data sequentially.

//🔸Transform - data can be modified when writing or reading.

// stream extend event emitter class :
// which simply means that we can use events like data and on streams

// ========================================

// for reading and writing bigger files(in size) we use streams

// code start ------------------------------

// const {createReadStream} = require('fs')

// const stream = createReadStream('./content/big.txt');


// stream.on('data',(result)=>{
//     console.log(result);   
// })
// stream.on('error' ,(err)=>{console.log(err);
// } )

// code end--------------------------

// dafault  = 64kb  (size of buffer)
// last buffer - remainder

// highWaterMark = control size
// const stream = createReadStrem('./content/big.txt',{highWaterMark : 90000})
// const stream = createReadStream('./content/big.txt', {enoding : 'utf-8'})

// =======================================