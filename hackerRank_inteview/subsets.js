var subsets = function(nums) {
  var res = [];
    function dfs(nums, index, path, res){
        res.push([...path]);
        for(var i=index; i<nums.length; i+=1){
            path.push(nums[i]);
            dfs(nums, i+1, path, res);
            path.pop();
        }
    }
    dfs(nums, 0, [], res);
    return res; 
};

console.log(subsets([1,2,3]))