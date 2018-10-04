function sortArray(arr) {
    arr.sort().sort((a, b) => a.length > b.length);
    console.log(arr.join('\n'));
}

sortArray(['alpha', 'beta', 'gamma']);

// sortArray(["test",
//     "Deny",
//     "omen",
//     "Default"]);