'use strict';

const { readFile } = require("fs");
const { parse } = require("path");

 
process.stdin.resume();
process.stdin.setEncoding('utf-8');
 
let inputString = '';
let currentLine = 0;
 
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});
 
process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    
     main();
});
 
function readLine() {
    return inputString[currentLine++];
}

function main() {
    let test = parseInt(readLine(),10);

    while(test--){

        let n = parseInt(readline(),10);
        let arr = readline().split(" ").map(ele=>{ return parseInt(ele)})
        
        if(arr.length ==2 ){
            console.log(1);
        }
        else{
            
        }
        
    }
}