function lettersPrint(text) {
    text.split("").map((e,i)=> console.log(`str[${i}] -> ${e}`));
}

lettersPrint('SoftUni');