function calc(a, b, c) {
    //a*x2 + b*x +c =0
    // d = b2 - 4*a*c
    let d = b ** 2 - 4 * a * c;

    if (d > 0) {
        //x1 = (-b + √d) / (2*a)
        //x2 = (-b - √d) / (2*a)
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        console.log(x2);
        console.log(x1);
        return;
    } else if (d === 0) {
        //x = -b / (2*a)
        console.log(-b/(2*a));
    } else {
        console.log("No");
    }

}

calc(6, 11, -35);