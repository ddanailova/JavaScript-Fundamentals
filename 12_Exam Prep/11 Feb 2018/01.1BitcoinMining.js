function solution(input) {
    let dayOfFirstCoin = 0;
    let totalMoney = input.map(Number)
        .reduce((acc,cur, index)=> {

            if ((index+1) % 3 === 0) {
                cur *= 0.7;
            }
            acc += cur * 67.51;
            if (acc / 11949.1 > 1 && dayOfFirstCoin === 0) {
                dayOfFirstCoin = index+1;
            }
            return acc;
        }, 0);
    console.log(`Bought bitcoins: ${parseInt(totalMoney/11949.16)}`);
    if(dayOfFirstCoin !== 0){
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstCoin}`);
    }
    console.log(`Left money: ${(totalMoney%11949.16).toFixed(2)} lv.`);
}

// solution(["100", "200", "300"]);
solution(["50","100"]);
// solution(["3124.15","504.212","2511.124"]);