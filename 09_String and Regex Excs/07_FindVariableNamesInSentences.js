function findVariablesWithMatch(text) {
    let pattern =/\b_([a-zA-Z0-9]+)\b/g;
    console.log(text.match(pattern).map(e => e.substr(1)).join(','));
}
function findVariablesWithExec(text) {
    let pattern =/\b_([a-zA-Z0-9]+)\b/g;
    let variables =[];
    let exec;
    while (exec = pattern.exec(text)){
        variables.push(exec[1]);
    }
    console.log(variables.join(','));
}
findVariablesWithMatch('Calculate the _area of the _perfectRectangle object.');
findVariablesWithExec('Calculate the _area of the _perfectRectangle object.');