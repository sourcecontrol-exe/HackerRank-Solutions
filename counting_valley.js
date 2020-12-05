function vally(ar){
let arr = ar.split('')
let counts =0
let level = 0
arr.forEach((ele, i)=>{
    if(ele=='U'){
        if(level==-1){
            counts++
        }
        level++

    }
    else if(ele=="D"){
        level--
    }
})
return(counts)
}
 vally('UDUUUDUDDD')