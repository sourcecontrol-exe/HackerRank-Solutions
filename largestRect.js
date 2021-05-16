'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'largestRectangle' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY h as parameter.
 */

function largestRectangle(h) {
   let tail = h.length;
   let head = 0;
   let k = h.length;
   let max = 0;

   while(head<tail){
       max = Math.max(max, k*(Math.min(...h.slice(head,tail))));
       head++;
       k--;
       console.log(max)
   }
   return max
}

function main() {
    

    const n = parseInt(readLine().trim(), 10);

    const h = readLine().replace(/\s+$/g, '').split(' ').map(hTemp => parseInt(hTemp, 10));

    const result = largestRectangle(h);

    console.log(result);
}
