// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('./data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');
//     console.log(inputString)
//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// Complete the birthday function below.
function birthday(s, d, m) {
    if(s.length < m) {
        return 0;
    }
    let result = 0 
     let i
    for(i=0 ; i<=(s.length - m); i++){
        let tempArr=[]
        let temp = 0
        while (temp!=m){
            tempArr.push(s[i + temp])
            temp++
        }
        let sum = 0 
        tempArr.map(ele=>{
            sum = sum + ele
        })
        console.log(tempArr)
        if (sum == d) 
            result++ 
       
    }
     console.log(result)
}
 birthday([2,2,1,3,2],4,2)
 
// function main() {
//     //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const n = parseInt(readLine().trim(), 10);

//     const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

//     const dm = readLine().replace(/\s+$/g, '').split(' ');

//     const d = parseInt(dm[0], 10);

//     const m = parseInt(dm[1], 10);

//     const result = birthday(s, d, m);

//     console.log(result)

//     // ws.write(result + '\n');

//     // ws.end();
// }

