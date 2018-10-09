function solution(inputProducts) {

    let catalogue = inputProducts.reduce((acc, cur)=>{
        let [product, price] = cur.split(/\s*:\s*/);
        let firstLetter =[...product.toUpperCase()].shift();
        if(!acc[firstLetter]){
            acc[firstLetter]={};
        }
        acc[firstLetter][product] = price;
        return acc;
    },{});

    Object.keys(catalogue).sort((a,b)=>a.localeCompare(b)).forEach((letter)=>{
        console.log(`${letter}`);
        Object.keys(catalogue[letter]).sort((a,b)=>a.localeCompare(b)).forEach((product)=>{
            console.log(`  ${product}: ${catalogue[letter][product]}`);
        })
    })
}

solution([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"
]);