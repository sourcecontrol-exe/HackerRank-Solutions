function sherlock(s){
    let build= new Set()
    let arr = s.split('')
    let valueSet = new Set()
    for(var i =0;i<arr.length;i++){
        if(build[arr[i]]== undefined){
            build[arr[i]] = 1
        }
        else{
            build[arr[i]] = build[arr[i]] + 1
        }
    }
   let values = Object.values(build)
   let minarr = Math.min(...values)
   let max = Math.max(...values)

    for(var j=0;j<values.length;j++){
        if(valueSet[values[j]] == undefined){
            valueSet[values[j]] = 1
        }
        else{
            valueSet[values[j]] = valueSet[values[j]] +1
        }
    }
   let ans = Object.values(valueSet)
   if(Math.max(...ans)>= values.length-1)
   {
       return "YES"
   }
   else{
       return "NO"
   }
}


let a = sherlock("aaaabbcc")
console.log(a)