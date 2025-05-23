const path = require('path')
console.log(path.sep);

const filepath = path.join('./content','subfolder','test.txt')
console.log(filepath);

const base = path.basename(filepath)
console.log(base);



const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);

// path.resolve :
// it returns an absolute path
// it accepts a sequence of path or path segments and resolve it into an absolute path.