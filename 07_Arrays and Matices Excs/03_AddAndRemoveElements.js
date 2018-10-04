function addOrRemove(commands) {
    let arr = [];
    let counter = 1;
    for (let command of commands) {
        command === "add" ? arr.push(counter) : arr.pop();
        counter++;
    }
    (arr.length>0)?console.log(arr.join('\n')):console.log("Empty");

}

addOrRemove(['add', 'add','remove', 'add', 'add',]);