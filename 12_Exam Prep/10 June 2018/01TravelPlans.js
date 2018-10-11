function solution(inputArr) {
    let totalGold = 0;
    let pro = ["programming", "hardware maintenance", "cooking", "translating", "designing"];
    let avrg = ["driving", "managing", "fishing", "gardening"];
    let bad = ["singing", "accounting", "teaching", "exam-making", "acting", "writing", "lecturing", "modeling", "nursing"];
    let counterBad = 0;
    let counterGood = 0;

    for (const inputLine of inputArr) {
        let [profession, gold] = inputLine.split(/\s*:\s*/);
        profession = profession.toLowerCase();
        gold = Number(gold);
        if (pro.includes(profession) && gold >= 200) {
            counterGood++;
            let bonusGold = 0;
            bonusGold = counterGood % 2 === 0 ? 200 : 0;
            gold *= 0.8;
            totalGold += (gold + bonusGold);
        } else if (avrg.includes(profession)) {
            totalGold += gold;
        } else if (bad.includes(profession)) {
            counterBad++;
            if (counterBad % 2 === 0) {
                totalGold += 0.95 * gold;
            } else if (counterBad % 3 === 0) {
                totalGold += 0.9 * gold;
            } else {
                totalGold += +gold;
            }
        }
    }

    console.log(`Final sum: ${totalGold.toFixed(2)}`);
    if (totalGold >= 1000) {
        console.log(`Mariyka earned ${(totalGold-1000).toFixed(2)} gold more.`);
    } else {
        console.log(`Mariyka need to earn ${(1000-totalGold).toFixed(2)} gold more to continue in the next task.`);
    }
}


solution(["Programming : 500",
    "Driving : 243",
    "Singing : 100",
    "Cooking : 199"
]);

solution([
    "Programming : 500",
    "Driving : 243.55",
    "Acting : 200",
    "Singing : 100",
    "Cooking : 199",
    "Hardware maintenance : 800",
    "Gardening : 700",
    "Programming : 500"
]);