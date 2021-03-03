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
    

    let frequency = Object.values(map);
    let UniqueFre = [...new Set(frequency)];
    
    let minfreq = Math.min(...frequency);
    let count  = 0
    frequency.map(ele=>{
        if(ele == minfreq) count++
    })
    console.log(frequency, UniqueFre, map, )
    if(count == frequency.length){
        return "YES"
    }

    if((count == 1 || count == frequency.length-1) && UniqueFre.length<=2){
         console.log(count)
        if((Math.min(...UniqueFre)+1 == Math.max(...UniqueFre) )  || (Math.min(...UniqueFre) -1 ==0 && count == 1)){
            return "YES"
        }

    }
    return "NO"
    
}

let sol = SherlockAndValisString("abcdee")
console.log(sol);
//aabbccddeefghi