function solve(input) {
    let townsObj = {};
    for (let i = 0; i < input.length-1; i+=2) {
       if (!townsObj.hasOwnProperty(input[i])){
           townsObj[input[i]] = 0;
       }
        townsObj[input[i]] += +input[i+1];
    }
    console.log(JSON.stringify(townsObj));
}

solve(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'Varna', '4']);