function diagonalAttack(input){
    let matrix = input.map(r=>r.split(' ').map(Number));

    let normalSum = 0;
    let backSum = 0;
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix.length; c++) {
            if (r===c){
                normalSum+=matrix[r][c];
            }
            if(c === matrix.length - r -1){
                backSum+=matrix[r][c];
            }
        }
    }
    if(normalSum===backSum){
        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix.length; c++) {
                if (r!==c && c !== matrix.length - r -1){
                    matrix[r][c] = normalSum;
                }

            }
        }
    }

    console.log(matrix.map(row => row.join(' ')).join("\n"));
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);