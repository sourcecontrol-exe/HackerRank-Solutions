function strong(password){
    // Return the minimum number of characters to make the password strong
    let format = "!@#$%^&*()-+".split('')
    let numbers ="0123456789".split('')
    let result1 = 0
    let result2 =0
   if(password.length<6)
         result1 = 6 - password.length
   let tempNum =0 
   let tempEx =0
   let tempUpperCase =0
   let tempLowerCase = 0 
   password.split('').map(ele=>{
       
       if(tempNum<1 && (numbers.includes(ele))){
           tempNum ++
       }
       
       else if(tempEx <1 && format.includes(ele)){
           tempEx++
       }
       
       else if( tempLowerCase < 1 && ele== ele.toLowerCase()){
           tempLowerCase++
       }
       
       else if(tempUpperCase <1 && ele == ele.toUpperCase()){
           tempUpperCase++
       }    
   })
    let total = tempUpperCase+tempLowerCase+tempEx+tempNum
     result2 = 4 - total
   console.log(result2,result1)
    return result1>result2 ? result1 : result2

}

 let a = strong("4700")
 console.log(a)