function solve(inputString) {
    let inputObj = JSON.parse(inputString);

    let html = '<table>\n\t<tr>';
    function htmlEscape(str){
        return str.replace(/&/g,'&amp;')
            .replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;')
            .replace(/'/g,'&#39;');
    };

    for (const key in inputObj[0]) {
        html+=`<th>${htmlEscape(key)}</th>`
    }
    html+='</tr>\n';

    for (let line of inputObj) {
        html+='\t<tr>';
        for (const item in line) {
            html+=`<td>${htmlEscape(line[item].toString())}</td>`;
        }
        html+='</tr>\n';
    }
    console.log(html+'</table>');
}

solve('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');