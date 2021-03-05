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
    let testCases = parseInt(readLine(),10)
    while(testCases--){
        let count = 0;
        let arr = readLine().split("")
        for(var i = 0; i<arr.length ;i++){
            if(arr[i]== "1"){
                count++;
                while(arr[i+1] == "1"){
                    i++
                }
            }
        }
        console.log(count)
    }
}