function findPowerSum(x, n, num, sum) {
    if (sum == x) {
      return 1;
    } else {
      let totalWays = 0;
  
      if (sum < x) {
        for (let i = num; i <= Math.pow(x, 1.0 / n); i++) {
          totalWays += findPowerSum(x, n, i + 1, sum + Math.pow(i, n));
        }
      }
  
      return totalWays;
    }
}

console.log(findPowerSum(100,2,1,0))