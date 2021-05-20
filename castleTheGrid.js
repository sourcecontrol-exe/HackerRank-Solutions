'use strict';


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'minimumMoves' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING_ARRAY grid
 *  2. INTEGER startX
 *  3. INTEGER startY
 *  4. INTEGER goalX
 *  5. INTEGER goalY
 */

function minimumMoves(grid, startX, startY, goalX, goalY, step = 0) {
    if(startX > grid.length -1 || startY > grid[0].length-1) return Number.MAX_SAFE_INTEGER;

    if(grid[startX][startX] == 'X')
        return Number.MAX_SAFE_INTEGER;
    if(startX == goalX && )
}

function main() {

    const n = parseInt(readLine().trim(), 10);

    let grid = [];

    for (let i = 0; i < n; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const startX = parseInt(firstMultipleInput[0], 10);

    const startY = parseInt(firstMultipleInput[1], 10);

    const goalX = parseInt(firstMultipleInput[2], 10);

    const goalY = parseInt(firstMultipleInput[3], 10);

    const result = minimumMoves(grid, startX, startY, goalX, goalY);

   console.log(result);
}
