function solution(inputArr) {
    let startIndex = Number(inputArr[0]);
    let endIndex = Number(inputArr[1]);
    let replacmentStr = inputArr[2];
    let text = inputArr[3];
    let countryRegex = /\b([A-Z]{1}[a-z]+[A-Z]{1})\b/g;
    let country = (countryRegex.exec(text))[1];

    country = country.replace(country.slice(startIndex,endIndex+1).toString(), replacmentStr);
    let last = Array.from(country).pop().toLowerCase();
    country = country.substr(0,country.length-1)+last;
    let numberRegax = /([\d]{3}\.?[\d]*)/g;
    let city = text.match(numberRegax).map(e=>Math.ceil(+e)).map(n=>String.fromCharCode(n)).map((e,i)=> i===0?e.toUpperCase():e.toLowerCase()).join("");
    console.log(`${country} => ${city}`);


}

solution([
    "3",
    "5",
    "gar",
    "114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"
])

solution([
    "1",
    "4",
    "loveni",
    "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"])