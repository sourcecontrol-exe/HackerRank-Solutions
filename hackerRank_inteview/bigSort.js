'use strict';

const fs = require('fs');
const { parse } = require('path');

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

// Complete the bigSorting function below.
function bigSorting(unsorted) {

     unsorted.sort((a,b)=>{
        if(a.length > b.length){
            return 1;
        }
        else if(a.length == b.length){
            for(var i =0;i<a.length;i++){
                let charAtA= parseInt(a[i],10);
                let charAtB = parseInt(b[i],10);

                if(charAtA > charAtB){
                    return 1;
                }
                else if( charAtA < charAtB){
                    return -1;
                }
            }
            return 0;
        }
        else{
            return -1;
        }
     })
     console.log(unsorted)
     return unsorted

}

function main() {
    

    const n = parseInt(readLine(), 10);

    let unsorted = [];

    for (let i = 0; i < n; i++) {
        const unsortedItem = readLine();
        unsorted.push(unsortedItem);
    }

    let result = bigSorting(unsorted);

    console.log(result)

    //ws.end();
}
