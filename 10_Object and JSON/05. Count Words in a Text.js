<<<<<<< HEAD
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

=======
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

>>>>>>> 2802e337c6b0a8f5585b8bcbf1753b49210c47c3
solve(["Far too slow, you're far too slow", "Far too slow, you're far too slow"]);