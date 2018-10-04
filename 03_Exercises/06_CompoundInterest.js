function solution(input) {
//sum, interest rate, compounding frequency and overall length
    let startAmount = input[0];
    let ineterestRate = input[1];
    let frequencyPeriod = input[2];
    let lenght = input[3];

    let frequency = 12/parseFloat(frequencyPeriod);

    let finalAmount = startAmount*(1+ ((ineterestRate/100)/frequency))**(frequency*lenght);
    console.log(finalAmount.toFixed(2));
}

solution([16000, 0.05, 12, 25]);