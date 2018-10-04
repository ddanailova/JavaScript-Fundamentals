function matchTheDates(text) {
    let regex =/\b([0-9]{1,2})-([A-Z]{1}[a-z]{2})-([0-9]{4})\b/g;
    let ex;
    while(ex = regex.exec(text.join(' '))){
        console.log(`${ex[0]} (Day: ${ex[1]}, Month: ${ex[2]}, Year: ${ex[3]})`);
    }
}

matchTheDates([
    'I am born on 30-Dec-1994.',
    'This is not date: 511-Jan-1996.',
    'My father is born on the 29-Jul-1955.']);