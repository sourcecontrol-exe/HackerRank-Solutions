function alt(s){
    let a = s.split("")
    let result = 0
  for(var i= 0; i<s.length-1;i++){
      if(a[i] == "A"){
        if(a[i+1]!=="B"){
            result++
        }
    }
    else if(a[i]=="B" && a[i+1] !== "A"){
        result++
    }
  } 
   return result  
        
}


let a = alt("AAABBB")
console.log(a)