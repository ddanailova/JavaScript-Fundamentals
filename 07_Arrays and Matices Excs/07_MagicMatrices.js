function magicMatices(matrix) {
    let rowSums=[];

    for (let i = 0; i < matrix.length; i++) {
        let singleLine = matrix[i].reduce((a,b)=>a+b);
        rowSums.push(singleLine)
    }
    let colSums =rowSums.map(e=>e=0);
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < rowSums.length; col++) {
            colSums[col]+=matrix[row][col];
        }
    }

    let areMagic=false;

    if(rowSums.reduce((a,b)=> a+b)/rowSums.length!== rowSums[0])
        return console.log(areMagic);
    if(colSums.reduce((a,b)=> a+b)/colSums.length!== colSums[0])
        return console.log(areMagic);


    for (let i = 0; i < rowSums.length; i++) {
        rowSums[i]===colSums[i]?areMagic=true:false;

    }
    console.log(areMagic);
}


magicMatices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);

magicMatices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);