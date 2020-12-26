function positive_prefix(nk){
    let n =nk[0]
    let k =nk[1]
    let ans = arrydesigner(n,nk)
    let count = Math.ceil(n/2)
    let sum = 0
    // distritbute the array for two cases 
    

    while(count<nk[1]){

            // let temp = n-1
            // while(count<k){
    console.log(count,k,'here')
    count++

            //     if(ans[temp]<0){
            //         ans[temp] = -1*ans[temp]
            //         count++
            //     }
            //     temp--
            // }
    }
            // for(var j=n-1;j>=0;j--){
            //     console.log(count)
            //     if(ans[j]>0){
            //         ans[j] = -1*ans[j]
            //         count+=1
            //         if(count == k){
            //             console.log("break")
            //             break
            //         }
            //     }
            //     console.log(count,k,'here',ans)
            // }

            // if(count>k){
            //     let dif = count-k 
            //     for(var m = n-1; m<=0;m--){
            //         if(ans[m]>0){
            //             ans[m] = ans[m]*(-1)
            //             dif--
            //             if(dif==0){
            //                 break;
            //             }
            //         }
            //     }
            // }

            // for(var l=0;l<n;l++){
            //     sum+=ans[l]
            // }
        
    //}
    // count is total number of positive numbers
    
    
    //console.log(ans,sum)



}
function arrydesigner(n,nk){
    let ans =[]

    if(n%2!== 0){ //for n is even
        for(var i =0;i<nk[0];i++){
            ans[i] = (i+1)*Math.pow(-1,i+2)
            }
    }
    else if(n%2 ==0){   //for nis odd
        for(var i =0 ; i< nk[0] ;i++){
            ans[i] = (i+1)*Math.pow(-1,i+1)
        }
    }



    return ans
}
 positive_prefix([10,1])
