/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    let res = []; 
    let last  = S.length-1;

    while(last>=0){
        let partitionIndex = S.indexOf(S[last]);
        let temp = last-1;

        while(temp>partitionIndex){
            if(S.indexOf(S[temp]) >= partitionIndex)
                temp--
            else{
                partitionIndex = S.indexOf(S[temp]);
            }
        }
        res.push((last - partitionIndex)+1);
        last = partitionIndex - 1;
    }
    return(res.reverse())
}
console.log(partitionLabels("12451245abcdea6786"));

