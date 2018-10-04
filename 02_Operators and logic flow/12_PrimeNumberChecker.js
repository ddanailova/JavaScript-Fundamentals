function calc(num) {

    if(num<2){
        return console.log(false);
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num%i === 0 ){
            return console.log(false);
        }
    }
    return console.log(true);
}

calc(7);
calc(8);
calc(81);