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
    let n = parseInt(readLine(), 10);
     while(n--){
        let num = parseInt(readLine(),10)
        let d = Math.ceil(Math.log2(num))
        
        let range = Math.pow(2,d)
        console.log(range,d)
        let maxProduct = 0;
        for(var i = num-1; i> 1 ;i--){
            maxProduct= Math.max(maxProduct,(num^i)*i)
             console.log((num^i).toString(10)+ " i "+i.toString(10) , "max"+ maxProduct, ((num^i)*i))
        }
        console.log("\n"+maxProduct)
    }
}