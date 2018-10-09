<<<<<<< HEAD
function solve(inputData) {
    let juiceData = {};
    let bottleData = {};
    for (let inputLine of inputData) {
        let [fruit, qty] = inputLine.split(/\s*=>\s*/).filter(e => e !== "");

        if (!juiceData.hasOwnProperty(fruit)) {
            juiceData[fruit] = 0;
        }
        juiceData[fruit] += +qty;
        if(juiceData[fruit] >= 1000){
            if (!bottleData.hasOwnProperty(fruit)){
                bottleData[fruit]=0;
            }
            bottleData[fruit] += parseInt(juiceData[fruit]/1000);
            juiceData[fruit]=juiceData[fruit]%1000;
        }
    }

    for (let fruit in bottleData) {
        console.log(`${fruit} => ${bottleData[fruit]}`);
    }
}

solve(["Kiwi => 234",
    "Pear => 2345",
    "Watermelon => 3456",
    "Kiwi => 4567",
    "Pear => 5678",
=======
function solve(inputData) {
    let juiceData = {};
    let bottleData = {};
    for (let inputLine of inputData) {
        let [fruit, qty] = inputLine.split(/\s*=>\s*/).filter(e => e !== "");

        if (!juiceData.hasOwnProperty(fruit)) {
            juiceData[fruit] = 0;
        }
        juiceData[fruit] += +qty;
        if(juiceData[fruit] >= 1000){
            if (!bottleData.hasOwnProperty(fruit)){
                bottleData[fruit]=0;
            }
            bottleData[fruit] += parseInt(juiceData[fruit]/1000);
            juiceData[fruit]=juiceData[fruit]%1000;
        }
    }

    for (let fruit in bottleData) {
        console.log(`${fruit} => ${bottleData[fruit]}`);
    }
}

solve(["Kiwi => 234",
    "Pear => 2345",
    "Watermelon => 3456",
    "Kiwi => 4567",
    "Pear => 5678",
>>>>>>> 2802e337c6b0a8f5585b8bcbf1753b49210c47c3
"Watermelon => 6789"])