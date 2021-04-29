/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let sol = [];
    let max = Math.max(...candies);
    candies.forEach((ele,index)=>{
        if(ele+extraCandies>=max)
            sol.push(true);
        else{
            sol.push(false)
        }
    })
    return sol;
};