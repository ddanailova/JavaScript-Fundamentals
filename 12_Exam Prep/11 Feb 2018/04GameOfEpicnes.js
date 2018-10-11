function solution(kingdomsObjArr, battleArr) {
    let kingdomsData = {};
    for (let inputLine of kingdomsObjArr) {
        let kingdomName = inputLine["kingdom"];
        let kingdomGeneral = inputLine["general"];
        let generalsArmy = inputLine["army"];

        if (!kingdomsData.hasOwnProperty(kingdomName)) {
            kingdomsData[kingdomName] = {};
            kingdomsData[kingdomName]["totalWins"] = 0;
            kingdomsData[kingdomName]["totalLosses"] = 0;
            kingdomsData[kingdomName][kingdomGeneral] = {};
            kingdomsData[kingdomName][kingdomGeneral]["army"] = 0;
        } else {
            if (!kingdomsData[kingdomName].hasOwnProperty(kingdomGeneral)) {
                kingdomsData[kingdomName][kingdomGeneral] = {};
                kingdomsData[kingdomName][kingdomGeneral]["army"] = 0;
            }
        }
        kingdomsData[kingdomName][kingdomGeneral]["army"] += generalsArmy;
        kingdomsData[kingdomName][kingdomGeneral]["wins"] = 0;
        kingdomsData[kingdomName][kingdomGeneral]["losses"] = 0;

    }

    for (let battle of battleArr) {
        let attackingKingdom = battle[0];
        let attackingGeneral = battle[1];
        let defendingKingdom = battle[2];
        let defendingGeneral = battle[3];

        if (attackingKingdom !== defendingKingdom) {
            if (kingdomsData[attackingKingdom][attackingGeneral]["army"] > kingdomsData[defendingKingdom][defendingGeneral]["army"]) {

                kingdomsData[attackingKingdom]["totalWins"]++;
                kingdomsData[attackingKingdom][attackingGeneral]["wins"]++;
                kingdomsData[attackingKingdom][attackingGeneral]["army"] = Math.floor(1.1 * kingdomsData[attackingKingdom][attackingGeneral]["army"]);

                kingdomsData[defendingKingdom]["totalLosses"]++;
                kingdomsData[defendingKingdom][defendingGeneral]["losses"]++;
                kingdomsData[defendingKingdom][defendingGeneral]["army"] = Math.floor(0.9 * kingdomsData[defendingKingdom][defendingGeneral]["army"]);

            } else if (kingdomsData[attackingKingdom][attackingGeneral]["army"] < kingdomsData[defendingKingdom][defendingGeneral]["army"]) {

                kingdomsData[attackingKingdom]["totalLosses"]++;
                kingdomsData[attackingKingdom][attackingGeneral]["losses"]++;
                kingdomsData[attackingKingdom][attackingGeneral]["army"] = Math.floor(0.9 * kingdomsData[attackingKingdom][attackingGeneral]["army"]);

                kingdomsData[defendingKingdom]["totalWins"]++;
                kingdomsData[defendingKingdom][defendingGeneral]["wins"]++;
                kingdomsData[defendingKingdom][defendingGeneral]["army"] = Math.floor(1.1 * kingdomsData[defendingKingdom][defendingGeneral]["army"]);
            }
        }
    }

    let winner = Object.keys(kingdomsData)
        .sort((k1, k2) => k1.localeCompare(k2))
        .sort((k1, k2) => kingdomsData[k2]["totalWins"] - kingdomsData[k1]["totalWins"])
        .sort((k1, k2) => kingdomsData[k1]["totalLosses"] - kingdomsData[k2]["totalLosses"])
        .shift();
    console.log(`Winner: ${winner} `);
    let sortedGenerals = Object.keys(kingdomsData[winner])
        .filter(k => k !== "totalWins" && k !== "totalLosses")
        .sort((g1, g2) => kingdomsData[winner][g2]["army"] - kingdomsData[winner][g1]["army"]);


    for (let general of sortedGenerals) {
        console.log(`/\\general: ${general}`);
        console.log(`---army: ${kingdomsData[winner][general]["army"]}`);
        console.log(`---wins: ${kingdomsData[winner][general]["wins"]}`);
        console.log(`---losses: ${kingdomsData[winner][general]["losses"]}`);
    }
}

solution(
    [
        {kingdom: "Maiden Way", general: "Merek", army: 5000},
        {kingdom: "Stonegate", general: "Ulric", army: 4900},
        {kingdom: "Stonegate", general: "Doran", army: 70000},
        {kingdom: "YorkenShire", general: "Quinn", army: 0},
        {kingdom: "YorkenShire", general: "Quinn", army: 2000},
        {kingdom: "Maiden Way", general: "Berinon", army: 100000}],
    [
        ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"]
    ]);
//
// solution(
//     [
//         {kingdom: "Stonegate", general: "Ulric", army: 5000},
//         {kingdom: "Maiden Way", general: "Berinon", army: 1000},
//         {kingdom: "YorkenShire", general: "Quinn", army: 5000}],
//     [
//         ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
//         ["Maiden Way", "Berinon", "YorkenShire", "Quinn"]]);