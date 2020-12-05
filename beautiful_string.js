function beautifulBinaryString(b){
    let match="010"
    let arr= [...b]
     let count =0
    for(var i =0; i<arr.length-2; i++){
        let a=arr[i]
        let b = arr[i+1]
        let c = arr[i+2]
       if(a+b+c == match){
           arr[i+2] = 1
           count++
       }
    }
    return(count)
}
beautifulBinaryString("0100101010")