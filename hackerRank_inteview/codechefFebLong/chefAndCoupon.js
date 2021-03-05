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
        let [d,c] = readLine().split(" ")
        let A = readLine().split(" ");
        let B = readLine().split(" ");
        
        let SUM1 = 0;
        A.map(ele=>{
            SUM1+=parseInt(ele,10)
        })
        
        let SUM2=0 ;
         B.map(ele=>{
             SUM2+=parseInt(ele,10)
         })

         if(SUM1 >=150 && SUM2 >= 150){
             if(2*parseInt(d) > parseInt(c)){
                 console.log("YES")
                 continue;
             }
         }

         else if((SUM1 >= 150 && SUM2 <= 150) || ( SUM1 <=150 && SUM2 >=150 )){
             if(parseInt(d)> parseInt(c)){
                  console.log("YES")
                  continue;
             }
         }

         
         console.log("NO")
         
        
    }
}