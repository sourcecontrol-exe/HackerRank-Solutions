'use strict';

const fs = require('fs');
const { waitForDebugger } = require('inspector');

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

// Complete the cost function below.
function cost(arr) {
    let max1=0,max2 =0;

    for(var i=1;i<arr.length; i++){
          let max11 = Math.max(Math.abs(arr[i]-arr[i-1]) + max1, max2+Math.abs(arr[i]-1))
         let max22 = math.max(Math.abs(arr[i-1] - 1)+max1, max2);
         max1 = max11;
         max2 = max22;   
    };
     return Math.max(max1,max2)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const B = readLine().split(' ').map(BTemp => parseInt(BTemp, 10));

        let result = cost(B);

        ws.write(result + "\n");
    }
    ws.end();
}
