function CircularArrayRotation(a, k, queries){
    let result = []
    for ( var itr = 0 ; itr<k ; itr++){
        let last = a[a.length -1]
        a = a.splice(0,a.length-1)
        a.unshift(last)
    }
    queries.map(ele=>{
        result.push(a[ele])
    })
    return result
}

 let a = CircularArrayRotation([1,2,3],1,[2])
 console.log(a)