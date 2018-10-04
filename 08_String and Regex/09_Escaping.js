'use strict';
function escape(arr) {
    let result = "<ul>\n";
    String.prototype.htmlEscape = function(){
        return this.replace(/&/g,'&amp;')
            .replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;')
            .replace(/'/g,'&#39;');
    }
    for (let text of arr) {
        result +=`  <li>${text.htmlEscape()}</li>\n`
    }
    console.log(result + '</ul>');
}

escape(['<b>unescaped text</b>', 'normal text']);