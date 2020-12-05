function pair(arr){
    let pair={}
    arr.forEach((ele,i)=>{
        if(pair[ele] == undefined){
            pair[ele] = 1
        }
        else{
            pair[ele] = pair[ele] +1
        }
    })
    let keys= Object.values(pair)
    let count =0
    keys.map(ele=>{
        let rem=ele%2
        if((ele-rem)!=0){
            let temp = (ele-rem)/2
            count = count + temp
        }
    })
    console.log(count)
}

pair([10,20,20,10,10,30,50,10,20])