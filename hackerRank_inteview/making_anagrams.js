function anagram(a,b){
    let ab = a.split("")
    let exclusiOne = a.split("").filter(ele=> !b.split("").includes(ele))
    let exclsion2 = b.split("").filter(ele => !a.split("").includes(ele))
    let inclusiveone = a.split("").filter(ele => )
}

anagram("cde","abc")