function bdam(i, j , k){
    let temp = 0
    for( var itr = i; itr<=j; itr ++){
        let a = Number(itr)
        let b = Number(itr.toString().split('').reverse().join(''))
         if(Math.abs((a-b)%k == 0)){
            temp++
         }
    }
    return temp
}

bdam(20,23,6)