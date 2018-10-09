<<<<<<< HEAD
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

=======
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

>>>>>>> 2802e337c6b0a8f5585b8bcbf1753b49210c47c3
solve(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'Varna', '4']);