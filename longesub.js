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

// Complete the longestIncreasingSubsequence function below.
function longestIncreasingSubsequence(arr) {
 
     let dp = new Array(arr.length).fill(0);
     let itr = 0;
     let temp = 0;
     for(var i =0; i < dp.length ;i++){
         temp = arr[i]
         itr = 1;
         for(var j = i+1 ;j< arr.length ; j++){
             console.log(temp)
             if(arr[j] > temp){
                 itr++;
                 temp = arr[j]
             }
             
         }
         dp[i] = itr;
     }
     console.log(dp)
     return (Math.max(...dp))
}

function main() {
    
    const n = parseInt(readLine(), 10);

    let arr = [];

    for (let i = 0; i < n; i++) {
        const arrItem = parseInt(readLine(), 10);
        arr.push(arrItem);
    }

    let result = longestIncreasingSubsequence(arr);
console.log(result);

}
