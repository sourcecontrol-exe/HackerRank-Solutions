function pick(a){
   let s = new Set();
    var max =0
     for(var i =0; i < a.length ; i++){
         let count =0
         if(!s.has(a[i])){
             s.add(a[i])
             for(var j =0 ; j< a.length; j++){
                 if(a[j]==a[i] || a[j] == a[i] +1)
                    {
                        count++ 
                        console.log(a[i],a[j])
                    }
             }
              max = Math.max(max,count)
         }
         //console.log(max)

     }
    
    return max
}

pick([4,6,5,3,3,1])