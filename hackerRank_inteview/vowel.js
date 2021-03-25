function vol(n){

    let arr =[1,1,1,1,1];
    n = n-1
    while(n--){
        for(var i =0; i< arr.length ; i++){
            for(var j = i+1 ;j<arr.length;j++){
                arr[i]+=arr[j];
            }
        }
    }

    let sol =0;
    arr.forEach(ele=>{
        sol+=ele
    })
    return(sol)
} 

let ans = vol(33)