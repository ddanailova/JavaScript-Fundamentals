function solution(inputArr) {
    let teamsObj = {}
    loop:
        for (let inputLine of inputArr) {
                let [teamName, pilotName, points] = inputLine.split(/\s*->\s*/);
            if (!teamsObj.hasOwnProperty(teamName)) {
                teamsObj[teamName] = {
                    totalPoints: 0,
                };
            }
            if (!teamsObj[teamName].hasOwnProperty(pilotName)) {
                if (Object.keys(teamsObj[teamName]).length === 3) {
                    break loop;
                }
                for (let team of Object.keys(teamsObj).filter(k => k != teamName)) {
                    if (teamsObj[team].hasOwnProperty(pilotName)) {
                        break loop;
                    }
                }
                teamsObj[teamName][pilotName] = 0;
            }
            teamsObj[teamName][pilotName] += +points;
            teamsObj[teamName]["totalPoints"] += +points;

        }
    let sorttedTeams = Object.keys(teamsObj).sort((t1, t2) => teamsObj[t2]["totalPoints"] - teamsObj[t1]["totalPoints"]).splice(0, 3);

    for (let teamKey of sorttedTeams) {
        console.log(`${teamKey}: ${teamsObj[teamKey]["totalPoints"]}`);
        let sorttedPilots = Object.keys(teamsObj[teamKey]).filter(k => k != "totalPoints").sort((p1, p2) => teamsObj[teamKey][p2] - teamsObj[teamKey][p1]);
        sorttedPilots.forEach(p => console.log(`-- ${p} -> ${teamsObj[teamKey][p]}`))
    };
}

solution([
    "Ferrari -> Kimi Raikonnen -> 25",
    "Ferrari -> Max Verstapen -> 18",
    "Mercedes -> Lewis Hamilton -> 10",
    "Mercedes -> Valteri Bottas -> 8",
    "Red Bull -> Max Verstapen -> 6",
    "Red Bull -> Daniel Ricciardo -> 4",
    ,

]);