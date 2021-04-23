function closestNumbers(arr){

    arr.sort((a,b)=> a-b)
   
    let min = Number.MAX_SAFE_INTEGER;
    let result = [];
    for(let i =0;i<arr.length -1 ;i++){
        let j = i+1;
        if(min> arr[j]-arr[i]){
            result = [arr[i],arr[j]];
            min = arr[j] - arr[i];
        }
        else if(min == arr[j]-arr[i]){
            result.push(arr[i],arr[j]);
        }
    }
    
    return result;
}

console.log(closestNumbers([-20,-3916237,-357920,-3620601,7374819,-7330761,30,6246457,-6461594,266854,-520 ,-470 ]))

