function equalizeArray(arr) {
    let set ={}

    for(let i =0;i<arr.length ; i++){
        if( set[arr[i]] == undefined){
            set[arr[i]] == 1
        }
        else{
            set[arr[i]] +=1;
        }
    }

    let max = Math.max(...Object.values(set));
    return arr.length - max
}