function new_year_chaos(q){
    let count = 0;
    for(var i = q.length -1 ; i>=0 ;i--){
        if(q[i] - (i+1) >2){
            return "Too chaotic"
        }
        for(var j = Math.max(0,q[i]-2); j<i ;j++){

            if(q[j] > q[i]) count++
        }
    }
   return count
}
let a = new_year_chaos([1,2,5,3,7,8,6,4])
console.log(a)