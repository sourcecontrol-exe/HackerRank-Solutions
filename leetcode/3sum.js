var threeSum = function(nums) {
    //make a map with key is sum of elements and value is an array of elements contain those elements 

    let set = new Set();

    let result =[]
    for(var i =0; i<nums.length-1; i++){
        for(var j = i+1 ; j<nums.length; j++){
            let key = nums[i]+nums[j]
            set[key] = [i, j;
        }
    }
    for(var i =0;i<nums.length;i++){
        let key = nums[i]!==0? -1*nums[i]: nums[i];
        if(set[key]|| !set[key].include()){
            result.push([...set[key],nums[i]])
            set.delete(nums[key])
        }
    }
    return result
};
console.log(threeSum([-1,0,1,2,-1,-4]))