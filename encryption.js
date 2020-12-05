function encryption(s){
    let arr = s.split('/n')
    let c = 0
    let str = ''
    arr.map(ele=> {
        c+=ele.length
        s=s+ele
    })
    let min = Math.floor(Math.pow(c,0.5))
    let max = Math.ceil(Math.pow(c,0.5))
    let result =[]
    for(var i =0 ;i<min ;i++){
        for(var j =0 ; j< max ;j++)
        {
            result[i][j] = s[i]
        }
        result[i][j] = '\n'
    }
    console.log(result)
}

encryption("haveaniceday")