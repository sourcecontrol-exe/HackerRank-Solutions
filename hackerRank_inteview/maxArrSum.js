function maxArraySum(arr){
   let maxCurrent = [arr[0], Math.max(arr[0], arr[1])];
   let maxGlobal = Math.max(...maxCurrent);
   for(var i =2;i<arr.length ;i++){
       maxCurrent[i]= Math.max(arr[i],maxCurrent[i-2]+arr[i], maxGlobal);
       maxGlobal = Math.max(maxGlobal,maxCurrent[i]);
   }
    
   return maxGlobal;
}
 let a = maxArraySum([-2,1,3,-4,5])