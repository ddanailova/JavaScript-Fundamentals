function square(size) {
    let output ="";
    for (let i = 1; i <= size; i++) {
        output +="* ".repeat(size) +"\n";
    }
    return output;
}

console.log(square(5));