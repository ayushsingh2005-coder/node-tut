
app.js is the main file where you can put all the code from any of the file and then write nodemon app.js in your code editor terminal to run the server 
Overview

This Repo provides a comprehensive introduction to Node.js, a JavaScript runtime for building server-side applications. It covers fundamental concepts, built-in modules, asynchronous patterns, event-driven programming, and practical examples like handling HTTP requests and streams.

Key Topics Covered

1. Introduction to Node.js
What is Node.js? A JavaScript runtime for server-side programming.
Browser vs. Server: How Node.js differs from browser-based JavaScript.
REPL: Interactive environment to test JavaScript code.
CLI: Using the command-line interface to run Node.js scripts.
Source Code: Access to the tutorial's source code.

Core Concepts
Globals: Understanding global objects like process, __dirname, __filename.
Modules Setup: Creating and importing modules.
First Module: Writing your first Node.js module.
Alternative Syntax: Using ES6 modules (import/export) vs. CommonJS (require).
Mind Grenade: A challenging concept to deepen understanding.

3. Built-In Modules
OS Module: Accessing operating system information.
Path Module: Handling file paths.
FS Module (Sync): Synchronous file system operations.
FS Module (Async): Asynchronous file system operations.
Sync vs. Async: Comparing synchronous and asynchronous approaches.
HTTP Intro: Introduction to the HTTP module.
HTTP Module (Setup): Creating a basic HTTP server.
HTTP Module (More Features): Adding features like routing and file streaming.

4. Package Management with NPM(in app.js)
NPM Info: What is NPM and how it works.
NPM Command: Common NPM commands (install, init, etc.).
First Package: Installing and using your first NPM package.
Share Code: Sharing code via NPM.
Nodemon: Using nodemon for auto-restarting the server during development.

Uninstall: Removing packages.
Global Install: Installing packages globally.
Package-Lock.Json: Understanding the purpose of package-lock.json.

5. Advanced Topics
Event Loop: How Node.js handles asynchronous operations.
Event Loop Slides & Code Examples: Visual and practical explanations.

Async Patterns:
Blocking code issues
Using Promises
Refactoring to async/await
Node's native async options

Events:
Introduction to event-driven programming
Event Emitter examples
Using Event Emitter with the HTTP module

Streams:
Introduction: Streams in Node.js allow reading from a source or writing to a destination in a continuous fashion, chunk by chunk (not all at once).

Types of Streams:
Writable: Used to write data sequentially.
Readable: Used to read data sequentially.
Duplex: Can both read and write data sequentially.
Transform: Data can be modified while writing or reading.

Streams Extend Event Emitter: Streams can emit events like data, end, error.
Reading Files: Using streams to read large files in chunks.


Additional Info: Streams are useful for handling bigger files efficiently.

HTTP Example: Using streams to send file content in an HTTP response:

const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
  const fileStream = fs.createReadStream('./content/big.txt', 'utf8');

  fileStream.on('open', () => {
    fileStream.pipe(res); // Pipe the file stream to the response
  });

  fileStream.on('error', (err) => {
    res.statusCode = 500;
    res.end('Error reading file: ' + err.message);
  });
}).listen(5000, () => {
  console.log('Server running at http://localhost:5000/');
});


HTTP Request/Response Cycle
HTTP Messages: Understanding request and response structures.
Http Basics: Setting up a basic HTTP server.
Http Headers: Working with HTTP headers.
Http Request Object: Accessing request data.
Http Html File: Serving HTML files.
Http App Example: Building a small HTTP-based application.
