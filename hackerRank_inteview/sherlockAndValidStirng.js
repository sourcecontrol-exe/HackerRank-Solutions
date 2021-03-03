function SherlockAndValisString(s){

    let map = {}
 
    for(var i = 0 ; i< s.length;i++){
        if(map[s[i]]  == undefined){
            map[s[i]] =1;
        }
        else{
            map[s[i]]++
        }
    }
    let sum =0;

    let frequency = Object.values(map);
 
    let min = Math.min(...(Object.values(map)));
    let max = Math.max(...Object.values(map));
 
    console.log(frequency);

    frequency.map(ele=>{
        sum+=ele
    })
        //console.log(Object.keys(map).length, min, sum);

        if(sum == min*Object.keys(map).length ){
            //console.log("yes")
            return "Yes"
        }

        else if( sum == ((min+1)*Object.keys(map).length)){
          
         // console.log("Yes")
          return "YES"
        }

        else if(sum == (min*Object.keys(map).length + 1)){
            
            //console.log(sum, min, s.length,Object.keys(map).length)
            //console.log("Yes")
            return "YES"
        }
        
        else {
            return "NO"
        }


}

let sol = SherlockAndValisString("aabbc")
console.log(sol)