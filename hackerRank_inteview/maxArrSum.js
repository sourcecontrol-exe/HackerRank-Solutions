function maxArraySum(arr){
    
    let dp = new Array(arr.length)
    let dp2 = []
    let max =0
    for(var i =0;i< arr.length ;i++){
        dp[i] = [arr[i]]
        max =  dp[i];
        for(var j = i+2 ; j<arr.length ;j+=i+2){
            max += Math.max(0,arr[j])
            dp[i].push(max)
        }
        dp2.push(Math.max(...dp[i]))
    }
    console.log(dp2)
}
 let a = maxArraySum([3,5,-7,8,10])