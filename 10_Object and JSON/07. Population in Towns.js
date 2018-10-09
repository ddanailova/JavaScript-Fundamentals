<<<<<<< HEAD
function solve(inputArr) {
    let townsMap = new Map();
    for (let dataPair of inputArr) {
        dataPair = dataPair.split(/\s*<->\s*/);
        let town= dataPair[0];
        let population = +dataPair[1];
        if(!townsMap.has(town)){
         townsMap.set(town, 0);
        }
        townsMap.set(town, townsMap.get(town)+population)
    }
    for (let [key, value] of townsMap) {
        console.log(`${key} : ${value}`);
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
=======
function solve(inputArr) {
    let townsMap = new Map();
    for (let dataPair of inputArr) {
        dataPair = dataPair.split(/\s*<->\s*/);
        let town= dataPair[0];
        let population = +dataPair[1];
        if(!townsMap.has(town)){
         townsMap.set(town, 0);
        }
        townsMap.set(town, townsMap.get(town)+population)
    }
    for (let [key, value] of townsMap) {
        console.log(`${key} : ${value}`);
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
>>>>>>> 2802e337c6b0a8f5585b8bcbf1753b49210c47c3
    'Sofia <-> 1200000']);