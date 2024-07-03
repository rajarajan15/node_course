function add(a,b){
    return a+b
}

module.exports={
    addition:add
}

// child processes

const cp = require('child_process')

//cp.execSync('calc')

//cp.execSync('start chrome https://docs.npmjs.com/cli/v10/commands/npm')

const os = require('os')

console.log(os.arch())
console.log(os.platform())
console.log(os.networkInterfaces())
console.log(os.cpus())
console.log(os.totalmem())
console.log(os.freemem())