function equal(arr){
  let add = [1,2,5];
     let count  = 0;
     let j = add.length -1;
  while(true){
      arr.sort((a,b)=>{
          return a-b;
      });
      console.log(arr)
       if(arr[0] == arr[arr.length -1]){
           return count;
       }
       if(add[j]+ arr[0] <= arr[arr.length -1]){
           for(var i  =0 ; i< arr.length ;i++){
               if(arr[i] !== arr[arr.length-1]){
                     arr[i]+=add[j]
               }
           }
           count++;
           arr.sort((a,b)=>{
                return a-b; }); 
           j=add.length -1;
       }
       else{
           j--;
        }
  }
}

let ans = equal([2,5,5,5,5,5])
console.log(ans)