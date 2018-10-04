function sunDiagonals(matrix) {
    let normalDiagonal = 0;
    let backDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            (col === row) ? normalDiagonal += matrix[row][col] : normalDiagonal;
            (col === matrix.length - row - 1) ? backDiagonal += matrix[row][col] : backDiagonal;
        }
    }
    console.log(normalDiagonal + " " + backDiagonal);

}

function sunDiagonalsPure(input) {

    let sum = [].concat([0,0])
    .map((diagonal, dIndex) => dIndex % 2 === 0 ? (input
        .map((item, index) => {
            return +item
                .filter((innerItem, innerIndex) => {
                    return innerIndex === index;
                })[0];
        })
        .reduce((acc, cur) => {
            return acc + cur;
        })) : (
        input
            .map((item, index) => {
                return +item
                    .filter((innerItem, innerIndex) => {
                        return innerIndex === item.length - 1 - index;
                    })[0];
            })
            .reduce((acc, cur) => {
                return acc + cur;
            })))
            .join(" ");

    console.log(sum);
}

function solve(input) {
    // not mine
    return input.reduce((acc, cur, index) => {
        acc[0] += +input[index][index];
        acc[1] += +input[index][input.length - 1 - index];
        return acc;
    }, [0, 0]);
}
sunDiagonals([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
])

sunDiagonalsPure([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
])