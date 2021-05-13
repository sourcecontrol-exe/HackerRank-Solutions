var countBits = function(num) {
    let res = []
    for(i = 0;i<=num;i++){
        let count =0;
        i.toString(2).split("").map(ele=> {if(ele==1) count++});
        res.push(count);
    }
    return res
};
console.log(countBits(100000))