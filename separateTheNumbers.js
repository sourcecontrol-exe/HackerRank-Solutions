//  to be optimised more and more./

function seprateTheNumbers(s){
    let len = s.length
    if(len<=1){

    }
    for(var i =0 ; i <len/2 ; i++){
        let digit = s.substring(0,i+1)
        let val = parseInt(digit)
        console.log(digit,val+1)

        let digitLength = digit.length
        while(digitLength<len){
            val = val + 1
            digit = digit + val.toString()
            digitLength = digit.length
        }
        console.log(digit,val)
        if(digit==s){
            return ["YES", parseInt(digit)]
        }    
    }
    return "No"
}

let a = seprateTheNumbers("90071992547409929007199254740993")
console.log(a)