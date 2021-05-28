/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
    let head = 0;
    let tail = cardPoints.length - 1;
    let result = 0;
    let headPointer = head;
    let tailPointer = tail;
    while (k--) {
        if (cardPoints[head] == cardPoints[tail]) {
            headPointer = head
            tailPointer = tail
            while (cardPoints[headPointer] == cardPoints[tailPointer]) {
                headPointer++;
                tailPointer--;
                result += cardPoints[headPointer];
            }
            if (cardPoints[headPointer] > cardPoints[tailPointer]) {
                head = headPointer;
            }
            else {
                tail = tailPointer;
            }
        }
        else if(cardPoints[head]>cardPoints[tail]){
            result+=cardPoints[head];
            head++
        }
        else{
            result+=cardPoints[tail];
            tail--
        }
    }
    return result;
};
console.log(maxScore([1, 79, 80, 1, 1, 1, 200, 1], 3))