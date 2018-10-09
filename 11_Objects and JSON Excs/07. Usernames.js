function solution(inputArr) {

    let userNames = new Set();

    for (let name of inputArr) {
            userNames.add(name);
    }

    let sorttedNames = Array.from(userNames).sort((k1, k2)=>{
        let len = k1.length - k2.length;
    if(len === 0){
        return k1.localeCompare(k2);
    }else{
        return len;
    }});

    console.log(sorttedNames.join("\n"));
}

solution([
    "Denise",
    "Ignatius",
    "Iris",
    "Isacc",
    "Indie",
    "Dean",
    "Donatello",
    "Enfuego",
    "Benjamin",
    "Biser",
    "Bounty",
    "Renard",
    "Rot"
]);