function uniquePathsWithObstacles(ObstacleGrid){
     if(ObstacleGrid[0][0] ===1 || ObstacleGrid[ObstacleGrid.length-1][ObstacleGrid[0].length-1] ==1)
     return 0;
    let nMax = ObstacleGrid.length;
    let mMax = ObstacleGrid[0].length;
     function recusrsive(n=0,m=0){

        if(n == nMax || m == mMax ) return 0
        console.log(ObstacleGrid[n][m])
        if(ObstacleGrid[n][m] == 1) return 0;
        
        if(n == ObstacleGrid.length-1 || m == ObstacleGrid[0].length-1) return 1;

        return recusrsive(n+1,m)+ recusrsive(n,m+1);
     }
    
    let a = recusrsive()
    return a;
}

let a = uniquePathsWithObstacles([[0,0],[1,1],[0,0]]);
console.log(a)