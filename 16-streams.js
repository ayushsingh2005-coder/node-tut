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

// HANDLING USER REQUEST AND SENDIND THE DATA IN CHUNKS ALONG WITH READING IN CHUNKS 

var http = require('http')   // Step 1: Load HTTP module
var fs = require('fs')       // Step 2: Load File System module

// Step 3: Create the server
http.createServer(function(req, res) {

    // Step 4: Open a file stream to read the big.txt file
    const fileStream = fs.createReadStream('./content/big.txt', 'utf-8');

    // Step 5: When the file is ready to read
    fileStream.on('open', () => {
        // Send the file piece-by-piece to the person who made the request
        fileStream.pipe(res)
    });

    // Step 6: If there's an error (like file not found)
    fileStream.on('error', (err) => {
        res.statusCode = 500; // Server error
        res.end(`Error reading file: ${err.message}`);
    });

})
.listen(5000, () => {
    // Step 7: Show a message that the server is running
    console.log('Server running at http://localhost:5000/');
});

// .pipe() connects two streams — it reads from one and writes to another, chunk by chunk, efficiently.
