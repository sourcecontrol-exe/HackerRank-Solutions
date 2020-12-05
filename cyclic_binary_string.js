function cbs(str){
    let count1=0
    let count0=0
    str.split('').map((ele)=>{
        if(ele=='1'){
            count1++
        }
        if(ele=="0"){
            count0++
        }
    })
    let max="1".repeat(count1)+"0".repeat(count0)
    console.log(parseInt(max,2))
}
 cbs("00110101")