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
function longestIncreasingSubsequence1(arr) {
 
 let dp = new Array(arr.length).fill(1);
     
     for(var i = 1 ; i<arr.length;i++){
         for(var j = 0; j<i ;j++){
             if(arr[i]>arr[j] && dp[j]>=dp[i]){
             dp[i] = dp[j] +1;
             }
         }
     }
     console.log(dp)
     return (Math.max(...dp));
}


function recursive(arr,pos,lastnum){
    if (pos>=arr.length) return 0;

    let t1 =0;
    if(arr[pos] > lastnum){
        t1= 1 + recursive(arr,pos+1,arr[pos])
    }
    let t2 = recursive(arr,pos+1, lastnum)
     return Math.max(t1,t2)
}


function longestIncreasingSubsequence(arr){

    let max =0

    for(var i =0; i< arr.length ;i++){
      let temp =  Math.max(recursive(arr,i+1,arr[i]))
      if(temp>max){
          max = temp;
      }
    }
    return max+1;
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
