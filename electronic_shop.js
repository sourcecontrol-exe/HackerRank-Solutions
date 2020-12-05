function max(keyArr,mouArr, budget){
    let max=0
    keyArr.map(keyboard=>{
        mouArr.map(mouse=>{
            if(budget>=keyboard+mouse){
               if(keyboard+mouse>max){
                   max=keyboard+mouse
               } 
            }
        })
    })
    if(max==0){
        return(-1) 
    }
    else 
        return(max)
}

max([4],[5],5)