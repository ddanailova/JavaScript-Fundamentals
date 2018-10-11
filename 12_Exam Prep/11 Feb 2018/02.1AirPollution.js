function solution(inputMap, inputActions) {

    let cityMap = inputMap.map(line => line.split(/\s+/).filter(e=>e!==""))
        .map(row => row.map(col=>Number(col)));

    let actions = {
        breeze:(cityMap,row)=>{
            return cityMap.reduce((acc, cur, curIndex)=>{
                if(curIndex===row){
                    acc.push(cur.map(c=>Math.max(c-15,0)));
                }else{
                    acc.push(cur);
                }
                return acc;
            },[]);
        },
        gale:(cityMap,col)=>{
            return cityMap.reduce((acc, cur)=>{
                acc.push(cur.map((c, i)=> i === col ? Math.max(c-20,0): c));
                return acc;
            },[]);
        },
        smog:(cityMap,value)=>{
            return cityMap.map(r=>r.map(c=>c+value));
        },
    };

    let resultMap = inputActions.map(line=> line.split(/\s+/).filter(e=>e!==""))
        .reduce((acc, cur) =>{
            let action = cur[0];
            let number = +cur[1];

            return actions[action](acc, number);
        }, cityMap);

    let polluted = resultMap.reduce((acc, cur , curIndex)=>{
       let curPolluted = cur.map((c,i)=> c >= 50? `[${curIndex}-${i}]`: null).filter(e=> e !== null);
        return acc.concat(curPolluted);
    },[]);

    if(polluted.length === 0){
        console.log('No polluted areas');
    }else{
        console.log(`Polluted areas: ${polluted.join(", ")}`);
    }
}

// solution(
//     [
//         "5 7 72 14 4",
//         "41 35 37 27 33",
//         "23 16 27 42 12",
//         "2 20 28 39 14",
//         "16 34 31 10 24",
//     ], [
//         "breeze 1",
//         "gale 2",
//         "smog 25"
//     ]);

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

// solution(
//     [
//         "5 7 2 14 4",
//         "21 14 2 5 3",
//         "3 16 7 42 12",
//         "2 20 8 39 14",
//         "7 34 1 10 24",
//     ], [
//         "breeze 1",
//         "gale 2",
//         "smog 35"
//     ]);