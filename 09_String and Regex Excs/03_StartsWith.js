function startsWith(text, subText) {

    if(subText.length>text.length){
        console.log("false");
    }else{
        let start =text.substr(0, subText.length);
        if(start!==subText){
            console.log("false");
        }else{
            console.log("true");
        }
    }
}

startsWith('The quick brown fox...',
    'the quick brown fox...');