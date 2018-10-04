function matchAllWords(text) {
    let regex=/\w+/g;
    console.log(text.match(regex).join('|'));
}

matchAllWords('_(Underscores) are also word characters');