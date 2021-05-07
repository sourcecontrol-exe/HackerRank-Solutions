var jumpGame =(arr)=>{
    let start = -1;
    let next = 0;
    let len = arr.length-1;
    let steps =  0;

     for(var i =0 ; next< len; i++){
         if(i> start){
             steps++;
             start = next;
         }
         next = Math.max(next, arr[i]+i);
     }
}

console.log(jumpGame([2,3,1,1,4]))

