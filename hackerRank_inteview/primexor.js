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

function isPrime(n){
    for(let i = 2; i<=Math.sqrt(n);i++){
        if(n%i == 0) return false;
    }
    return true;
}


// Complete the primeXor function below.
function primeXor(a) {

    let set  =  new Set()
    let count = 0;
     let dp = []

    for(let i =0 ;i<a.length;i++){
        let dp[i] = a[i];
        if(!set.has(a[i]) && isPrime(dp[i]))
            count++;
        for(let j = i+1;j<a.length ;j++){
            dp[i]^a[j];
            if(isPrime(dp[i]) && !set.has(a.slice(i,j))){
                count++;
                set.add(a.slice(i,j).join(""))
            }
        }
    }


}

function main() {
    
    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine(), 10);

        const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

        let result = primeXor(a);
        console.log(result);
       
    }

   
}
