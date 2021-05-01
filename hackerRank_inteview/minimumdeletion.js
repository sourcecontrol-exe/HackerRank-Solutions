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

    let workingSet = new Set(Object.values(set));
    let count = 0;
    
    for(let i = arr.length-1 ;i>=0 ;i--){
        while(arr.indexOf(arr[i]) !== i+1 && workingSet.has(arr[i])){
            arr[i]-=1;
            count++;
        }
        workingSet.add(arr[i])
        
    }
    return count;

};
console.log(minDeletions("aab"));