'use strict';
function solution(inputArr) {
    let operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => b - a,
        "*": (a, b) => a * b,
        "/": (a, b) => b / a,
    };
    if (inputArr.length < 3) {
        return console.log("Error: not enough operands!");
    }
    let index = 2;
    while (inputArr.length > 1) {
        if (Number.isInteger(inputArr[index - 2]) || Number.isInteger(inputArr[index - 1])) {
            if (!Number.isInteger(inputArr[index]) && inputArr[index]) {
                let result = operations[inputArr[index]](inputArr[index - 1], inputArr[index - 2]);
                inputArr.splice(index - 2, 3, result);
                index--;
            } else if (!inputArr[index]) {
                return console.log("Error: too many operands!");
            } else {
                index++;
            }
        } else {
            return console.log("Error: not enough operands!");
        }
    }
    console.log(inputArr.join(""));
}

solution([3, 4, '+']);
solution([5, 3, 4, '*', '-']);
solution([7,  33,  8,  '-'] );
solution([15,  '/']);
solution([31, 2, '+', 11, '/']);
solution([-1, 1, '+', 101, '*', 18, '+', 3, '/']);