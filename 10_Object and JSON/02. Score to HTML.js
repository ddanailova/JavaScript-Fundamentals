<<<<<<< HEAD
function solve(input) {
    let objArr = JSON.parse(input);
    let html = '<table>\n\t<tr><th>name</th><th>score</th></tr>\n';
    function htmlEscape(str){
        return str.replace(/&/g,'&amp;')
            .replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;')
            .replace(/'/g,'&#39;');
    };

    for (let line of objArr) {
        html+=`\t<tr><td>${htmlEscape(line["name"])}</td><td>${line["score"]}</td></tr>\n`;
    }

    console.log(html+"</table>");
}

=======
function solve(input) {
    let objArr = JSON.parse(input);
    let html = '<table>\n\t<tr><th>name</th><th>score</th></tr>\n';
    function htmlEscape(str){
        return str.replace(/&/g,'&amp;')
            .replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;')
            .replace(/'/g,'&#39;');
    };

    for (let line of objArr) {
        html+=`\t<tr><td>${htmlEscape(line["name"])}</td><td>${line["score"]}</td></tr>\n`;
    }

    console.log(html+"</table>");
}

>>>>>>> 2802e337c6b0a8f5585b8bcbf1753b49210c47c3
solve('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');