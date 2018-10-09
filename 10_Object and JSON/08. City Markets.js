function solve(inputArr) {
    let townsMap = new Map();

    for (let dataLine of inputArr) {
        dataLine = dataLine.split(/\s* -> \s*|\s*: \s*/).filter(w=> w!=="")
        let town = dataLine[0];
        let product = dataLine[1];
        let profit = +dataLine[2] * +dataLine[3];
        if (!townsMap.has(town)){
            townsMap.set(town, new Map())
        }
        townsMap.set(town, townsMap.get(town).set(product, profit));
    }
    for (let [town, sales] of townsMap) {
        console.log(`Town - ${town}`);
        for (let [product, profit] of sales) {
            console.log(`$$$${product} : ${profit}`);
        }
    }
}

solve(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']);