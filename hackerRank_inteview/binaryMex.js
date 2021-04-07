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
function findSubSequences(str) {
    let set = new Set();
    var len = str.length,
        output,
        counter = 0;
    for (var i = 1; i < Math.pow(2, len); i++) {
        output = '';
        for (var j = 0; j < len; j++) {
            if (i & (1 << j)) {
                output += str[j];
            }
        }
        counter++;
        set.add(parseInt(output,2));
    }
     let a = [...set]
     a.sort((a,b) => a - b)

    return new Set(a);
}

function mex(str){
   
    let temp = 0;
    let s = findSubSequences(str);

    while(s.has(temp)){
        temp++;
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
