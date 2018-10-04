function endsWith(text, subText) {

    if(subText.length>text.length){
        console.log("false");
    }else{
        let end =text.substr(-subText.length);

        if(end!==subText){
            console.log("false");
        }else{
            console.log("true");
        }
    }
}

endsWith('The quick brown fox...',
    'Brown fox...');