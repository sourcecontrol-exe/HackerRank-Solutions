'use strict';

const fs = require('fs');

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

// Complete the gridSearch function below.
function gridSearch(G, P) {
    let temp = 0;
    let p1 = 0, p2 = 0;
     let str = "";
    for(var i = 0 ; i< G.length - P.length+1; i++){
        for(var j =0; j<G[i].length - P[0].length+1; j++){
            str = G[i].slice(j, j+P[0].length)
            p1 = i+1;
            temp = 0;
            if(str == P[temp]){
                p1 = i+1;
                temp++;
                while(p1<G.length && temp <=P.length){
                    if(G[p1].slice(j , j+P[temp].length) == P[temp]){
                        console.log(G[p1].slice(j , j+P[0].length),P[temp])
                         p1++;
                         temp++;
                         if(temp==P.length){
                            return "YES";
                         }
                    }
                    else{
                        break;
                    }
                }
            }
        }
    }
    return "NO";
}

function main() {
    
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const RC = readLine().split(' ');

        const R = parseInt(RC[0], 10);

        const C = parseInt(RC[1], 10);

        let G = [];

        for (let i = 0; i < R; i++) {
            const GItem = readLine();
            G.push(GItem);
        }

        const rc = readLine().split(' ');

        const r = parseInt(rc[0], 10);

        const c = parseInt(rc[1], 10);

        let P = [];

        for (let i = 0; i < r; i++) {
            const PItem = readLine();
            P.push(PItem);
        }

        let result = gridSearch(G, P);
        console.log(result)
        
    }

}
