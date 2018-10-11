function solution(input) {
    if (!input.includes("<svg>") || !input.includes("</svg>")) {
        console.log(`No survey found`);
        return;
    }

    let dataLine = input.split("<svg>");
    dataLine.shift();
    dataLine = dataLine[0].split("</svg>");
    dataLine.pop();

    let patternValidator = /<cat><text>(.+)\[(.+)\]<\/text><\/cat>\s*<cat>(<g><val>.*<\/val>.*<\/g>)+<\/cat>/gm;

    if (!patternValidator.test(dataLine[0])) {
        console.log(`Invalid format`);
        return;
    }
    let ratingExtractor = /<g><val>(10|[1-9])<\/val>(0|([1-9][0-9]*))<\/g>/gm;
    dataLine = dataLine[0].split(/<\/cat>\s*<cat>/);
    let label = dataLine[0].split("[")[1].split("]")[0];
    let ratingData = dataLine[1].replace("</cat>", "");
    let extract = ratingExtractor.exec(ratingData);
    let totalRatings = 0;
    let totalCount = 0;
    while (extract) {
        if (!extract) {
            console.log(`Invalid format`);
            return;
        }
        totalCount+=Number(extract[2]);
        totalRatings+=Number(extract[1])*Number(extract[2]);
        extract = ratingExtractor.exec(ratingData);
    }
    console.log(`${label}: ${Number((totalRatings/totalCount).toFixed(2))}`);
}

solution('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>');
solution('<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>');
solution('<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It\'s great, don\'t mess with it!</p><p>I\'d like to have the option for delivery</p> ');
solution('<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>');