process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')

    main();

});

function main() {
    let testCases = inputString.splice(0,1)
    let str= []
        for( var i =0 ; i < inputString.length ; i++){
            if((i+1)%2===0){
                str.push(inputString[i])
                //let ans = shortestCookingTime(inputString[i])
                //return(ans)
            }
        }
    
    str.forEach(ele=>{
        let arr = ele.split(' ')
        let time = 0
        for (var i = 0 ; i<arr.length-1; i++){
            if(time===0){
                time = Math.min(arr[i],arr[i+1])
            }
            else{
                time = time + Math.abs(arr[i] - arr[i+1])
                }
            arr[i+1] = Math.abs(arr[i] - arr[i+1])
            }
            return(time)
        })
        
            
}

