function solution(inputArr) {
    let pilots = inputArr.shift().split(/\s+/);

    let actions = {
        "join": (pilot) => {
            if (!pilots.includes(pilot)) {
                pilots.push(pilot);
                return pilots;
            }
        },
        "crash": (pilot) => {
            if (pilots.includes(pilot)) {
                let pilotIndex = pilots.indexOf(pilot);
                pilots.splice(pilotIndex, 1);
                return pilots;
            }
        },
        "pit": (pilot) => {
            if (pilots.includes(pilot) && pilots.length>1) {
                let pilotIndex = pilots.indexOf(pilot);
                pilots.splice(pilotIndex, 1);
                pilots.splice(pilotIndex + 1, 0, pilot);
                return pilots;
            }
        },
        "overtake": (pilot) => {
            if (pilots.includes(pilot) && pilots.length>1) {
                let pilotIndex = pilots.indexOf(pilot);
                pilots.splice(pilotIndex, 1);
                pilots.splice(pilotIndex - 1, 0, pilot);
                return pilots;
            }
        },
    }

    for (let i = 0; i < inputArr.length; i++) {
        let [action, name] = inputArr[i].split(/\s+/);
        if(!(i=== inputArr.length-1 && pilots.length === 1)){
            action = action.toLowerCase();
           actions[action](name);
        }
    }
    // for (let inputLine of inputArr) {
    //     let [action, name] = inputLine.split(/\s+/);
    //     action = action.toLowerCase();
    //     actions[action](name);
    // }
    //
    console.log(pilots.join(" ~ "));
}

solution([
    "Vetel",
    "Pit Hamilton",
    "Overtake Vetel",
    "Crash Vetel"]);

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