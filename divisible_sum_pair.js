function divisible_sum_pair(n,k,ar){
    let i,j
    let arr=[]
    for(i=0;i<ar.length;i++){
        for(j=i+1;j<ar.length;j++){
            if((ar[i] + ar[j])%k==0){
                arr.push([ar[i],ar[j]])
            }
        }
        
    }
    console.log(arr.length)
}

divisible_sum_pair(6,3,[1,3,2,6,1,2])