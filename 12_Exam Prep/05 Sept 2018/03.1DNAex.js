function solution(inputArr) {
    let pattern = /^(?<name>[a-z!@#$?]+)=(?<len>[\d]+)--(?<count>[\d]+)<<(?<animal>[a-z]+)$/;

    let DNAcatalog = inputArr
        .map((line) => {
        if (line !== "Stop!") {
            let match = pattern.exec(line);
            if (match){
                let decodedName = replaceSymbols(match.groups.name);
                let animal = match.groups.animal;
                let dnaCount=Number(match.groups.count);

                if(decodedName.length === +match.groups.len){
                    return [animal, dnaCount]
                }
            }
        }}).filter(e => e !== undefined)
        .reduce((acc, cur)=>{
            let animal = cur[0];
            let dnaCount=+cur[1];
            if(!acc.hasOwnProperty(animal)){
                acc[animal]=0;
            }
            acc[animal]+=dnaCount;
            return acc;
        },{});

    Object.keys(DNAcatalog)
        .sort((a,b)=> DNAcatalog[b] - DNAcatalog[a])
        .forEach(organism=>{
            console.log(`${organism} has genome size of ${DNAcatalog[organism]}`);
    });

    function replaceSymbols(input) {
        let clone = input;
         clone = clone.replace(/!|@|#|\$|\?/g,"");
         return clone;
    }
}

// solution([
//     "!@ab?si?di!a@=7--152<<human",
//     "b!etu?la@=6--321<<dog",
//     "!curtob@acter##ium$=14--230<<dog",
//     "!some@thin@g##=9<<human",
//     "Stop!"
// ]);

// solution([
//     "=12<<cat",
//     "!vi@rus?=2--142",
//     "?!cur##viba@cter!!=11--800<<cat",
//     "!fre?esia#=7--450<<mouse",
//     "@pa!rcuba@cteria$=13--351<<mouse",
//     "!richel#ia??=8--900<<human",
//     "Stop!"]);

solution([
    "!@ру?би#=4--57<<polecat ",
    "?do?@#ri#=4--89<<polecat",
    "=12<<cat",
    "!vi@rus?=2--142",
    "@pa!rcu>ba@cteria$=13--234<<mouse",
    "?!cur##viba@cter!!=11--680<<cat",
    "Stop!",
])