function pan(s){
    let alphabets = new Set()
    let arr = s.split(" ")
    let arr1 =[]
    arr.map(ele=>{
        let temp = ele.split('')
        temp.forEach(ele=>{
            arr1.push(ele)
        })
    })
    arr1.map(ele=>{
        alphabets.add(ele.to)
    })
    console.log()
    if(alphabets.size !== 26){
        return "not pangram"
    }
    else {
        return "pangram"
    }
}

let a = pan("qmExzBIJmdELxyOFWv LOCmefk TwPhargKSPEqSxzveiun")
console.log(a)