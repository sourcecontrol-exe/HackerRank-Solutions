// function dp(n, set={}){

//     if(n in set) return set[n]
//     if(n == 1) return t1;
//     if(n == 2) return t2
   
//     set[n]= dp(n-1,set) + Math.pow(dp(2,n-2,set))
//     return  set[n];
// }
//    let ans = dp(15)
//    console.log(ans)

function fibonacciModified(t1, t2, n, set = {}) {
    if(n in set) return set[n];

    if(n == 1) return t1;
    if(n  == 2) return t2;
    
    set[n] = fibonacciModified(t1,t2,n-2,set) + Math.pow(fibonacciModified(t1,t2,n-1,set),2)
    return set[n];
}

let ans = fibonacciModified(0,1,10)
console.log(BigInt(ans))