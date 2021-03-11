'use strict';
 
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

        let [row,col, X] = readLine().split(" ");
        let arrA = new Array(parseInt(row));

        for(var i =0; i< arrA.length ;i++){
            arrA[i] = readLine().split(" ").map(ele =>{return parseInt(ele)});
        }
         let arrB = new Array(parseInt(row));

         for(var i =0 ;i< arrA.length; i++){
             arrB[i] = readLine().split(" ").map((ele) =>{return parseInt(ele)});
             
         }
        console.log(arrA,arrB)
    }
}