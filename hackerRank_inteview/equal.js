// function equal(arr){
//   let add = [1,2,5];
//      let count  = 0;
//      let j = add.length -1;
//   while(true){
//       arr.sort((a,b)=>{
//           return a-b;
//       });
//       console.log(arr)
//        if(arr[0] == arr[arr.length -1]){
//            return count;
//        }
//        if(add[j]+ arr[0] <= arr[arr.length -1]){
//            for(var i  =0 ; i< arr.length ;i++){
//                if(arr[i] !== arr[arr.length-1]){
//                      arr[i]+=add[j]
//                }
//            }
//            count++;
//            arr.sort((a,b)=>{
//                 return a-b; }); 
//            j=add.length -1;
//        }
//        else{
//            j--;
//         }
//   }
//  }

const equal = (arr)=>{
    let min = Math.min(...arr);
    let t = new Array(4).fill(0) 
    
    for( var i =0;i< arr.length ;i++){
        for(var j =0;j<4;j++){
            let x = arr[i] - (min - j);
            x = Math.floor(x/5) + Math.floor((x%5)/2) + (x%5)%2
            console.log(x,j,i);
            t[j]+=x;
        }
        console.log(t)
    }
    return Math.min(...t)
}

let ans = equal([1,3,2])
console.log(ans)