function sun(arr){
    let sum2 = []
    let dp = []
    let sum = 0
    for(var i = 0 ;i<arr.length;i++){
        sum = arr[i];
        dp.push(sum)
        for(var j = i+1 ;j<arr.length;j++){
            sum+=arr[j]
            dp.push(sum)
        }
        sum2.push((Math.max(...dp)))
        dp = []
    }
    let max = Math.max(...sum2);

    for(var i =1; i< arr.length;i++){
        arr[i]= Math.max(arr[i], arr[i-1]+arr[i], arr[i-1])
    }
    
    return([max,arr[arr.length-1]])
}

let a = sun([-2,-3,-1,-4,-6])
console.log(a)