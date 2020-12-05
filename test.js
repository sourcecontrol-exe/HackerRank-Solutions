// process.stdin.resume();
// process.stdin.setEncoding('utf8');

// // declare global variables
// var input_stdin = "";
// var chunks = "";
// var input_currentline = 0;

// // standard input is stored into input_stdin
// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });

// // standard input is done and stored into an array
// process.stdin.on('end', function () {
//     chunks = input_stdin.split("\n");
//     start();    
// });

// function start(){
// 	maxcount = chunks.shift();
// 	chunks = chunks.filter(function(e){return e});
	
// 	chunks.forEach(function(val,index) { 
// 		if(maxcount-- >0){
// 			solveProblem(val);
// 		}
// 	});
// }

// function solveProblem(numba) {
// 	var solution = checkfactorial(numba);
// 	console.log(solution);
// }

// function checkfactorial(number) {
// 	var temp = 1;
// 	var sum = 0;
	
// 	while(temp <= number) {
// 		temp = temp*5;
// 		sum = sum + Math.floor(number/temp);
// 	}

// 	return sum;
// }

process.stdin.resume();
process.stdin.setEncoding('utf-8');
var arr = "";
process.stdin.on('data', function(chunk) {
  arr += chunk;
});
process.stdin.on('end', function() {
  arr = arr.split("\n");
  var n = parseInt(arr.shift()); // in order ot get no of test cases
  for(let i=0;i<n;i++){ //loop through no of test cases.
      var a=parseInt(arr[i].split(" ")[0]); //get first no
      var b=parseInt(arr[i].split(" ")[1]);// get second no
     console.log(a+b) //output the result
  }
    
});