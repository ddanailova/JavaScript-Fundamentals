function calculate(number) {
    let end = parseInt(number);
    let output = "";
    for (let i = 1; i <= end; i++) {
        output+=i;
    }
    console.log(output);
}

calculate(11);