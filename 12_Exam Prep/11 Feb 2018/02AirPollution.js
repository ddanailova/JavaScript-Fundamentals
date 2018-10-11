function solution(inputMarix, forces) {

    let mapMatrix = [];

    for (let i = 0; i < inputMarix.length; i++) {
        mapMatrix[i] = inputMarix[i].split(" ").map(Number);

    }
    for (let force of forces) {
        let [forceName, number] = force.split(" ");
        if (forceName === "breeze") {
            let index = +number;
            mapMatrix[index] = mapMatrix[index].map(e => e > 15?e - 15:0);
        } else if (forceName === "gale") {
            let index = +number;
            // mapMatrix = mapMatrix.forEach(r=>r.filter((c,i)=>i===index).map(e=>e-20));??????
            for (let i = 0; i < mapMatrix.length; i++) {
                mapMatrix[i][index]>20? mapMatrix[i][index]-=20:mapMatrix[i][index]=0;
            }
        } else if (forceName === "smog") {
            let value = +number;
            // mapMatrix = mapMatrix.forEach(r => r.forEach(c => c+value));?????

            for (let i = 0; i < mapMatrix.length; i++) {
                for (let j = 0; j < mapMatrix.length; j++) {
                    mapMatrix[i][j] += value;
                }
            }
        }
    }

    let pollutedAreas = [];
    for (let i = 0; i < mapMatrix.length; i++) {
        for (let j = 0; j < mapMatrix.length; j++) {
            if (mapMatrix[i][j] >= 50) {
                pollutedAreas.push(`[${i}-${j}]`)
            }
        }
    }

    if (pollutedAreas.length !== 0) {
        console.log(`Polluted areas: ${pollutedAreas.join(", ")}`);
    } else {
        console.log("No polluted areas");
    }

}

solution(
    [
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ], [
        "breeze 1",
        "gale 2",
        "smog 25"
    ]);

solution(
    [
        "5 7 3 28 32",
        "41 12 49 30 33",
        "3 16 20 42 12",
        "2 20 10 39 14",
        "7 34 4 27 24",
    ], [
        "smog 11", "gale 3",
        "breeze 1", "smog 2"
    ]);

solution(
    [
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ], [
        "breeze 1",
        "gale 2",
        "smog 35"
    ]);