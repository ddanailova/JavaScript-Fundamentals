function count(text, letter) {

    let counter =0;
    for (let symbol of text) {
        if (symbol == letter){
            counter++;
        }
    }
    console.log(counter);
}

count("hello", "l");