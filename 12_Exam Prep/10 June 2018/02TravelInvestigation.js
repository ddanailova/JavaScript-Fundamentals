function solution(inputArr) {
    let delimiter = inputArr[1];
    let companies = inputArr[0].split(delimiter).map(c=>c.trim());
    inputArr = inputArr.slice(2, inputArr.length).map(s=>s.toLowerCase());

    let valid = [];
    let invalid = [];
    loop:
        for (const inputLine of inputArr) {
            for (let company of companies) {
                let companyRegex = RegExp(`\\b${company}\\b|'`,'g');
                if(!companyRegex.test(inputLine)){
                    invalid.push(inputLine);
                    continue loop;
                }
            }

            valid.push(inputLine);
        }

    if(valid.length>0){
        console.log("ValidSentences");
        for (let i = 0; i < valid.length; i++) {
            console.log(`${i+1}. ${valid[i]}`);
        }
    }
    if(valid.length>0&& invalid.length>0)
        console.log("==============================");
    if(invalid.length>0){
        console.log("InvalidSentences");
        for (let i = 0; i < invalid.length; i++) {
            console.log(`${i+1}. ${invalid[i]}`);
        }
    }
}

solution([
    "bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho e KoftiPochivkaLTD's Tip 123  ve MinkaTrans BulgariaTour",
    "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
    "someone continues as no "
]);

solution([
        "bulgariatour@, minkatrans@, koftipochivkaltd",
        "@,",
        "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
        "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
        "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"
])