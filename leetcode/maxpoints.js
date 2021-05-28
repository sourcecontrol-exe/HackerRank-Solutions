/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let head =0;
    let tail = cardPoints.length-1;
    let result = 0;
    let max = 0;
    while(k--){
        if(cardPoints[head]>cardPoints[tail]){
            result+=cardPoints[head];
            head++;
        }
        else if(cardPoints[head]<cardPoints[tail]){
            result+=cardPoints[tail]
            tail--;
        }
        else{
            result+=cardPoints[head];
            tail--;
            head++;
        }
        
    }
    return result;
};
console.log(maxScore([1,79,80,1,1,1,200,1],3))