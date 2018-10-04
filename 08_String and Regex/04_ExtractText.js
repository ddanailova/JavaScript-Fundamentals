function extractText(text) {
    let regex= /\((.*?)\)/g;
    let element;
    let result=[];
    while(element = regex.exec(text)){
        result.push(element[1]);
    }
    console.log(result.join(", "));
}

extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)'
);
