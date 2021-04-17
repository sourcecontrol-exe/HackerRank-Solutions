'use strict';



process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function legoBlocks(n, m) {

    if(n == 0 && m == 0) return 1;
    
    if(n > 0 && m == 0) return legoBlocks(n-1, m);

    if(n< 0 || m < 0 ) return 0;

    
    

}

function main() {
    

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nm = readLine().split(' ');

        const n = parseInt(nm[0], 10);

        const m = parseInt(nm[1], 10);

        let result = legoBlocks(n, m);

        
    }

    
}
