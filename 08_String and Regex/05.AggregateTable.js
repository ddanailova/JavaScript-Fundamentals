function aggregateTable(input) {
    let towns=[];
    let sum=0;
    for (let inputElement of input) {
        towns.push(inputElement.split('|').map(e=>e.trim())[1]);
        sum+=Number(inputElement.split('|')[2]);
    }
    console.log(towns.join(", "));
    console.log(sum);
}

aggregateTable([
    '| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275'
]);