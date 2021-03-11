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

// Complete the fibonacciModified function below.
function fibonacciModified(t1, t2, n, set = {}) {
    if(n == 0) return t1;
    if
    
}

function main() {

    const t1T2n = readLine().split(' ');

    const t1 = parseInt(t1T2n[0], 10);

    const t2 = parseInt(t1T2n[1], 10);

    const n = parseInt(t1T2n[2], 10);

    let result = fibonacciModified(t1, t2, n);

    console.log(result)
}
