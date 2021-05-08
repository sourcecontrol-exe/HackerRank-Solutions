/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */

var canReach = function(arr, start,set = new Set()) {
    
    if(set.has(start)) return false;

    if(arr[start] == 0) return true;

    if(start > arr.length-1 || start<0) return false;

    set.add(start);

    return (canReach(arr,start+ arr[start], set) || canReach(arr,start-arr[start], set))
    
};



console.log(canReach([3,0,2,1,2],2))