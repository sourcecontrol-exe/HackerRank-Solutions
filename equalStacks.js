function equalStacks(h1, h2, h3) {
    let temp =0
    for(let i = h1.length-1 ; i>=0;i--){
        h1[i] = h1[i]+temp;
        temp = h1[i];
    }
    temp =0;
    for(let i = h2.length-1 ; i>=0;i--){
        h2[i] = h2[i]+temp;
        temp = h2[i];
    }
    temp =0;
    for(let i = h3.length-1 ; i>=0;i--){
        h3[i] = h3[i]+temp;
        temp = h3[i];
    }
    h1 = h1.filter((ele) => h2.includes(ele))
    let result = h1.filter(ele => h3.includes(ele));
   
    if(result[0] == undefined) return 0;
    return result[0];
}
console.log(equalStacks([1,1,1,1,2], [3,7],[1,3,1]))