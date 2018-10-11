function solution(inputText) {
    let key = inputText[0];
    let codedText = inputText.slice(1);
    let pattern = new RegExp(`( |^)${key}[ ]+([A-Z!%$#]{8,})( |\\.|,|$)`, "gi");
    for (let lineIndex in codedText) {
        let match = pattern.exec(codedText[lineIndex]);
        while (match) {
            let massage = match[2];
            if (massage.toUpperCase() === match[2]) {
                massage = massage.toLowerCase();
                massage = massage.replace(/!/g, "1");
                massage = massage.replace(/%/g, "2");
                massage = massage.replace(/#/g, "3");
                massage = massage.replace(/\$/g, "4");
                codedText[lineIndex] = codedText[lineIndex].replace(match[2], massage);
            }
            match = pattern.exec(codedText[lineIndex]);
        }
    }
    console.log(codedText.join("\n"));
}

solution([
    "specialKey",
    "In this text the specialKey HELLOWORLD! is correct, but",
    "the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while",
    "SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!",
]);

function spyMaster(input) {
    "use strict";
    let specialKey = input.shift();
    let messagePattern = "((?: |^)";
    for (let i = 0; i < specialKey.length; i++) {
        messagePattern += "[" + specialKey[i].toLowerCase() + specialKey.toUpperCase() + "]";
    }

    messagePattern += "[ ]+)([!#$%A-Z]{8,})( |\\.|,|$)";
    let messageRegex = new RegExp(messagePattern, 'g');

    console.log(messagePattern);
    for (let i = 0; i < input.length; i++) {
        let line = input[i].replace(messageRegex, replacer);
        console.log(line);
    }

    function replacer(match, group1, group2, group3) {
        group2 = group2.replace(/!/g, '1')
            .replace(/%/g, '2')
            .replace(/#/g, '3')
            .replace(/\$/g, '4')
            .replace(/[A-Z]/g, x => x.toLowerCase());
        return group1 + group2 + group3;
    }
}

// spyMaster([
//     "specialKey",
//     "In this text the specialKey HELLOWORLD! is correct, but",
//     "the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while",
//     "SSpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!",
// ])

