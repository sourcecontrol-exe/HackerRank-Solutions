'use strict';

const fs = require('fs');

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

// Complete the substringDiff function below.
function substringDiff(k, s1, s2) {
    

}

function main() {
   

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const kS1S2 = readLine().split(' ');

        const k = parseInt(kS1S2[0], 10);

        const s1 = kS1S2[1];

        const s2 = kS1S2[2];

        let result = substringDiff(k, s1, s2);

       
    }

    
}
