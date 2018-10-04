function upper(text) {
    return text.split(/\W+/).filter(w=>w!==" ").map(w=>w.toUpperCase()).join(', ');
}

console.log(upper('Hi, how are you?'));