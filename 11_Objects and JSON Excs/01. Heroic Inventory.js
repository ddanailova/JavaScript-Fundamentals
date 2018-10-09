<<<<<<< HEAD
function solve(inputArr) {
    let heroesArr =[];
    for (let heroeData of inputArr) {
        let [name, level, items] =heroeData.split(/ \/ /).filter(e=>e!=="");
        if(items){
            items = items.split(',').map(e=>e.trim());
        }else{
            items=[]
        }
        heroesArr.push({name:name, level:+level, items:items});
    }
    console.log(JSON.stringify(heroesArr));
}

solve(['Isacc / 25 / ',
    'Derek / 12 / BarrelVest, DestructionSword',
=======
function solve(inputArr) {
    let heroesArr =[];
    for (let heroeData of inputArr) {
        let [name, level, items] =heroeData.split(/ \/ /).filter(e=>e!=="");
        if(items){
            items = items.split(',').map(e=>e.trim());
        }else{
            items=[]
        }
        heroesArr.push({name:name, level:+level, items:items});
    }
    console.log(JSON.stringify(heroesArr));
}

solve(['Isacc / 25 / ',
    'Derek / 12 / BarrelVest, DestructionSword',
>>>>>>> 2802e337c6b0a8f5585b8bcbf1753b49210c47c3
    'Hes / 1 / Desolator, Sentinel, Antara']);