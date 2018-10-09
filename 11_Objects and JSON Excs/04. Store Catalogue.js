<<<<<<< HEAD
function solve(inputArr) {
    let catalogue = new Map();
    for (let line of inputArr) {
        let currentData = line.split(/\s*:\s*/);
        let product = currentData[0];
        catalogue.set(product, Number(currentData[1]));
    }

    let sortedProducts = Array.from(catalogue.keys()).sort();
    let oldLetter;
    for (let i = 0; i < sortedProducts.length; i++) {
        let currentLetter = Array.from(sortedProducts[i]).shift();

        if (i === 0 || currentLetter !== oldLetter) {
            console.log(`${currentLetter}`);
            console.log(`  ${sortedProducts[i]}: ${catalogue.get(sortedProducts[i])}`);
            oldLetter = currentLetter;
        }else{
            if(currentLetter === oldLetter){
                console.log(`  ${sortedProducts[i]}: ${catalogue.get(sortedProducts[i])}`);
            }
        }
    }
}

solve(["Appricot : 20.4",
"Fridge : 1500",
"TV : 1499",
"Deodorant : 10",
"Boiler : 300",
"Apple : 1.25",
"Anti-Bug Spray : 15",
=======
function solve(inputArr) {
    let catalogue = new Map();
    for (let line of inputArr) {
        let currentData = line.split(/\s*:\s*/);
        let product = currentData[0];
        catalogue.set(product, Number(currentData[1]));
    }

    let sortedProducts = Array.from(catalogue.keys()).sort();
    let oldLetter;
    for (let i = 0; i < sortedProducts.length; i++) {
        let currentLetter = Array.from(sortedProducts[i]).shift();

        if (i === 0 || currentLetter !== oldLetter) {
            console.log(`${currentLetter}`);
            console.log(`  ${sortedProducts[i]}: ${catalogue.get(sortedProducts[i])}`);
            oldLetter = currentLetter;
        }else{
            if(currentLetter === oldLetter){
                console.log(`  ${sortedProducts[i]}: ${catalogue.get(sortedProducts[i])}`);
            }
        }
    }
}

solve(["Appricot : 20.4",
"Fridge : 1500",
"TV : 1499",
"Deodorant : 10",
"Boiler : 300",
"Apple : 1.25",
"Anti-Bug Spray : 15",
>>>>>>> 2802e337c6b0a8f5585b8bcbf1753b49210c47c3
"T-Shirt : 10"]);