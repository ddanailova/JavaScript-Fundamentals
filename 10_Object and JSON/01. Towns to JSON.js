function  solve(input) {
    let arr=[];
    input.shift();

    for (let line of input) {
        line=line.split(/\s*\|\s*/).filter(w =>w!=="");
        arr.push({Town:line[0],Latitude:+line[1],Longitude:+line[2] })
    }

    console.log(JSON.stringify(arr));
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);