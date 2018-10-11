function solution(inputArr) {
    let bitcoins = 0;
    let totalMoney =0;
    let firstWin =0;
    for (let i = 0; i < inputArr.length; i++) {
        let goldPerDay = +inputArr[i];
        if((i+1)%3===0){
            goldPerDay *= 0.7;
        }
        totalMoney+=goldPerDay*67.51;
        bitcoins += parseInt(totalMoney/11949.16);
        totalMoney = totalMoney%11949.16;
        if(bitcoins > 0 && firstWin ===0){
            firstWin = i+1;
        }
    }


    console.log(`Bought bitcoins: ${bitcoins}`);
    if(firstWin!==0){
        console.log(`Day of the first purchased bitcoin: ${firstWin}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

// solution(["100", "200", "300"]);
// solution(["50","100"]);
solution(["3124.15","504.212","2511.124"]);