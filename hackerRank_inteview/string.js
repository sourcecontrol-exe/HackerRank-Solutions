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

// Complete the substrings function below.
function substrings(str) {

 let mod = 7+Math.pow(10,9);
 if(str.length <=1) return parseInt(astr,10);

 let startIndex = 0, tempIndex = str.length-1, lastIndex = str.length;

 let result = parseInt(str[str.length-1]);

 while(startIndex<tempIndex){
    let a  = parseInt(str.slice(startIndex,tempIndex)) % mod
    let b = parseInt(str.slice(tempIndex-1,lastIndex)) % mod
    if(startIndex == tempIndex-1){
    result+= (a+b) % mod;
    }
    else{
        result+= (a + b + parseInt(str[tempIndex -1]))
    }
    tempIndex--;
 }
    return (result)

}

function main() {
    

    const n = readLine();

    let result = substrings(n);

    console.log(result)
}
