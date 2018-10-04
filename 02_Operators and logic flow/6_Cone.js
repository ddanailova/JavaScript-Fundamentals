function cone(radius, height) {
   //(1/3)πr2h
    let volume =(1/3)*height*Math.PI*radius**2;
    //πr(r + √(r2 + h2))
    let area = Math.PI*radius*(radius + Math.sqrt(radius**2 + height**2));

    console.log(`volume = ${volume}`);
    console.log(`area = ${area}`);
}

cone(3,5);