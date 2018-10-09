function  solve(inputText) {
    let inputArr = inputText.join(" ").split(/\W+/).filter(w=>w !== "");
    let wordsObj = {};

    for (let word of inputArr) {
        if (!wordsObj.hasOwnProperty(word)){
            wordsObj[word]=0;
        }
        wordsObj[word]++
    }

    console.log(JSON.stringify(wordsObj));
}

solve(["Far too slow, you're far too slow", "Far too slow, you're far too slow"]);