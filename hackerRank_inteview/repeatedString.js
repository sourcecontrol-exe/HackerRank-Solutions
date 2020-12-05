function repeatedString(s,n){
    let lastSub = n%s.length
    let abs = Math.floor(n/s.length)
    let count = 0
     let result = 0
    s.split('').map(ele=>{
        if(ele === "a") {
            count++
        }
    }) 
    result = count*abs
     let sub = s.slice(0,lastSub)

    sub.split('').map(ele=>{
        if(ele === "a") result++
    })


    return result

}

let result = repeatedString("aba",10)
console.log(result)