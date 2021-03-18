function samSub(str){
//    let sum =0;
//    for (var i = 0 ;i< str.length ;i++){
//        for(var j = i+1 ;j<str.length+1;j++){
       
//         sum+=parseInt(str.slice(i,j))
//        }
//    }
//    return(sum%(Math.pow(10,9)+7))
    let f = 1;
    let sum =0;
for(var i = str.length-1; i>=0;i--){
    sum += ((str[i]-"0")*f*(i+1))%(Math.pow(10,9)+7)
    f=(f*10+1)%(Math.pow(10,9)+7)
}
return sum
}
 let ans = samSub("123")
 console.log(ans)
