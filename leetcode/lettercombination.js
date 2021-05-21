/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function (digits) {
    let set = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }

    let temp = set[digits[0]];
    for (var i = 0; i < temp.length; i++) {
        for (j = 1; j < digits.length; j++) {

            let templen = temp.length;
            set[digits[j]].map(element => {
                temp.push(temp[i] + element)
            })
            if(templen<temp.length){
                temp.shift();
                i--;
            }
        }
        console.log(temp)
    };
    return temp;
}

console.log(letterCombinations("23"))