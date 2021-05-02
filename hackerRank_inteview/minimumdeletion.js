var minDeletions = function(s) {
    let set = {};

    s.split("").forEach(ele => {
        if(set[ele] == undefined){
            set[ele] = 1;
        }
        else
            set[ele]++;
    });
    let arr = Object.values(set);
    arr.sort((a,b)=>a-b);
    let count = 0;
    let workingSet = new Set(arr);
    
    for(let i = arr.length-1 ;i>=0 ;i--){
        if(arr.indexOf(arr[i]) !== i){
            while(workingSet.has(arr[i]) && arr[i]>0){
                arr[i]--;
                count++
            }
            workingSet.add(arr[i]);
        }
    }
    console.log(arr)
    return count;

};

console.log(minDeletions("bbcebab"));