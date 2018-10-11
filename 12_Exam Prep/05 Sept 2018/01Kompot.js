function solution(inputArr) {

    let peaches = 0;
    let plums = 0;
    let cherries = 0;
    let otherFruits = 0;

    for (let inputLine of inputArr) {
        let [fruit, weight] = inputLine.split(/\s+/);

        fruit =fruit.toLowerCase();
        if (fruit === 'peach') {
            peaches += (+weight*1000)/140;
        } else if (fruit === 'plum') {
            plums += (+weight*1000)/20;
        } else if (fruit === 'cherry') {
            cherries += (+weight*1000)/9;
        } else {
            otherFruits += +weight;
        }
    }
    // 1 peach - 140g
    // 1 plum - 20g
    // 1 cherry - 9g
    // 1 kompot - 2.5 peaches, 10 plums, 25 cherries


    console.log(`Cherry kompots: ${Math.floor(cherries/25)}`);
    console.log(`Peach kompots: ${Math.floor(peaches/2.5)}`);
    console.log(`Plum kompots: ${Math.floor(plums/10)}`);
        // 0.200 l (liter) rakiya from 1 kg fruit
    console.log(`Rakiya liters: ${(otherFruits*0.2).toFixed(2)}`);
}


solution([
    'apple 6',
    'peach 25.158',
    'strawberry 0.200',
    'peach 0.1',
    'banana 1.55',
    'cherry 20.5',
    'banana 16.8',
    'grapes 205.65',
    'watermelon 20.54'
]);

solution([
    'cherry 1.2',
    'peach 2.2',
    'plum 5.2',
    'peach 0.1',
    'cherry 0.2',
    'cherry 5.0',
    'plum 10',
    'cherry 20.0' ,
    'papaya 20' ])