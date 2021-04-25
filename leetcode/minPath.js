var travler= function(grid,m,n){
    if(m==1 && n ==1) return grid[m-1][n-1];
    if(m< 1 || n< 1) return 0;

    let result = Math.min(travler(grid, m-1,n), travler(grid, m,n-1))
    return result;
}


var minPathSum = function(irid) {
    let m = grid.length;
    let n = grid[grid.length].length;
    let min = travler(grid,m,n)
    return min;
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))

