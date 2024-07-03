/*import os from 'os'
import {add, sub, mul, div} from './export'
console.log(add(2,3))
*/

//import { readFile } from 'node:fs'

const fs = require('fs')
const path = require('path')
 
/*
fs.writeFile(path.join(__dirname, 'sample.txt'),'Goodu morning',(err)=>{
    if(err) throw err
    console.log('loaded to the file')
    fs.appendFile(path.join(__dirname, 'sample.txt'),'\n\nvanakkam Sir', (err)=>{
        if(err) throw err
        console.log('append complete')
    })
    fs.rename(path.join(__dirname,'sample.txt'),'modified.txt',(err)=>{
        if(err) throw err;
        console.log('rename complete')
    })
})
*/
//To overcome callback hell 

/*const fsPromises = require('fs').promises
const fileOps = async ()=> {
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'modified.txt'),'utf8')
        console.log(data)
        await fsPromises.writeFile(path.join(__dirname,'modified.txt'),'Maalai Vanakkam iyya')
        await fsPromises.unlink(path.join(__dirname,'delete.txt'))
    }
    catch(err){
        console.error(err)
    }
}

fileOps()
*/

/*const rs = fs.createReadStream(path.join(__dirname,'bigfile.txt'),{encoding:'utf8'})
const ws = fs.createWriteStream(path.join(__dirname,'new_bigfile.txt'))

ws.on('data', (datachunk)=>{
    ws.write(datachunk)
})*/
/*
if(fs.existsSync('./new')){
    fs.mkdir('./new',(err)=>{
        if(err) throw err
        console.log('created directory')
    })
        fs.rmdir('./new',(err)=>{
            if(err) throw err
            console.log('removed directory')
        })
*/

setTimeout(()=>{
    console.log('raja')
},3000)

const calc = require('./test.js')

console.log(calc.addition(1,2))

process.on('uncaughtException',(err)=>{
    console.error(`there was an uncaught exception ${err}`)
    process.exit
})

/*fs.mkdir('./new',(err)=>{
    if(err) throw err;
    console.log('directory created')
})*/

fs.rmdir('./new',(err)=>{
    if(err) throw err
    console.log('directory removed')
})