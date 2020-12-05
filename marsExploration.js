function marsExploration(s){
    let count = s.length%3
    let start = 0
    let end = 3
    let arr1 = "SOS".split('')

    for ( var i =0; i < Math.abs(s.length/3); i++){
        let match = s.slice(start,end)
        start= start+3;
        end=end+3
        let arr = match.split('')
        console.log(arr)
        for(var j =0 ; j<3 ; j++){
            if(arr[j] !== arr1[j]){
                count++
            }
        }
    }
    
    return(count)
}

let a = marsExploration("SOSOOSOSOSOSOSSOSOSOSOSOSOS")
console.log(a)