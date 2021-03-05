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
         let numberofSeason = parseInt(readLine(),10)
        
         let episodeLengths = readLine().split(" ");
        
         let sum = 0;
         while(numberofSeason--){
            let episodes = readLine().split(" ")

            for(var i =1; i< episodes.length ; i++){
                if(i == 1){
                    sum+=parseInt(episodes[i])
                }
                else{
                    sum+= parseInt(episodes[i])- parseInt(episodes[0])
                }
            }
         }

         console.log(sum)
    }
}