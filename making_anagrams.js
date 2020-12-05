function anagrams(s1,s2){
    let a = keys(s1)
    let b = keys(s2)
    let temp =0
     let intersection = Object.keys(a).filter(x=>Object.keys(b).includes(x))
      intersection.forEach(ele=>{
          temp = temp+(Math.abs(a[ele]-b[ele]))
      })
      let difference = Object.keys(a).filter(x=> !Object.keys(b).includes(x)).concat(Object.keys(b).filter(x=> !Object.keys(a).includes(x)))
     difference.map(ele=>{
         if(a[ele]!==undefined){
             temp = temp + a[ele]
         }
         else{
             temp = temp+ b[ele]
         }
     })
      return(temp)
}

function keys(str){
    let set = new Set()
    str.split('').map(ele=>{
        if(set[ele] == undefined){
            set[ele] = 1
        }
        else{
            set[ele] = set[ele]+1
        }
    })
    return set
}

anagrams('cde','abc')