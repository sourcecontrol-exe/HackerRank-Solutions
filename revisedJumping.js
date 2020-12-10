function clouds(c,k){
   
    let consumed = 0
    let temp = k%c.length
    if(c[temp] == 1){
        consumed=3
    }
    while(temp!== 0){
        
        temp = (temp+k) % c.length
        consumed +=c[temp]*k + 1
    }
return(100-consumed)
}

clouds([0,0,1,0,0,1,1,0], 2)