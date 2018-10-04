function printEvryN(arr) {
    let step = arr.pop();
    console.log(arr.shift());
    arr.filter((e,i)=>(i+1)%step===0).map(e=>console.log(e));
}
printEvryN(['dsa',
    'asd',
    'test',
    'tset',
    '2'
])