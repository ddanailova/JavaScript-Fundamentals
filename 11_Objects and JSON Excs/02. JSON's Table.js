function solve(inputArr) {
    let html = '<table>\n';
    for (let dataLine of inputArr) {
        dataLine=JSON.parse(dataLine);
        html+=`\t<tr>\n\t\t<td>${htmlEscape(dataLine["name"])}</td>\n\t\t<td>${htmlEscape(dataLine["position"])}</td>\n\t\t<td>${+dataLine["salary"]}</td>\n`;
        html+="\t</tr>\n"
    }
    console.log(html+'</table>');

    function htmlEscape(str){
        return str.replace(/&/g,'&amp;')
            .replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;')
            .replace(/'/g,'&#39;');
    };
}

solve(["{\"name\":\"Pesho\",\"position\":\"Promenliva\",\"salary\":100000}",
    "{\"name\":\"Teo\",\"position\":\"Lecturer\",\"salary\":1000}",
"{\"name\":\"Georgi\",\"position\":\"Lecturer\",\"salary\":1000}"]);