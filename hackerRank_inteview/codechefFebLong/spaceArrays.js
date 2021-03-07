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
        let n = parseInt(readLine(),10)
       let arr= readLine().split(" ").map(ele =>{
           return (parseInt(ele))
       })
       arr.sort((a,b)=>{
           if(a-b>0){
               return 1
           }
           else{
               return -1
           }
       })
       let sum = 0;
       let ans ="";
       for(var i =0;i < arr.length ;i++){
            if(arr[i] > (i+1)){
                ans = "Second";
                break;
            }
            sum+= Math.abs(arr[i]-(i+1))
       }
       if(sum%2==0 && ans == ""){
           ans = "Second";
       }
       else if(ans==""){
            ans = "First"
       }
        console.log(ans)
    }
}