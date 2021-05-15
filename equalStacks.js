function equalStacks(h1, h2, h3) {
     let temp =0, temp2 =0,temp3=0;
    for(let i = h1.length-1 ; i>=0;i--){
        h1[i] = h1[i]+temp;
        temp = h1[i];
    }
    for(let i = h2.length-1 ; i>=0;i--){
        h2[i] = h2[i]+temp2;
        temp2 = h2[i];
    }
    for(let i = h3.length-1 ; i>=0;i--){
        h3[i] = h3[i]+temp3;
        temp3 = h3[i];
    }
    console.log(h1,h2,h3)
}
console.log(equalStacks([3,2,1,1,1], [4,3,2],[1,1,4,1]))