// function migratoryBirds(arr) {
//   let i
//   let mf =1
//   let result = 0
//   for( i=0 ; i< arr.length ; i++){
//       let m=0
//      for( var j=i; j< arr.length ;j++){
//         if(arr[i] == arr[j]) 
//             m++
//         if(mf<m){
//             mf=m
//             result = arr[i]
//         }
//      }
//   }
//   return result
// }

function migratory_bird(arr){
    let counts={}
    let compare =0 
    let mostFreq
    for(var i = 0 ; i< arr.length ; i++){
        let el= arr[i]
    if(counts[el] === undefined)
        counts[el] = 1;
    else
        counts[el] = counts[el] + 1
    
    if(counts[el]> compare){
        compare = counts[el]
        mostFreq = arr[i]
        }
    }
      console.log(mostFreq)
}
 migratory_bird([1,2,3,4,5,4,3,2,1,3,4])

 //still need to to be improved