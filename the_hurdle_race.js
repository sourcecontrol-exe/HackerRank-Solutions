function hurdle(k,height){
    let max= Math.max(...height)
    console.log(Math.max(...height))
    if( max>k){
        return max - k
    }
    else return 0

}

  let ans = hurdle(4,[1,6,3,5,2])
   console.log(ans)