// function bubbleSort(arr){
//     var swap =0
//     for(var i = arr.length -1 ; i>=0 ;i--){
//         for(var j = 0; j<arr.length; j++){
//             if(arr[j]>arr[j+1]){
//                 var temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//                 swap++
//             }
//         }
//     }
//     console.log(arr)
//     return swap
// }

// function selectionSort(arr){
//     var minInd, temp;
//     var count=0;
//     for(var i =0; i< arr.length; i++){
//         minInd = i;
//         for(var j = i+1 ; j<arr.length; j++){
//             if(arr[j]<arr[minInd]){
//                 minInd = j
//             }
//         }
//         temp = arr[i]
//         arr[i] = arr[minInd]
//         arr[minInd]= temp
//         count++
//     }
//     console.log(arr,count)
//      return count-1
// }
function cp(arr){
let swapCount = 0;
    arr.forEach((currentInt, index) => {
        const position = index + 1;
        if (currentInt !== position) {
            const indexToSwap = arr.indexOf(position);
            arr[indexToSwap] = currentInt;
            arr[index] = position;
            swapCount = swapCount + 1;
        }
    });
 return swapCount
}
selectionSort([4,3,1,2])