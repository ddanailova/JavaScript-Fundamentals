function matchMultiplication(text) {
    let pattern = /(-?[1-9][0-9]*)\s*?\*\s*?(-?[0-9]*\.[0-9]*)/g;
    text=text.replace(pattern, (all,gr1,gr2)=>+gr1*+gr2);
    console.log(text);
}
matchMultiplication('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');