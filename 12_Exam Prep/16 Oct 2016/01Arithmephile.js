function solution(input) {
    let inputNum = input.map(Number);
    let results = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < inputNum.length; i++) {
        if (inputNum[i] > 0 && inputNum[i] < 9) {
            let currantResult = inputNum.slice(i+1,i+1+inputNum[i]).reduce((acc,curr)=>{return acc*=curr});
            if(currantResult>results){
                results=currantResult;
            }
        }
    }
    console.log(results);
}

solution([
    "10",
    "20",
    "2",
    "30",
    "44",
    "3",
    "56",
    "20",
    "24",
]);