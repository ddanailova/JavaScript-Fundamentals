function stars(count) {
    let output = "";
    for (let i = 1; i <= count; i++) {
        output+="*".repeat(i)+"\n";

    }
    for (let i = count-1; i > 0; i--) {
        output+="*".repeat(i)+"\n";

    }
    return output;
}

console.log(stars(4));