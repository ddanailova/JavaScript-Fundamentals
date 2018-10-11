function solution(inputArr) {
    let fruits = inputArr
        .map((line) => line.split(/\s+/).filter(e=>e!==""))
        .reduce((acc,cur)=>{
            let fruit = cur[0].toLowerCase();
            let amount = +cur[1]*1000;

            if(fruit === 'peach'){
                acc.peach += amount/140;
            }else if(fruit === 'plum'){
                acc.plum += amount/20;
            }else if(fruit === 'cherry'){
                acc.cherry += amount/9;
            }else{
                acc.other += amount/1000;
            }

            return acc;
    },{
            peach:0,
            plum:0,
            cherry:0,
            other:0
        });

    let cherryKompot = Math.floor(fruits.cherry/25);
    let peachKompot = Math.floor(fruits.peach/2.5);
    let plumKompot = Math.floor(fruits.plum/10);

    console.log(`Cherry kompots: ${cherryKompot}`);
    console.log(`Peach kompots: ${peachKompot}`);
    console.log(`Plum kompots: ${plumKompot}`);

    let forRakiya = (fruits.cherry % 25 + fruits.peach%2.5 + fruits.plum%10)/1000 + fruits.other;

    console.log(`Rakiya liters: ${(forRakiya*0.2).toFixed(2)}`);

}


// solution([
//     'apple 6',
//     'peach 25.158',
//     'strawberry 0.200',
//     'peach 0.1',
//     'banana 1.55',
//     'cherry 20.5',
//     'banana 16.8',
//     'grapes 205.65',
//     'watermelon 20.54'
// ]);

solution([
    'cherry 1.2',
    'peach 2.2',
    'plum 5.2',
    'peach 0.1',
    'cherry 0.2',
    'cherry 5.0',
    'plum 10',
    'cherry 20.0' ,
    'papaya 20' ])