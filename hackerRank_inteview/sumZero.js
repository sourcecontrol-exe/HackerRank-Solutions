var sumZero = function(n) {
    if (n==1) return [0];
    let result = [];
    if(n%2==0){
        let low = -n/2;
        for(let i = 0;i<n;i++){
            console.log(low)
            if(low!=0)
                result[i] = low;
            else i--;
            low++;
        }
    }
    else{
        let low = -(n-1)/2;
        for(var j =0;j<n;j++){
            result[j] = low;
            low++
        }
    }
    
    return result;
};

console.log(sumZero(17))