'use strict';
function solution(inputString) {
    let regexMassage = /^<message(\s+[a-z]+="[0-9a-zA-z .]+"){1,}>(.+)<\/message>$/s;
    let regexSender = /.* from="([0-9a-zA-Z. ]+).*/;
    let regexReciever = /.* to="([0-9a-zA-Z. ]+).*/;

    if (inputString.match(regexMassage)) {
        let inputSplitted = inputString.split(">").filter(e => e !== "");
        let massage = inputSplitted[1].split("<").filter(e => e !== "").shift().replace("\\n","\n").split("\n");
        let atributes = inputSplitted[0];

        if (atributes.match(regexReciever) && atributes.match(regexSender)) {
            let sender = regexSender.exec(atributes)[1];
            let reciever = regexReciever.exec(atributes)[1];
            let html =
                `<article>
    <div>From: <span class="sender">${sender}</span></div>
    <div>To: <span class="recipient">${reciever}</span></div>
    <div>
        <p>${massage.join("</p>\n\t\t<p>")}</p>
    </div>
</article>`;
            console.log(html);
        } else {
            console.log("Missing attributes");
        }
    } else {
        console.log("Invalid message format");
    }
}

solution(`<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old
Let's go out for a beer</message>`);
// solution('<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what\'s up?</message>');
// solution('<message from="Ivan Ivanov" to="Grace">Not much, just chillin. How about you?</message>');
//solution('<message to="MasterBlaster" from="TheAnimal" timestamp="1497254114">Same old, same old\\nLet\'s go out for a beer</message>');
// solution('<message version="2.0" to="Alice" from="Charlie">TGIF!</message>');

