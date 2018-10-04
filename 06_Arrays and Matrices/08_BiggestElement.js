function biggestNum(matrix) {
    let maxNum = Number.NEGATIVE_INFINITY;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            matrix[row][col]>maxNum?maxNum=matrix[row][col]:maxNum;
        }
    }
    console.log(maxNum);
}

function biggestNum2(matrix){
    let maxNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(
        r=>r.forEach(
            c=> maxNum = Math.max(maxNum, c)
        )
    );
    console.log(maxNum);
}

biggestNum2([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);