/**
 * @param {number[]} nums
 * @return {number}
 * 2,5,3,0,0,0,1
 *
 */
var jump = function(nums){
    let len = nums.length;
    let current = -1;
    let next =0;
    let steps =0;
    for(let i =0; next<len-1;i++){
        if(i > current){
            steps ++;
            current = next;
        }
        next = Math.max(next, nums[i]+i);
    }
    return steps
};
console.log(jump([2,2,2,0,4]))