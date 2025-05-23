const os =require('os')

//info about current user
const user = os.userInfo();
console.log(user);

// method returns the system update in seconds
console.log(`the system up time is ${os.uptime()}  `);

const currentos ={
    name:os.type(),
    release: os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem(),

}
console.log(currentos);
