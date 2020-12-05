function jumping_on_clouds(arr){
    //0 0 0 0 1 0
    let jumps =0
     
   for(var i =0; i<=arr.length-1; i++){
        if(arr[i+2] == 0 && i+2<=arr.length-1){
            i++
            
        }
        jumps++
        
   }
    
   return(jumps)
    
}

let a = jumping_on_clouds([0,0,0,0,1,0])
console.log(a)