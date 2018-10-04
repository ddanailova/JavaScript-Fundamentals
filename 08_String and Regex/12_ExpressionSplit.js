function expressionSplit(text) {
    let regex = /[\s(),;.]+/g;
    console.log(text.split(regex).join('\n'));
}

expressionSplit('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');