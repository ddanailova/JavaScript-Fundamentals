'use strict';

function solution(inputArr) {
    let candidateResults = {};
    let totalVotes = 0;
    for (let inputLine of inputArr) {
        totalVotes += inputLine['votes'];
        if (!candidateResults.hasOwnProperty(inputLine['system'])) {
            candidateResults[inputLine['system']] = {};
            candidateResults[inputLine['system']]['total'] = 0
        }
        if (!candidateResults[inputLine['system']].hasOwnProperty(inputLine['candidate'])) {
            candidateResults[inputLine['system']][inputLine['candidate']] = inputLine['votes'];

        } else {
            candidateResults[inputLine['system']][inputLine['candidate']] += inputLine['votes'];
        }
        candidateResults[inputLine['system']]['total'] += inputLine['votes']
    }

    for (let system of Object.keys(candidateResults)) {
        let sortedCandidates = Object.keys(candidateResults[system])
            .filter(e => e !== 'total')
            .sort((c1, c2) => candidateResults[system][c2] - candidateResults[system][c1]);
        candidateResults[system]['winner'] = sortedCandidates[0];
    }
    let systemWinners = {};
    for (let system of Object.keys(candidateResults)) {
        if (!systemWinners.hasOwnProperty(candidateResults[system]['winner'])) {
            systemWinners[candidateResults[system]['winner']] = 0;
        }
        systemWinners[candidateResults[system]['winner']] += candidateResults[system]['total'];
    }
    if (Object.keys(systemWinners).length > 1) {
        let sortedWinners = Object.keys(systemWinners).sort((w1, w2) => systemWinners[w2] - systemWinners[w1]);
        let galaxyWinner = sortedWinners.shift();
        let galaxySecond = sortedWinners.shift();

        if (systemWinners[galaxyWinner] > totalVotes / 2) {
            console.log(`${galaxyWinner} wins with ${systemWinners[galaxyWinner] } votes`);
            console.log(`Runner up: ${galaxySecond}`);
            Object.keys(candidateResults)
                .filter(e => candidateResults[e]['winner'] === galaxySecond)
                .sort((v1, v2) => candidateResults[v2]['total'] - candidateResults[v1]['total'])
                .map(e => console.log(`${e}: ${candidateResults[e]['total']}`));
        } else {

            let winnerPercent = Math.floor(systemWinners[galaxyWinner] * 100 / totalVotes);
            let secondPercent = Math.floor(systemWinners[galaxySecond] * 100 / totalVotes);

            console.log(`Runoff between ${galaxyWinner} with ${winnerPercent}% and ${galaxySecond} with ${secondPercent}%`);
        }
    } else {
        console.log(`${Object.keys(systemWinners)} wins with ${Object.values(systemWinners)} votes`);
        console.log(`${Object.keys(systemWinners)} wins unopposed!`);
    }
}

solution([
    {system: 'Theta', candidate: 'Flying Shrimp', votes: 10},
    {system: 'Sigma', candidate: 'Space Cow', votes: 200},
    {system: 'Sigma', candidate: 'Flying Shrimp', votes: 120},
    {system: 'Tau', candidate: 'Space Cow', votes: 15},
    {system: 'Sigma', candidate: 'Space Cow', votes: 60},
    {system: 'Tau', candidate: 'Flying Shrimp', votes: 150}]);
//
// solution([
//     { system: 'Tau',     candidate: 'Flying Shrimp', votes: 150 },
//     { system: 'Tau',     candidate: 'Space Cow',     votes: 100 },
//     { system: 'Theta',   candidate: 'Space Cow',     votes: 10 },
//     { system: 'Sigma',   candidate: 'Space Cow',     votes: 200 },
//     { system: 'Sigma',   candidate: 'Flying Shrimp', votes: 75 },
//     { system: 'Omicron', candidate: 'Flying Shrimp', votes: 50 },
//     { system: 'Omicron', candidate: 'Octocat',       votes: 75 } ]);

// solution([
//     { system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10 },
//     { system: 'Tau',   candidate: 'Kim Jong Andromeda', votes: 200 },
//     { system: 'Tau',   candidate: 'Flying Shrimp',      votes: 150 } ])