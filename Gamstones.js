function gemstones(arr){
    let temp = new Set()
    arr.forEach((item,index)=>{
       
        let uniqueArr = item.split('').filter((value,index,self)=>{ if(self.indexOf(value)=== index) return value})
           uniqueArr.map(ele=>{
                if(temp[ele] == undefined){
                    temp[ele] = 1
                }
                else{
                    temp[ele] = temp[ele] + 1
                }
           })
    })
    let ans = []
    let keys = Object.keys(temp)
    let val = Object.values(temp)
    val.forEach((ele,index)=>{
        if(ele == arr.length){
            ans.push(keys[index])
        }
    })
   return(ans)
}
gemstones(["abcdde","baccd","eeabg"])