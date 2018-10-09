<<<<<<< HEAD
function solution(inputArr) {
    let subscribersArr = inputArr
        .map((input) => input.split(" ").filter(x=>x!==""))
        .filter((e) => [...e].length === 2)
        .reduce((acc, cur) => {
            if (!acc[cur[1]]) {
                acc[cur[1]] = [0];
            }
            return acc;
        }, {});


    inputArr
        .map((input) => input.split(" ").filter(x=>x!==""))
        .filter((e) => [...e].length === 3)
        .forEach((e) => {
                if (subscribersArr[e[0]]
                    && subscribersArr[e[2]]
                    && !subscribersArr[e[2]].includes(e[0])
                    && e[0] !== e[2]) {

                    subscribersArr[e[2]].push(e[0]);
                    subscribersArr[e[0]][0]++;
                }
            }
        );

    console.log(`Total users registered: ${Object.keys(subscribersArr).length}`);

    let count = 1;
    Object.keys(subscribersArr)
        .sort((a, b) => {
            return subscribersArr[b].length - subscribersArr[a].length || b.localeCompare(a);
        })
        .forEach((key) => {
            console.log(`${count++}. ${key} : ${subscribersArr[key][0]} following, ${subscribersArr[key].length - 1} followers`);
            if (count - 1 === 1) {
                subscribersArr[key].filter((e, i) => i !== 0).sort().forEach((name) => {
                    console.log(`*  ${name}`);
                });
            }

        })
}


// solution([
//     'Welcome, EmilConrad',
//     'EmilConrad followed VenomTheDoctor',
//     'VenomTheDoctor followed VenomTheDoctor',
//     'Saffrona followed EmilConrad',
// ])

solution([
    'Welcome, JennaMarbles',
    'JennaMarbles followed Zoella',
    'Welcome, AmazingPhil',
    'JennaMarbles followed AmazingPhil',
    'Welcome, Zoella',
    'JennaMarbles followed Zoella',
    'Zoella followed AmazingPhil',
    'Christy followed Zoella',
    'Zoella followed Christy',
    'Welcome, JacksGap',
    'JacksGap followed JennaMarbles',
    'Welcome, PewDiePie',
    'Welcome, Zoella',
])

// solution([
//     'Welcome, EmilConrad',
//     'Welcome, VenomTheDoctor',
//     'Welcome, Saffrona',
//     'Saffrona followed EmilConrad',
//     'Saffrona followed VenomTheDoctor',
//     'EmilConrad followed VenomTheDoctor',
//     'VenomTheDoctor followed VenomTheDoctor',
//     'Saffrona followed EmilConrad',
=======
function solution(inputArr) {
    let subscribersArr = inputArr
        .map((input) => input.split(" ").filter(x=>x!==""))
        .filter((e) => [...e].length === 2)
        .reduce((acc, cur) => {
            if (!acc[cur[1]]) {
                acc[cur[1]] = [0];
            }
            return acc;
        }, {});


    inputArr
        .map((input) => input.split(" ").filter(x=>x!==""))
        .filter((e) => [...e].length === 3)
        .forEach((e) => {
                if (subscribersArr[e[0]]
                    && subscribersArr[e[2]]
                    && !subscribersArr[e[2]].includes(e[0])
                    && e[0] !== e[2]) {

                    subscribersArr[e[2]].push(e[0]);
                    subscribersArr[e[0]][0]++;
                }
            }
        );

    console.log(`Total users registered: ${Object.keys(subscribersArr).length}`);

    let count = 1;
    Object.keys(subscribersArr)
        .sort((a, b) => {
            return subscribersArr[b].length - subscribersArr[a].length || b.localeCompare(a);
        })
        .forEach((key) => {
            console.log(`${count++}. ${key} : ${subscribersArr[key][0]} following, ${subscribersArr[key].length - 1} followers`);
            if (count - 1 === 1) {
                subscribersArr[key].filter((e, i) => i !== 0).sort().forEach((name) => {
                    console.log(`*  ${name}`);
                });
            }

        })
}


// solution([
//     'Welcome, EmilConrad',
//     'EmilConrad followed VenomTheDoctor',
//     'VenomTheDoctor followed VenomTheDoctor',
//     'Saffrona followed EmilConrad',
// ])

solution([
    'Welcome, JennaMarbles',
    'JennaMarbles followed Zoella',
    'Welcome, AmazingPhil',
    'JennaMarbles followed AmazingPhil',
    'Welcome, Zoella',
    'JennaMarbles followed Zoella',
    'Zoella followed AmazingPhil',
    'Christy followed Zoella',
    'Zoella followed Christy',
    'Welcome, JacksGap',
    'JacksGap followed JennaMarbles',
    'Welcome, PewDiePie',
    'Welcome, Zoella',
])

// solution([
//     'Welcome, EmilConrad',
//     'Welcome, VenomTheDoctor',
//     'Welcome, Saffrona',
//     'Saffrona followed EmilConrad',
//     'Saffrona followed VenomTheDoctor',
//     'EmilConrad followed VenomTheDoctor',
//     'VenomTheDoctor followed VenomTheDoctor',
//     'Saffrona followed EmilConrad',
>>>>>>> 2802e337c6b0a8f5585b8bcbf1753b49210c47c3
// ]);