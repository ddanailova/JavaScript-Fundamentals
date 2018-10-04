function calc(num) {
    let rowCount =0;
 if (num%2 ===0){
     rowCount = num-1;
 } else {
     rowCount=num;
 }
    let figure ="";
    for (let row = 1; row <= rowCount; row++) {
        for (let col = 1; col <= 2*num-1; col++) {
            if((row === 1 || row === Math.ceil(rowCount/2) ||row === rowCount) && (col === 1 || col === num||col === 2*num-1)){
                figure += '+';
            }else if(col === 1 || col === num||col === 2*num-1){
                figure +='|';
            }else if(row === 1 || row === Math.ceil(rowCount/2) ||row === rowCount){
                figure +='-';
            }else{
                figure +=' ';
            }
        }
        figure +='\n';
    }

    console.log(figure);
}

calc(4);
calc(5);
calc(6);
calc(7);

function figure(num) {
    let rowCount =0;
    if (num%2 ===0){
        rowCount = num-1;
    } else {
        rowCount=num;
    }
    let figure ="";
    for (let row = 1; row <= rowCount; row++) {
        if (row === 1 || row === Math.ceil(rowCount/2) ||row === rowCount){
            figure +="+" + "-".repeat(num-2)+ "+" + "-".repeat(num-2)+ "+" + "\n";
        } else {
            figure += "|" + " ".repeat(num - 2) + "|" + " ".repeat(num - 2) + "|" +"\n";
        }
    }
    console.log(figure);
}

figure(4);
figure(5);
figure(6);
figure(7);