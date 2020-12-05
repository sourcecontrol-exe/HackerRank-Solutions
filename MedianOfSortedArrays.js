function longest(s){
    let p =0 
    let q =1
    let result = 1
    if (s.length <=1){
        //console.log( result)
    }
     while(q< s.length){
         let sub = s.slice(p,q)
         let index = sub.indexOf(s[q])
         if( index !==-1){
             p = p + index + 1
         }
         q++
         result = q - p > result ?q-p : result
     }
      console.log(result)
}

let a =  longest("asda")
 console.log(a)