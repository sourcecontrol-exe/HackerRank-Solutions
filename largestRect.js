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
function rect(start, tail, k,arr){
    return k*(Math.min(...arr.slice(start,tail)));
}


function largestRectangle(h) {
    let maxarea = h.length;

    h.forEach((element,index) => {
        let i = index+1;
        let j = index-1;
        
        let tempArea = element;

        while(i < h.length && h[i]>=element){
            tempArea+=element;
            i++;
        }
        while(j>=0 && h[j]>= element){
            tempArea+=element;
            j--;
        }
        maxarea = Math.max(tempArea, maxarea);
    });
    return maxarea;
}

function main() {
    

    const n = parseInt(readLine().trim(), 10);

    const h = readLine().replace(/\s+$/g, '').split(' ').map(hTemp => parseInt(hTemp, 10));

    const result = largestRectangle(h);

    console.log(result);
}
