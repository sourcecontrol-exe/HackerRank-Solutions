function knapsack(n , arr){

    let dp = new Array(n+1).fill(0)
    dp[0] = 1;

    for(let ele in arr){
        for(let i = ele ; i<dp.length ;i++){
            let reminder = i - ele;
            dp[i]+=dp[reminder];
        }
    }
    return dp[n];
}

function unbounded(money, arr, index){

    if( money == 0 ) return 1;
    if( index>arr.length ) return 0;

    let amountwithMoney = 0;
    let ways = 0;
   while(amountwithMoney<=money){
        let remaining = money - amountwithMoney;
        ways += unbounded(remaining , arr, index+1);
        amountwithMoney += arr[index];
   }
    return ways

}

function knapsackUnbounded(k, arr){
    
    const dp = [true];
  for (let i = 1; i <= k; i++){
    for (let j = 0; j < arr.length; j++) {
      if (dp[i - arr[j]]) {
          console.log(i-arr[j])
        dp[i] = true;
        continue;
      }
    }
  } 

  for (let i = k; i >= 0; i--) {
    if (dp[i]) return i;
  }

  return 0;

}


 let ans = knapsackUnbounded(10, [2,3,4])
 console.log(ans)