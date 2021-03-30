function jump(arr){

    let dp = new Array(arr[0]).fill(0)

    for(var i = 0; i< dp.length ; i ++){
        let j = i;
        while(arr[j]){
            j+=arr[j];
        }
        if(j>=arr.length-1){
            return true
        }
    }
    return false
}

let ans = jump([5,4,3,2,1,0,0])
console.log(ans)