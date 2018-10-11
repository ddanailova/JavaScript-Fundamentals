function solution(inputArr) {

    let genomeMap = new Map();
    loop:
        for (let inputLine of inputArr) {
            if (inputLine === "Stop!") {
                let sorttedKeys = Array.from(genomeMap.keys()).sort((a,b)=>genomeMap.get(b)-genomeMap.get(a));
                for (let key of sorttedKeys) {
                    console.log(`${key} has genome size of ${genomeMap.get(key)}`);
                }

            } else {
                if (!inputLine.indexOf("=")) {
                    continue;
                } else {
                    let [nameRaw, dataRaw] = inputLine.split('=');
                    let regexName = /^[a-zA-Z!@#$?]+$/g;
                    let regexData = /^([\d]+)--([\d]+)<<([a-zA-Z]+)$/g;

                    if (nameRaw.match(regexName) && dataRaw.match(regexData)) {
                        let name = nameRaw.match(/[a-zA-Z]+/g).join("");
                        let exec = regexData.exec(dataRaw);
                        let size = +exec[1];

                        if (size !==  name.length) {
                            break loop;
                        }
                        else{
                            let animal = exec[3];
                            let genom = +exec[2];
                            if(!genomeMap.has(animal)){
                                genomeMap.set(animal, 0);
                            }
                            genomeMap.set(animal, genomeMap.get(animal)+ genom);
                        }
                    }
                }
            }
        }
}

// solution([
//     "!@ab?si?di!a@=7--152<<human",
//     "b!etu?la@=6--321<<dog",
//     "!curtob@acter##ium$=14--230<<dog",
//     "!some@thin@g##=9<<human",
//     "Stop!"
// ]);

solution([
    "=12<<cat",
    "!vi@rus?=2--142",
    "?!cur##viba@cter!!=11--800<<cat",
    "!fre?esia#=7--450<<mouse",
    "@pa!rcuba@cteria$=13--351<<mouse",
    "!richel#ia??=8--900<<human",
    "Stop!"])

// solution([
//     "!@ру?би#=4--57<<polecat ",
//     "?do?@#ri#=4--89<<polecat",
//     "=12<<cat",
//     "!vi@rus?=2--142",
//     "@pa!rcu>ba@cteria$=13--234<<mouse",
//     "?!cur##viba@cter!!=11--680<<cat",
//     "Stop!",
// ])