function solve(inputArr) {
    let productArr = new Map();
    for (let dataLine of inputArr) {
        let [town, product, price] = dataLine.split(/\s*\|\s*/)
        if (!productArr.has(product)) {
            productArr.set(product, new Map());
        }
        productArr.get(product).set(town, +price);
    }
    for (let [product, townSales] of productArr) {

        let sortedTowns = Array.from(townSales.keys()).sort((k1,k2)=>{
            return townSales.get(k1)-townSales.get(k2);
        });
        console.log(`${product} -> ${townSales.get(sortedTowns[0])} (${sortedTowns[0]})`);
    }
}



solution(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);