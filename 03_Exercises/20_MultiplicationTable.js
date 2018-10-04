function calc(size) {
    let html = '<table border="1">\n';
    for (let row = 0; row <= size; row++) {
        html+='\t<tr>';
        for (let col = 0; col <= size; col++) {
            if (row === 0 && col === 0) {
                html += '<th>x</th>';
            } else if (col===0) {
                html += `<th>${row}</th>`;
            }else if (row===0) {
                html += `<th>${col}</th>`;
            }
            else {
                html += `<td>${col * row}</td>`;
            }
        }
        html += '</tr>\n'
    }
    html += '</table>\n';

    console.log(html);
}

calc(5);