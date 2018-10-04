function solution(input) {

    let inches = parseInt(input/12);
    let feet = input%12;
    console.log(`${inches}'-${feet}"`);
}

solution(55);