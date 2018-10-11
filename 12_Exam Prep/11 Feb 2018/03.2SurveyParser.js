function solution(input) {
    let validPattern1 = /.*(<svg>.*<\/svg>).*/gm;
    let validPattern2 = /<svg>.*<cat>.*<text>.*\[(.+)\].*<\/text>.*<\/cat>.*<cat>(.+)<\/cat><\/svg>/gm;

    let survey;

    if (survey = input.match(validPattern1)) {

        let matches = validPattern2.exec(survey);
        if (matches) {
            let label = matches[1];
            let ratingStr = matches[2];
            let extractor = /<g><val>([1-9]|10)<\/val>(0|[1-9][0-9]*)<\/g>/gm;
            let totalVotes = 0;
            let totalCount = 0;
            let ratings = extractor.exec(ratingStr);

            while(ratings){
                totalVotes +=Number(ratings[1])*Number(ratings[2]);
                totalCount +=Number(ratings[2]);
                ratings = extractor.exec(ratingStr);
            }

            let avrg = (totalVotes/totalCount).toFixed(2);
            console.log(`${label}: ${+avrg}`);

        } else {
            console.log("Invalid format");
        }

    } else {
        console.log("No survey found");
    }
}

// solution('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>');
solution('<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>');
// solution('<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It\'s great, don\'t mess with it!</p><p>I\'d like to have the option for delivery</p> ');
// solution('<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>');