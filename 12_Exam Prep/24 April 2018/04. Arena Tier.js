function solution(inputArr) {

    let gladiators = new Map();
    for (let inputLine of inputArr) {
        if (inputLine === "Ave Cesar") {

            let sortedNames = Array.from(gladiators.keys()).sort((g1,g2)=>{
                 let diff = compateTotalSkils(gladiators.get(g1), gladiators.get(g2));
                 if(diff === 0){
                    return g2.localeCompare(g1);
                }else{
                    return  -diff;
                }
            });
            for (let gladiator of sortedNames) {
                let totalSkils = Array.from(gladiators.get(gladiator).values()).reduce((a, b) => a + b);
                console.log(`${gladiator}: ${totalSkils} skill`);
                let sortedSkills = Array.from(gladiators.get(gladiator).keys()).sort((s1,s2)=>{
                    let skill1 = gladiators.get(gladiator).get(s1);
                    let skill2 =gladiators.get(gladiator).get(s2)
                    if(skill1 - skill2 !== 0){
                        return skill2 - skill1;
                    }else{
                        return s1.localeCompare(s2);
                    }
                });
                for (let skill of sortedSkills) {
                    console.log(`- ${skill} <!> ${gladiators.get(gladiator).get(skill)}`);
                }
            }
        }
        if (inputLine.includes("->")) {
            let [name, technique, skill] = inputLine.split(/\s*->\s*/);
            if (!gladiators.has(name)) {
                gladiators.set(name, new Map);
                gladiators.get(name).set(technique, +skill);
            } else {
                if (!gladiators.get(name).has(technique)) {
                    gladiators.get(name).set(technique, +skill);
                } else {
                    if (gladiators.get(name).get(technique) < +skill) {
                        gladiators.get(name).set(technique, +skill);
                    }
                }
            }
        }

        if (inputLine.includes("vs")) {
            let [glad1, glad2] = inputLine.split(/\s*vs\s*/);
            if (gladiators.has(glad1) && gladiators.has(glad2)) {
                if (Array.from(gladiators.get(glad1).keys()).find(tech => Array.from(gladiators.get(glad2).keys()).includes(tech))) {
                    if(compateTotalSkils(gladiators.get(glad1),gladiators.get(glad2))>0){
                        gladiators.delete(glad2);
                    }else{
                        gladiators.delete(glad1);
                    }
                }
            }
        }
    }

    function compateTotalSkils(map1, map2) {
        let totalSkils1 = Array.from(map1.values()).reduce((a, b) => a + b);
        let totalSkils2 = Array.from(map2.values()).reduce((a, b) => a + b);

        return totalSkils1 - totalSkils2

    }
}

// solution([
//     "Pesho -> BattleCry -> 400",
//     "Gosho -> PowerPunch -> 300",
//     "Stamat -> Duck -> 200",
//     "Stamat -> Tiger -> 250",
//     "Ave Cesar",
// ]);

solution([
    "Pesho -> Duck -> 400",
    "Julius -> Shield -> 150",
    "Gladius -> Heal -> 200",
    "Gladius -> Support -> 250",
    "Gladius -> Shield -> 250",
    "Pesho vs Gladius",
    "Gladius vs Julius",
    "Gladius vs Gosho",
    "Ave Cesar",
]);