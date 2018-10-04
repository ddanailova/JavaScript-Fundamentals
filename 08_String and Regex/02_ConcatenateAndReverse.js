function concatAndReverse(arr) {
    return arr.join('').split('').reverse().join('');
}

console.log(concatAndReverse(['I', 'love', 'icecream']));