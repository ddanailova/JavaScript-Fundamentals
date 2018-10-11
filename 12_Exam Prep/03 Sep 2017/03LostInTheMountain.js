function solution(keywords, input) {
    let patterNorth = /north\D*([1-9][0-9]).*?,\D*([0-9]{6})/gmi;
    let patterEast = /east.*?([1-9][0-9]).*?,.*?([0-9]{6})/gmi;
    let patternMassage = new RegExp(`${keywords}(.+)${keywords}`,'gm');
    let ecexNorth = patterNorth.exec(input);
    let ecexEast = patterEast.exec(input);
    let latitude;
    let longitude;
    while (ecexNorth) {
        latitude = ecexNorth[1] + "." + ecexNorth[2] + " N";
        ecexNorth = patterNorth.exec(input);
    }
    while (ecexEast) {
        longitude = ecexEast[1] + "." + ecexEast[2] + " E";
        ecexEast = patterEast.exec(input);
    }

    let massage = patternMassage.exec(input);

    console.log(latitude);
    console.log(longitude);
    console.log(`Message: ${massage[1]}`);
}

function solve(keyword, text) {
    let pattern = /(north|east)\D*([1-9][0-9]).*?(,)\D*([0-9]{6})/gmi;
    let messagePattern = new RegExp(`(${keyword})(.*?)(${keyword})`, 'g');
    let message = messagePattern.exec(text)[2];

    let latOutput = '';
    let longOutput = '';
    let match = pattern.exec(text);
    while (match) {
        if (match[1].toLowerCase() === 'north') {
            latOutput = `${match[2]}.${match[4]} N`;
        } else {
            longOutput = `${match[2]}.${match[4]} E`;
        }
        match = pattern.exec(text);
    }

    console.log(latOutput);
    console.log(longOutput);
    console.log(`Message: ${message}`);
}

// solution('<>', 'o u%&lu43t&^ftgv><nortH4276hrv756dcc,  jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b');
solve("4ds", "eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532");