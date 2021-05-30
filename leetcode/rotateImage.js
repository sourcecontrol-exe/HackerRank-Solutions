/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

    let res = []
    for(let j = 0; j<matrix[0].length ;j++){
        
        let temp = []
        for(let i = matrix.length-1; i>=0;i--){
            temp.push(matrix[i][j]);
        }
        res.push(temp);
    }
    return res
};
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))