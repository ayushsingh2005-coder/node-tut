const sayHi = (name) =>{
    console.log(`hello there ${name}`);
}
module.exports = {sayHi};  //way 1

// if we have multiple things in export file ,use object method with export : way 1 (use curly braces to bind the items as object)

// Way 2:(when we have a single entity)
// module.exports = sayHi; 