var threeSum = function(nums) {
    let result = {}
    for(var i=0 ;i<nums.length-1; i++){
        let target = nums[i];
        var set = new Set()
        for(var j = i+1 ;j<nums.length;j++){
            let numberToFind = target+nums[j]!==0?-(target+nums[j]):0;
          
            if(set.has(numberToFind)){
                let a = [nums[i], numberToFind, nums[j]].sort((a,b)=> a-b);
                result[a.join("")] = a
            }
            else{
                set.add(nums[j])
            }
        }
    }
    return Object.values(result);

}
console.log(threeSum([-1,0,1,2,-1,-4]))