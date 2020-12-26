function substring(nk,str,power){
    let size = nk[1]
    let substringOfLengthK = findSubSequences(str).filter(ele=> ele.length== size)
        let max = 0
        let maxString = new Map()
        let temp = 0
        substringOfLengthK.map(ele=>{
            temp = 0
            ele.split("").forEach((element,index) => {
                temp+=power[ele.charCodeAt(index)-97]
            });
            if(temp>=max){
                max = temp;
                maxString.set(max,ele)
                // if(maxString[ele] == undefined){
                //     maxString[ele] = temp
                // }
            }
            //console.log(ele,temp)
        })
        console.log(maxString)
        
        return(maxString.get(max))
}



function findSubSequences(str) {
    let arr= []
    var len = str.length,
        output,
        counter = 0;
    for (var i = 1; i < Math.pow(2, len); i++) {
        output = '';
        for (var j = 0; j < len; j++) {
            if (i & (1 << j)) {
                output += str[j];
            }
        }
        arr.push(output)
    }
     return arr
}



let a = substring([6,5],"abcabc",[ 100, 50, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
 console.log(a)