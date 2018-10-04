function solve(input) {
    let number = Number(input[0]);
    let op =[input[1], input[2], input[3], input[4], input[5]];

    // 	chop – divide the number by two
    let chop = num => num / 2;

    // 	dice – square root of number
    let dice = num => Math.sqrt(num);

    // 	spice – add 1 to number
    let spice = num => ++num;

    // 	bake – multiply number by 3
    let bake = num => num * 3;

    // 	fillet – subtract 20% from number
    let fillet = num => 0.8 * num;


    function cook(number, command) {
        switch (command) {
            case "chop": return number = chop(number);
            case "dice": return number = dice(number);
            case "spice": return number = spice(number);
            case "bake": return number = bake(number);
            case "fillet": return number = fillet(number);
        }
    }

    for (let command of op) {
        number = cook(number, command);
        console.log(number);
    }
}

solve(["9", "dice","spice", "chop", "bake", "fillet"]);