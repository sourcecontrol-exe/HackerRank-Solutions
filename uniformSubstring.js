function uniformSubstring(s,queries){
    let working= []
    let result = []
    let arr = s.split('')
    let j =0
   for(var i =0 ; i < s.length ; i++){
       if(arr[i]===arr[i+1]){
           continue
       }
       else{
            working.push(s.substring(j,i+1))
            j =i+1
       }
   }
   working.map(ele=>{
    let len = ele.length
      
       while(len){
           result.push((ele.charCodeAt(0)-96)*len)
           len--
       }
   })
   let ans = []
   queries.map(ele=>{
       if(result.includes(ele)){
           ans.push("Yes")
       }else{
           ans.push("No")
       }
   })
    return ans
}

uniformSubstring("aaabbbbcccddd")