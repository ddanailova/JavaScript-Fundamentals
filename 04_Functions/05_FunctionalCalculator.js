function calc(num1, num2, op) {

    let sum = (num1, num2) => num1 + num2;
    let deduct = (num1, num2) => num1 - num2;
    let multiply = (num1, num2) => num1 * num2;
    let devide = (num1, num2) => num1 / num2;
    switch (op) {
        case "+": return sum(num1, num2);
        case "-": return deduct(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return devide(num1, num2);

    }
}

console.log(calc(1, 3, "*"));