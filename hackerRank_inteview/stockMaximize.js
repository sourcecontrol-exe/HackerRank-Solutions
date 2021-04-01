function stockmax2(prices){
    let sum = 0
    let dp = new Array(prices.length).fill(0);

    for(var i =0 ; i<dp.length ; i++){
        for(var j = i+1 ; j<dp.length ;j++){
            dp[i]=Math.max(dp[i], prices[j] - prices[i]);
        }
        sum+=dp[i];
    }
    return sum

}
function stockMax(prices){
    let n = prices.length
    let dp = new Array(n).fill(0);

    dp[0] = Math.max(0, Math.max(...prices) - prices[0])

    for(var i = 1; i< prices.length; i++){
        dp[i] = dp[i-1]+ Math.max(dp[i], Math.max(...prices.slice(i,prices.length)) - prices[i]);
    }
    console.log(dp)
    return dp[n -1]
}

console.log(stockMax([111,1,2,100]))