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
        for(var i = Math.floor(num/2); i< num-1 ;i++){
           if(maxProduct<(num^i)*i || maxProduct== (num^i)*i){
               maxProduct= (num^i)*i;
               continue;
           }
           else{
               break;
           }
        }
        console.log("\n"+maxProduct)
    }
}