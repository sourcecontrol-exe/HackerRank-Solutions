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

// Complete the longestCommonSubsequence function below.
function longestCommonSubsequence(a, b) {

   let ar=new Array(a.length+1);
   for(let i=0;i<=a.length;i++)
        ar[i]=(new Array(b.length+1)).fill(0);

    for(let i=1;i<=a.length;i++){
        for(let j=1;j<=b.length;j++){
            if(a[i-1]===b[j-1]){
                ar[i][j]=1+ar[i-1][j-1];
            }
            else{
                ar[i][j]=Math.max(ar[i][j-1],ar[i-1][j]);
            }
                
        }
    }
    let n = a.length;
    let m = b.length;

    let result=[];

    while(n>0 && m > 0){
        if(a[n-1] == b[m-1]){
            result.push(a[n-1]);
            n--;
            m--;
        }
        else{
            if(ar[n-1][m]>ar[n][m-1]){
                n--;
            }
            else{
                m--;
            }
        }
    }
    
    return(result.reverse())
}

function main() {
    

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().split(' ').map(bTemp => parseInt(bTemp, 10));

    let result = longestCommonSubsequence(a, b);

    
}
