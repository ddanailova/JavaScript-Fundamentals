function solve(inputArr) {

    let wordsArr = inputArr.join(" ").toLowerCase().split(/\W+/).filter(w=>w!=="");
    let wordSet = new Set();

    for (let word of wordsArr) {
        wordSet.add(word);
    }

    console.log(Array.from(wordSet).join(', '));
}

solve(["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.",
    "Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.",
    "Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.",
    "Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.",
    "Morbi in ipsum varius, pharetra diam vel, mattis arcu.",
    "Integer ac turpis commodo, varius nulla sed, elementum lectus.",
    "Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus."]);