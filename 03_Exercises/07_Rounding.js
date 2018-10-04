function solition(input) {
    let number = input[0];
    let precision = input[1];

    if (precision>15){
        precision=15;
    }
    console.log(parseFloat(number.toFixed(precision)));
}

solition([3.14, 5]);