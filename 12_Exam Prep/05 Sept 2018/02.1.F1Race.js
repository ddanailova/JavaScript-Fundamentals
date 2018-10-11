function solution(inputArr) {
    let raceGroup = inputArr[0].split(/\s+/).filter(e=>e!=="");

    let actions = {
        'Join': (pilot, group)=>{
            let cloneGroup = [].concat(group);
            if(!cloneGroup.includes(pilot)){
                cloneGroup.push(pilot);
            }
            return cloneGroup;
        },
        'Crash': (pilot, group)=>{
            let cloneGroup = [].concat(group);
            if(cloneGroup.includes(pilot)){
                let pilotPosition = cloneGroup.indexOf(pilot);
                cloneGroup.splice(pilotPosition,1);
            }
            return cloneGroup;
        },
        'Pit': (pilot, group)=>{
            let cloneGroup = [].concat(group);
            if(cloneGroup.includes(pilot)){
                let pilotPosition = cloneGroup.indexOf(pilot);
                if(pilotPosition<cloneGroup.length-1){
                    cloneGroup.splice(pilotPosition,1);
                    cloneGroup.splice(pilotPosition+1,0,pilot);
                }
            }
            return cloneGroup;
        },
        'Overtake': (pilot, group)=>{
            let cloneGroup = [].concat(group);
            if(cloneGroup.includes(pilot)){
                let pilotPosition = cloneGroup.indexOf(pilot);
                if(pilotPosition>0){
                    cloneGroup.splice(pilotPosition,1);
                    cloneGroup.splice(pilotPosition-1,0,pilot);
                }
            }
            return cloneGroup;
        },
    };

   let finalists = inputArr.slice(1).reduce((acc, cur)=>{
            let [action, pilot] = cur.split(/\s+/).filter(e=>e!=="");
            acc = actions[action](pilot, acc);
            return acc;
       },raceGroup);

    console.log(finalists.join(" ~ "));

}

solution([
    "Vetel Hamilton Slavi",
    "Pit Hamilton",
    "Overtake Vetel",
    "Crash Slavi"]);

solution([
    "Vetel Hamilton Raikonnen Botas Slavi",
    "Pit Hamilton",
    "Overtake LeClerc",
    "Join Ricardo",
    "Crash Botas",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Crash Slavi"])