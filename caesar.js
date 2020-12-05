function roataion(s,k){
    let listOfCode = []
    k = k%26
    s.split('').forEach((ele,index)=>{

        let code = s.charCodeAt(index)
        
        if(code>=97 && code<=122){
            let pcode = code+k
            if(pcode>122){
                pcode = pcode - 26
            }
            listOfCode.push(pcode)
            }

        else if(65<=code && code<=90){
            let pcode = code+k
            if(pcode>90){
               pcode = pcode - 26
            }
            listOfCode.push(pcode)
            }
        else{
            listOfCode.push(code)
            }
    })
    
    let ans = String.fromCharCode(...listOfCode)
    return (ans)

}

let ans= roataion("www.abc.xy",87)
 console.log(ans)