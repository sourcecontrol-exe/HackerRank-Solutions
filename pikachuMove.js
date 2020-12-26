function moves(input,result){
    let days=0
    input.split("").forEach((elemet,index)=>{
        let initial = input.charCodeAt(index) 
        let final = result.charCodeAt(index) 
        if(final-initial>=0){
            days+=(Math.floor(((final-initial)/13)))+((final-initial)%13)
        }
        else if(final - initial<0){
            days+=(Math.floor((26-(initial-final))/13)) + ((26 - (initial - final))%13)
        }
    })
     console.log(days)
}

moves("ABCT","PBDI")