function minstep(arr, m , n){
 
    console.log(m.n)
    if(m == 1 && n == 1) return arr[m-1][n-1];

    if(m< 1 || n< 1) return Number.MAX_SAFE_INTEGER;

    if(m>1 && n> 1) return (arr[m-1][n-1]+ Math.min(minstep(arr,m-1,n), minstep(arr,m-1,n-1)))

    let sol = Math.min(minstep(arr,m-1,n), minstep(arr,m-1,n-1))
    
    return sol;

}



var minimumTotal = function(triangle) {
    let m = triangle.length;
    let n = triangle[triangle.length-1].length;
    console.log(n, m)
    // let sol = minstep(triangle,m,n);
    // return sol
};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))