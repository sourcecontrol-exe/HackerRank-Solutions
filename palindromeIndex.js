function IsPlaindrome(s){
    if(s == s.split('').reverse().join('')){
        return true
    }

    else {
        return false
    }
}

function palindromeIndex(s){
    let result = -1
    let arr = s.split('')
   // console.log(s.split('').reverse().join(''))
    if(s.split('').reverse().join('') !== s){
        let str = s
        for(var i=0 ; i < s.length/2 ; i++){
            // console.log(s.charAt(i),s.charAt(arr.length-1-i))
            // if(s.charAt(i)!== s.charAt(arr.length-1-i)){
            //     let s1 = s.substring(0,i)+s.substring(i+1)
            //     let s2 = s.substring(0, arr.length-1 -i)+s.substring( (arr.length-1 -i)+1)
            //     console.log(s1,)
            //     if(s1 == s1.split('').reverse().join("")){
            //         result = i
            //     }
            //     else if(s2 == s2.split('').reverse().join("")){
            //         result = arr.length-1-i
            //     }

            //     break
            // }
            //console.log(i)
            let pointerA = arr[i]
            let pointerB = arr[arr.length -1 -i]
            if(pointerA !== pointerB){
                console.log(str.replace(pointerA,''),str.replace(pointerB,''))
                if(!IsPlaindrome(s.substring(0,i)+s.substring(i+1))){
                    return (arr.length-1-i)
                }
                else{
                    if(!IsPlaindrome(s.substring(0, arr.length-1 -i)+s.substring( (arr.length-1 -i)+1))){
                        return (i)
                    }
                }
            }
        }
    }
     return result
} 
 let a = palindromeIndex("prcoitfiptvcxrvoalqmfpnqyhrubxspplrftomfehbbhefmotfrlppsxburhyqnpfmqlaorxcvtpiftiocrp")
 console.log(a)
//console.log("Swetews".replace("t",''))