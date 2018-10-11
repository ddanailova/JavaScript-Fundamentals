function solution(inputArr) {
    let championshipData = inputArr
        .map((line) => line
            .split(" -> ")
            .filter(e => e !== ""))
        .reduce((acc, cur) => {
            let team = cur[0];
            let pilot = cur[1];
            let points = +cur[2];

            if (!acc.hasOwnProperty(team)) {
                acc[team] = {
                    totalPoints: 0,
                };
            }

            if (!acc[team].hasOwnProperty(pilot)) {
                acc[team][pilot] = 0;
            }
                acc[team][pilot] += points;
                acc[team].totalPoints += points;

            return acc;
        }, {});

    Object.keys(championshipData)
        .sort((a, b) => championshipData[b].totalPoints - championshipData[a].totalPoints)
        .slice(0, 3)
        .forEach(t => {
            console.log(`${t}: ${championshipData[t].totalPoints}`);

            Object.keys(championshipData[t])
                .filter(e => e !== "totalPoints")
                .sort((p1, p2) => championshipData[t][p2] - championshipData[t][p1])
                .forEach(e => {
                    console.log(`-- ${e} -> ${championshipData[t][e]}`);
                });
        });
}


solution(
    [
        'Ferrari -> Kimi Raikonnen -> 100',
        'Ferrari -> Sebastian Vettel -> 11',
        'Red Bull -> Max Verstapen -> 16',
        'Red Bull -> Daniel Rivviardo -> 10',
        'Haas -> Romain Grosjean -> 17',
        'Haas -> Kevin Magnussen -> 13',
        'Bull -> Max Verti -> 16',
        'Bull -> Rico Lamenda -> 12',
    ]);
// solution(
//     [
//         'Ferrari -> Kimi Raikonnen -> 25',
//         'Ferrari -> Sebastian Vettel -> 18',
//         'Mercedes -> Lewis Hamilton -> 100',
//         'Haas -> Romain Grosjean -> 25',
//         'Haas -> Kevin Magnussen -> 25',
//     ]);

// solution(
//     [
//         'Ferrari -> Kimi Raikonnen -> 25',
//         'Ferrari -> Sebastian Vettel -> 18',
//         'Mercedes -> Lewis Hamilton -> 10',
//         'Mercedes -> Valteri Bottas -> 8',
//         'Red Bull -> Max Verstapen -> 6',
//         'Red Bull -> Daniel Ricciardo -> 4',
//         'Mercedes -> Lewis Hamilton -> 25',
//         'Mercedes -> Valteri Bottas -> 18',
//         'Haas -> Romain Grosjean -> 25',
//         'Haas -> Kevin Magnussen -> 25',
//     ]);

// solution([
//     "Ferrari -> Kimi Raikonnen -> 25",
//     "Ferrari -> Sebastian Vettel -> 18",
//     "Mercedes -> Lewis Hamilton -> 10",
//     "Mercedes -> Valteri Bottas -> 8",
//     "Red Bull -> Max Verstapen -> 6",
//     "Red Bull -> Daniel Ricciardo -> 4",
// ]);

