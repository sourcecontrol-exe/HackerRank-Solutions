'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n');    
    main();   
});

function readLine(){
    return inputString[currentLine++];
}
/*
1 2 4 
1 3 5 7
  2 6
    4
    
*/
function subseq(arr, res = new Set(), index =0, sum = 0){
	if(sum in res) return;
	if(index == arr.length){
		res.add(sum);
		return;
	}
	subseq(arr, res, index+1, sum+arr[index])
	subseq(arr, res, index+1, sum);
	return [...res];
}

function main(){
	let test = parseInt(readLine(),10);
	while(test--){
		let n = parseInt(readLine(),10);
		let arr = readLine().split(" ").map(ele => parseInt(ele));
		let workingArr = subseq(arr);
		workingArr.sort((a,b)=> a-b);
		let ans = -1;
		let iter = 0;
		while(iter == workingArr[iter]){
			iter++;
		}
		console.log(iter)
	}
	return;
}