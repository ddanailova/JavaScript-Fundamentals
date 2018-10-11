function solution(inputArr) {
    let countiesList = {};
    for (let inputLine of inputArr) {
        let [country, town, cost] = inputLine.split(/\s*>\s*/);
        town = Array.from(town).map((e, i) => i === 0 ? e.toUpperCase() : e).join("");
        if (!countiesList.hasOwnProperty(country)) {
            countiesList[country] = {};
        }
        if (!countiesList[country].hasOwnProperty(town)) {
            countiesList[country][town] = Number.MAX_SAFE_INTEGER;
        }
        if (countiesList[country][town] > cost) {
            countiesList[country][town] = cost;

        }
    }
    let sortedCountries = Object.keys(countiesList).sort();
    for (let country of sortedCountries) {
        let outputLine = country + " ->";
        let sortedTowns = Object.keys(countiesList[country]).sort((t1, t2)=>countiesList[country][t1] - countiesList[country][t2]);
        for (let town of sortedTowns) {
            outputLine +=` ${town} -> ${countiesList[country][town]}`;
        }

        console.log(outputLine);
    }
}

solution([
    "Bulgaria > Sofia > 500",
    "Bulgaria > sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);