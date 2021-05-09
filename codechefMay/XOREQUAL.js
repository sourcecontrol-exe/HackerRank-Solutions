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
 
 
 
function main() {
    var t = parseInt(readLine(), 10);

    while(t--){
        var n = parseInt(readLine(), 10);
        let p = 7+Math.pow(10,9);
        let y = n-1;
        let x = 2;
        let res =1
        while (y > 0)
    {
        if (y & 1)
            res = (res * x) % p;
        y = y >> 1;
        x = (x * x) % p;
    }
     console.log(res)
    }
}
