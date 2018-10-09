function solve(stringArr) {
    let wordsArr = stringArr.join(" ").toLowerCase().split(/\W+/).filter(w=> w!=="").sort();
    let countMap= new Map();

    for (let word of wordsArr) {
        if (!countMap.has(word)){
            countMap.set(word, 0);
        }
        countMap.set(word, countMap.get(word)+1);
    }

    for (let [key,value] of countMap) {
        console.log(`'${key}' -> ${value} times`);
    }
}

solve(["Far too slow, you're far too slow", "Far too slow, you're far too slow"])