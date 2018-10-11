function solution(kingdomInput, battleInput) {

    let kingdomData = kingdomInput.reduce((acc, cur) => {

        if (!acc.hasOwnProperty(cur.kingdom)) {
            acc[cur.kingdom] = {
                totalWins: 0,
                totalLosses: 0
            }
        }

        if (!acc[cur.kingdom].hasOwnProperty(cur.general)) {
            acc[cur.kingdom][cur.general] = {
                army: 0,
                wins: 0,
                losses: 0
            };
        }

        acc[cur.kingdom][cur.general].army += +cur.army;
        return acc;
    }, {});

    let battleResults = battleInput.reduce((acc, cur) => {
        let attackKingdom = cur[0];
        let attackGeneral = cur[1];
        let defKingdom = cur[2];
        let defGeneral = cur[3];

        if (acc.hasOwnProperty(attackKingdom) && acc.hasOwnProperty(defKingdom)) {
            if (attackKingdom !== defKingdom) {
                if (acc[attackKingdom].hasOwnProperty(attackGeneral) && acc[defKingdom].hasOwnProperty(defGeneral)) {
                    if (acc[attackKingdom][attackGeneral].army > acc[defKingdom][defGeneral].army) {

                        acc[attackKingdom][attackGeneral].army = Math.floor(1.1 * acc[attackKingdom][attackGeneral].army);
                        acc[attackKingdom][attackGeneral].wins++;
                        acc[attackKingdom].totalWins++;

                        acc[defKingdom][defGeneral].army = Math.floor(0.9 * acc[defKingdom][defGeneral].army);
                        acc[defKingdom][defGeneral].losses++;
                        acc[defKingdom].totalLosses++;

                    } else if (acc[attackKingdom][attackGeneral].army < acc[defKingdom][defGeneral].army) {
                        acc[defKingdom][defGeneral].army = Math.floor(1.1 * acc[defKingdom][defGeneral].army);
                        acc[defKingdom][defGeneral].wins++;
                        acc[defKingdom].totalWins++;

                        acc[attackKingdom][attackGeneral].army = Math.floor(0.9 * acc[attackKingdom][attackGeneral].army);
                        acc[attackKingdom][attackGeneral].losses++;
                        acc[attackKingdom].totalLosses++;
                    }
                }
            }
        }

        return acc;
    }, kingdomData);

    let winner = Object.keys(battleResults).sort((a, b) => {
        return battleResults[b].totalWins - battleResults[a].totalWins
            || battleResults[a].totalLosses - battleResults[b].totalLosses
            || a.localeCompare(b);
    }).shift();

    console.log(`Winner: ${winner}`);

    Object.keys(battleResults[winner])
        .filter(e => e !== "totalWins" && e !== "totalLosses")
        .sort((a,b)=> battleResults[winner][b].army - battleResults[winner][a].army)
        .forEach(e=>{
            console.log(`/\\general: ${e}`);
            console.log(`---army: ${battleResults[winner][e].army}`);
            console.log(`---wins: ${battleResults[winner][e].wins}`);
            console.log(`---losses: ${battleResults[winner][e].losses}`);
        })
}

solution(
    [
        {kingdom: "Stonegate", general: "Ulric", army: 5000},
        {kingdom: "Maiden Way", general: "Berinon", army: 1000},
        {kingdom: "YorkenShire", general: "Quinn", army: 5000}],
    [
        ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Maiden Way", "Berinon", "YorkenShire", "Quinn"]]);

// solution(
//     [
//         {kingdom: "Maiden Way", general: "Merek", army: 5000},
//         {kingdom: "Stonegate", general: "Ulric", army: 4900},
//         {kingdom: "Stonegate", general: "Doran", army: 70000},
//         {kingdom: "YorkenShire", general: "Quinn", army: 0},
//         {kingdom: "YorkenShire", general: "Quinn", army: 2000},
//         {kingdom: "Maiden Way", general: "Berinon", army: 100000}],
//     [
//         ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
//         ["Stonegate", "Ulric", "Stonegate", "Doran"],
//         ["Stonegate", "Doran", "Maiden Way", "Merek"],
//         ["Stonegate", "Ulric", "Maiden Way", "Merek"],
//         ["Maiden Way", "Berinon", "Stonegate", "Ulric"]
//     ]);

