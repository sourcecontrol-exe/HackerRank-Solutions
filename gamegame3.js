/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start, set={}) {
   
   if(start in set) return Number.MAX_SAFE_INTEGER;
   if(start > arr.length-1 || start < 0) return Number.MAX_SAFE_INTEGER;
   if(arr[start] == 0) return Number.MAX_SAFE_INTEGER;
   
    set[start] = Math.min(canReach(arr, start-arr[start],set), 
                canReach(arr,start+arr[start]), set)

    return set[start];

};

console.log(canReach[4,2,3,0,3,1,2],0)