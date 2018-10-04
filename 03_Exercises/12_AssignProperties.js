function calc(input) {

    let obj = {};
    obj[input[0]] = input[1];
    obj[input[2]] = input[3];
    obj[input[4]] = input[5];

    console.log(obj);
}

calc(['name', 'Pesho', 'age', '23', 'gender', 'male']);