'use strict';


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the twoSubsequences function below.
 */
 function twoSubsequences(x, r, s) {
  let sum =0
   let set = new Set(x);
    let low = 0;
    let high = x.length-1;
    x=x.sort((a,b) => a-b);

    console.log(x)
   while(low<high){

    if(x[low] == Math.abs((s-r)/2) && x[high] == (r+s)/2){
        sum++;
        low++;
    }
    else if(x[high] > (r+s)/2){
        high--;
    }
    else if(x[low] <  Math.abs((s-r)/2)){
        low++;
    }

   }
    
    return sum 

}

function main() {
    

    const mrs = readLine().split(' ');

    const m = parseInt(mrs[0], 10);

    const r = parseInt(mrs[1], 10);

    const s = parseInt(mrs[2], 10);

    const x = readLine().split(' ').map(xTemp => parseInt(xTemp, 10));

    let result = twoSubsequences(x, r, s);

    console.log('\n',result)
}

/*
100 2000 1000
677 179 362 1628 1863 1495 1601 451 1801 1443 1810 111 638 258 1568 946 263 524 115 491 1787 925 1125 310 1290 1016 1262 1293 1998 236 1218 1315 1443 1237 1385 547 825 1030 1727 1556 984 1878 1981 272 1731 1753 56 165 1887 1969 169 1579 1222 276 1341 1623 1335 559 1022 1343 1617 203 1233 511 224 111 1857 1500 838 1814 300 1671 1614 835 1228 1445 909 1330 537 1148 1593 1505 173 1680 1631 47 1353 1615 1920 1523 1558 1785 44 1328 878 1972 1986 1159 891 1343
*/