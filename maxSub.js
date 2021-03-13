function sun(arr){
    let max = arr[0];
    
    for(var i = 1;i< arr.length ;i++){
        arr[i] = Math.max(arr[i], max+arr[i])
    }
}

let a = sun([-2,-3,-1,-4,-6])
console.log(a)