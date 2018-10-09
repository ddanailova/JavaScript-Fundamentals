function solution(inputArr) {
    let travellerLog = inputArr
        .map((input) => input.split(/\s+/).filter(e => e !== ""))
        .reduce((acc, cur) => {
            let name = cur[0];
            let cash = cur[cur.length - 1];
            if (cur.length === 3) {
                if (!acc[name]) {
                    acc[name] = {};
                    acc[name].money = 0;
                }
                acc[name].money += +cash;
            } else if (cur.length === 8) {
                let country = cur[5];
                let landmark = cur[3];

                if (!acc[name]) {
                    acc[name] = {};
                    acc[name].money = 0;

                }
                if (acc[name].money >= +cash) {
                    if (!acc[name][country]) {
                        acc[name][country] = [];
                    }
                    if (!acc[name][country].includes(landmark)) {
                        acc[name][country].push(landmark);
                        acc[name].money = Math.max(0, acc[name].money - (+cash));
                    }
                } else {
                    console.log(`Not enough money to visit ${landmark}`);
                }


            }
            return acc;
        }, {});

    Object.keys(travellerLog)
        .sort((a, b) => {
            return Object.keys(travellerLog[b]).length - Object.keys(travellerLog[a]).length;
        }).forEach((key) => {

        console.log(`${key} visited ${Object.keys(travellerLog[key]).length - 1} countries and has ${travellerLog[key].money} money left`);

        Object.keys(travellerLog[key])
            .filter(e => e !== "money")
            .sort((a, b) => {
                return travellerLog[key][b].length - travellerLog[key][a].length;
            })
            .forEach((country) => {
                console.log(`- ${country} -> ${travellerLog[key][country].length } landmarks`);

                travellerLog[key][country]
                    .sort()
                    .forEach((location) => {
                        console.log(`-- ${location}`);
                    })
            })
    });
}

solution([
    'Peter gets 100',
    'Peter visited the StatueOfLiberty in USA - 50',
    'Bill gets 250',
    'Bill gets 400',
    'Peter gets 150',
    'Peter visited the ChristTheRedeemer in Brazil - 150'
])

// solution([
//     'Peter gets 100',
//     'Peter visited the StatueOfLiberty in USA - 50',
//     'Bill gets 250',
//     'Tim visited the ChristTheRedeemer in Brazil - 150',
//     'Bill gets 400',
//     'Bill visited the MountFuji in Japan - 600',
//     'Bill visited the TeatroAmazonas in Brazil - 50',
//     'Bill gets 150',
//     'Bill visited the ChristTheRedeemer in Brazil - 150',
//     'Tim gets 500',
//     'Bill visited the StatueOfLiberty in USA - 440',
//     'Tim visited the StatueOfLiberty in USA - 440',
//     'Maria gets 650',
//     'Maria visited the StatueOfLiberty in USA - 440',
//     'Maria visited the CapeCod in USA - 100'
