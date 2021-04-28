
var minimumTotal = function(triangle) {

    const m = triangle.length;
    const memo = new Map();
    
    let min = Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i < m; i++) {
        const res = findMinimumPath(m - 1, i);
        min = Math.min(min, res);
    }
    return min;

    function findMinimumPath(row, index) {
        const key = row + '#' + index;
        
        if (row < 0) return 0;
        if (index < 0 || index > row) return Number.MAX_SAFE_INTEGER;
        if (memo.has(key)) return memo.get(key);

        const res = triangle[row][index] + Math.min(findMinimumPath(row - 1, index - 1), findMinimumPath(row - 1, index));
        memo.set(key, res);
        
        return res;
    }
};


var minimumTotal = function(triangle) {
    
    for(let r = triangle.length-2; r >= 0; r--) {
        for(let c = 0; c < triangle[r].length; c++) {
            triangle[r][c] += Math.min(triangle[r+1][c], triangle[r+1][c+1]);
        }
    }
    return triangle[0][0];
};

console.log(minimumTotal([[-1],[2,3],[1,-1,-3]]))