function digit(n){
    let arr = n.toString().split('')
    let temp =0
    arr.map(ele=>{
        if(ele!=0){
            if(n%ele==0){
                temp++
            }
        }
    })
    return(temp)
}

digit(1012)