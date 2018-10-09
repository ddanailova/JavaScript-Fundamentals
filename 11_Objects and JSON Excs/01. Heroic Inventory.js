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
    'Hes / 1 / Desolator, Sentinel, Antara']);