/**
 * @params {number[]} nums - srry os nuners
 * @return {number}
 */

var rob = (amount, coins, currentCoin) =>{
    if(amount ==0 ) return 1;
    if(amount < 0) return 0;
    let ncount = 0;
     for(var i =currentCoin ; i< coins.length; i++){
        ncount += rob(amount-coins[i], coins,i)
     }
      return ncount;
} 

let ans = rob(4,[1,2],0)
console.log(ans)