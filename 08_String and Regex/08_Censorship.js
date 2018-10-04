function censorship(text, badWords) {
    for (let word of badWords) {
        while (text.indexOf(word)>-1){
            text = text.replace(word, "-".repeat(word.length))
        }
    }
    console.log(text);
}

censorship('roses are red, violets are blue roses are red, violets are blue', [', violets are', 'red']);