function  palindrom(word) {
    let reversedWord = word.split("").reverse().join("");

    if (reversedWord === word){
        return "true";
    } else {
        return "false";
    }
}

console.log(palindrom("pesho"));
console.log(palindrom("unitinu"));