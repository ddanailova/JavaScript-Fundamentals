function dollers(num) {
    for (let i = 0; i < num; i++) {
        let line = "";
        for (let j = 0; j < i+1; j++) {
            line +="$";
        }
        console.log(line);
    }
}

function dolls(num){
    for (let i = 0; i < num; i++) {
        console.log("$".repeat(i+1));
    }
}

dolls(6);
