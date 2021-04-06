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

function isSubsequence(s,t){
    let index = 0;
    for(let i =0 ;i < t.length ; i++){
        if(s[index] == t[i]){
            index++;
        }
    }
    if(index==s.length){
        return true
    }
    else {
         return false
    }
}

function mex(str){
    let set = new Set();
    let temp = -1;
    let result = true;
     while(result == true && temp <= Number.MAX_SAFE_INTEGER){
        temp++
        result = isSubsequence(temp.toString(2),str);
     }
     return temp.toString(2);
}


function main() {
    

    let n = parseInt(readLine(), 10);
    while(n--){
        let s = readLine();
        
        let ans = mex(s);
        console.log(ans)
    }
}
