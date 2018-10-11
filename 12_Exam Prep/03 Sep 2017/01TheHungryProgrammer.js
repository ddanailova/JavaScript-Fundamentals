function solution(mealsArr, commandsArr) {
    let mealsLeft = [].concat(mealsArr);
    let mealsEaten = 0;

    for (let command of commandsArr) {
        let [action, first, second] = command.split(" ");

        if (action === "Serve" && mealsLeft.length > 0) {
            let served = mealsLeft.pop();
            console.log(`${served} served!`);
        } else if (action === "Eat" && mealsLeft.length > 0) {
            let eaten = mealsLeft.shift();
            mealsEaten++;
            console.log(`${eaten} eaten`);
        } else if (action === "Add" && first) {
            mealsLeft.unshift(first);
        } else if (action === "Consume") {
            if (mealsLeft[first] && mealsLeft[second]) {
                console.log("Burp!");
                let eatenCount = Number(second) - Number(first) + 1;
                mealsEaten += eatenCount;
                mealsLeft.splice(Number(first), eatenCount);
            }
        } else if (action === "Shift") {
            if (mealsLeft[first] && mealsLeft[second]) {
                let firstMeal = mealsLeft[first];
                let secondMeal = mealsLeft[second];
                mealsLeft.splice(first, 1, secondMeal);
                mealsLeft.splice(second, 1, firstMeal);
            }
        } else if (action === "End") {
            if (mealsLeft.length > 0) {
                console.log(`Meals left: ${mealsLeft.join(", ")}`);
            } else {
                console.log('The food is gone');
            }

            console.log(`Meals eaten: ${mealsEaten}`);
            break;
        }
    }
}

// solution(
//     ['chicken', 'steak', 'eggs'],
//     ['Serve', 'Eat', 'End', 'Consume 0 1']
// );

// solution(['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
//     ['Add spaghetti', 'Shift 0 1', 'Consume 1 4', 'End']);
//
// solution(['carrots', 'apple', 'beet'], ['Consume 0 2',  'End']);

solution(['bacon', 'veggies', 'chicken'],
    ['Add', 'End']);