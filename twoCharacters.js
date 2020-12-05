function alternatingCheck(a){
    for (var i =0;i< a.length -2 ; i++){
        console.log(a[i],a[i+2])
        if(a[i] != a[i+2]) 
            return false
        
        if(a[0] == a[1])
            return false
    }
     
    return true
}

function alternate(s){
    let uniqueArr = s.split('').filter((v, i, a) => a.indexOf(v) === i)
    let combination = []
    for(var i=0;i< uniqueArr.length -1;i++)
    {
        for(var j = i+1 ; j< uniqueArr.length; j++)
        {   
            let aset = []
            aset.push(uniqueArr[i])
            aset.push(uniqueArr[j])
            combination.push(aset)
        }
    }
    let max = 0
    let alternating = []
    
    combination.map(ele=>{
        let temp = 0
        alternating=s.split('').filter(val => ele.includes(val))
        if(alternatingCheck(alternating)){
            temp = alternating.length
            if(temp>max){
                max = temp
            }
        }
        
    })
    return(max)

}

let a = alternate("beabeefeab")

 console.log(a)