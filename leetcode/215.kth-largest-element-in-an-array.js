/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function QuickSort(array) {
    if(array.length<=1) return array;

    let pivot = array[0];
    
    let left =[];
    let right = [];
    for(let i =1; i<array.length ; i++){
        if(array[i] < pivot ) left.push(array[i]);
        else right.push(array[i]);
    }
    return QuickSort(left).concat(pivot, QuickSort(right));
}
var findKthLargest = function(nums, k) {
    let result = QuickSort(nums);
    return result[result.length-k];
};
// @lc code=end

