function printWithDelimiter(arr) {
    console.log(arr.slice(0, arr.length-1).join(arr.pop()));
}

printWithDelimiter(["One",
    "Two",
    "Three",
    "Four",
    "Five",
    "-"]);