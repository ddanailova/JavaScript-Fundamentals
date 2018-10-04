function wordOccurences (text, targetWord) {
    let pattern = new RegExp(`\\b${targetWord}\\b`, 'gi');
    if(text.match(pattern)){
        console.log(text.match(pattern).length);
    }else {
        console.log("0");
    }
}
wordOccurences("There was one. Therefore I bought it. I wouldn�t buy it otherwise.",
    "there",);