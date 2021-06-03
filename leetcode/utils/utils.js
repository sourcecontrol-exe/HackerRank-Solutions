/*
the following is the list of algorithms and for learning purposes
*/

/* Quick algorithm */

function QuickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];
  
  var left = []; 
  var right = [];

  for (var i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return QuickSort(left).concat(pivot, QuickSort(right));
};

// Quick select algo 

function QuickSelect(array,k, left = 0 ,right = array.length-1) {
     
    for(var i=0;i<array.length-k; i++){
        let min = i;
        let minval = array[i];
        for(var j = i+1; j<array.length-1;j++){
            if(arr[j] < minval){
                min = j; 
                minval = array[j];
            }
        }
    }
}





// function MinHeap(array) {

// }

// function MaxHeap(array) {

// }
