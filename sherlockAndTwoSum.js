function cost(B) {
    let arr = B;
    let temp = 0;
    for(var i =1;i<B.length;i++){
        temp = Math.abs(arr[i]-1) > Math.abs(arr[i-1] -1)? (i==1? arr[i-1]=1:0): console.log("yeha");
    }
    console.log(arr)
    return temp
}

let ans = cost([4,7,9])
console.log(ans)
