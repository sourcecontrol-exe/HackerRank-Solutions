function encryption(s){

    let working  = s.replace(/\s/g,'').toString()
    
    let col = Math.ceil(Math.sqrt(working.length))

     let str = ''
    for ( let i = 0 ; i < col ; i++){
        let temp = i; 

        while(temp < working.length){
            str+=working[temp]
            temp+=col;
        }
        str+=" "
        
    }
    
    return(str)

}

encryption("feedthedog")