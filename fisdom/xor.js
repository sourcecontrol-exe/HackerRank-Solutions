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

function xorEqual(arr){
	if(arr.length == 1) return 0;

	let map = {};
	for(let item of arr){
		if(!map[item]) map[item] = 0;
		map[item]++;
	}
	let set = new Set(arr);

} 
function main() {
    let n = parseInt(readLine(), 10);
     while(n--){
       
	let arr = readLine().split(" ").map(ele=> parseInt(ele));
	let q = parseInt(readLine(),10);
	let res = []
	while(q--){

		let [l,r] = readLine().split(" ").map(ele=> parseInt(ele));
		let ans = xorEqual(arr.slice(l,r+1));
		res.push(ans);
	}
	return res;
	
     }
}