// 🔸🔸HTTP REQUEST/RESPONSE CYCLE🔸🔸


//            |------------ REQUEST -------------->>>>>>>>>>|                
//            |                                             |
//    HTTP MESSAGES                      DATA             NODE/EXPRESS
//            |                                             |
//            <<<<<<<----- -RESPONSE -----------------------|

//🔸Both requests messages(client --> server) and response messages(server --> client) are called HTTP messages.

// Each HTTP message is structured like this:
// Start Line
// Headers
// (blank line)
// Body (optional)


//🔸START LINE :

//  first line in every HTTP message.
// Types : Request line and Status Line 

// GET /about HTTP/1.1 ->> REQUEST LINE🔸

// GET → Method | /about → Path/URL | HTTP/1.1 → HTTP version

// HTTP/1.1 200 OK ->> STATUS LINE 🔸

// HTTP/1.1 → HTTP version | 200 → Status code (200 = OK, 404 = Not Found, 500 = Server Error) | OK → Status message 

//🔸HEADER :
// key-value pairs that carry meta-information about the message 

//🔸BLANK LINE :
//  separator between the headers and the body of the message.


//🔸BODY : actual data being sent 
// In a request, it's what the client sends (e.g., login form data, JSON).

// In a response, it's what the server sends (e.g., HTML page, JSON, image).

// -------------------- 
// HTTP methods ::::::|
// --------------------
// Method	                    Purpose	                        Has Body?	                    Safe?	                       Idempotent?

// GET	                      Read/fetch data	                 ❌ No	                      ✅ Yes	                          ✅ Yes
// POST	              Submit data / create something	         ✅ Yes	                      ❌ No	                          ❌ No
// PUT	                Replace/Update a resource	             ✅ Yes	                      ❌ No	                          ✅ Yes
// PATCH	           Partially update a resource	             ✅ Yes	                      ❌ No	                          ❌ No
// DELETE	              Remove a resource	                     ❌/✅	                     ❌ No	                         ✅ Yes
// HEAD	            Same as GET but no body returned	         ❌ No	                      ✅ Yes	                          ✅ Yes

// In HTTP, a resource is typically data on the server 
// IDEMPOTENT : making the same request multiple times results in the same outcome on the server — no matter how many times you repeat it.

// GET is the default request

