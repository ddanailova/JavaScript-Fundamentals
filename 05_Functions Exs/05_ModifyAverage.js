function solve(number) {

    function avarage(num) {
        let numAsArr = num.toString().split("").map(d=>Number(d));
        let sum=0;
        for (let digit of numAsArr) {
            sum+=digit;
        }
        return sum/numAsArr.length;
    }

    while (avarage(number) <= 5){
        number = Number(number+"9");
    }
    console.log(number);
}

 solve(5835);