/**
 * @param {number[]} arr
 * @return {number}
 */


// incomplete come to it later

function helper(arr,set,index=0, step=0){
    

}

var minJumps = function(arr) {
    let set = {};
    for(let i = arr.length-1;i>=0 ;i--){
        if(set[arr[i]] == undefined){
            set[arr[i]] = arr.length-1 - i;
        }
    }
    console.log(arr,set)
    let a = helper(arr,set);
    return a;
};

console.log(minJumps([100,-23,-23,404,100,23,23,23,3,404]))