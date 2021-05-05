/**
 * @param {number[]} nums
 * @return {number}
 * 2,5,3,0,0,0,1
 *
 */
var jump = function(nums){
    let target = nums.length;
    let dp = new Array(nums.length).fill(0);

    for(let i = 0; i<nums.length-1;i++){
        let temp = nums[i];
        for(j = i+1; j<nums[i];j++){
            
            dp[j] += temp;
            temp--;
            if(dp[j] == target){
                return j;
            }
        }
    }
    

};
console.log(jump([[2,3,1,1,4]]))