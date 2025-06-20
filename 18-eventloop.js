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
