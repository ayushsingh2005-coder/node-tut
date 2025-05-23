// http ...

const http = require('http');

const server = http.createServer((req,res) =>{
    console.log(req);
    
    if(req.url ==='/'){
        res.end('welcome to ourn home page')
        return;
    

    }
    if(req.url === '/about'){
        res.end('here is the short note');
        return;
  

    }
    res.end(`<h1>oops!<h1><p>we can't seem to find the page you are looking for<p>
    <a href='/'>back home</a>`);
})

server.listen(5000)

// creating the server using create server method which require a callback with two parameter(req,res)

// req parameter represents the incoming request.an object containing all information about the incoming request from the browser/client.

// res is the response we are sending back.an object that you use to send data back to the browser.