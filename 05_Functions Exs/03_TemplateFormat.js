function quizData(arr){
    let xml= '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';
    for (let i = 0; i < arr.length; i+=2) {
        xml+=formFiller(arr[i], arr[i+1]);
    }
    function formFiller(question, answer) {
        return`\t<question>
        ${question}
    </question>
    <answer>
        ${answer}
    </answer>\n`
    }
    console.log(xml+"</quiz>");
}

quizData(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]);

