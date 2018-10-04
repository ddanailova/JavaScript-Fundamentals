function DNA(length) {
    let aminoArray = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
    let counter = 0;
    let line = "";
    let countChecker = (count, arr) => (count === arr.length) ? 0 : count;
    let repetitions = 0;

    while (repetitions < parseInt(length / 4)) {
        line += singleLoop(aminoArray);
        repetitions++;
    }
    line += singleLoopTop(aminoArray, length % 4 );
    console.log(line);

    function singleLoop(array) {
        line = singleLoopTop(array, 3);
        line+=singleLoopBottom(array);
        return line;
    }

    function singleLoopTop(array, size) {
        let row ="";
        for (let i = 1; i <= size; i++) {
            row += '*'.repeat(3 - i);
            counter = countChecker(counter, array);
            row += array[counter++] + '-'.repeat((i - 1) * 2);
            counter = countChecker(counter, array);
            row += array[counter++] + '*'.repeat(3 - i) + "\n";
        }
        return row;
    }
    function singleLoopBottom(array) {
        let row ="";
        for (let i = 2; i > 1; i--) {
            row += '*'.repeat(3 - i);
            counter = countChecker(counter, array);
            row += array[counter++] + '-'.repeat((i - 1) * 2);
            counter = countChecker(counter, array);
            row += array[counter++] + '*'.repeat(3 - i) + "\n";
        }
        return row;
    }
}

DNA(16);


function helix(number) {
    let rows = Number(number);
    let sequence = 'ATCGTTAGGG';
    let currentIndex =0;
    for (let i = 0; i < rows; i++) {
        let currentRow = i % 4;
        if (currentRow === 0) {
            console.log("**" + sequence[currentIndex%10]
                +sequence[currentIndex%10 + 1] + "**");
            currentIndex+=2;
        }else if (currentRow === 1 || currentRow === 3){
            console.log("*" + sequence[currentIndex%10] + '--'
                +sequence[currentIndex%10 + 1] + "*");
            currentIndex+=2;
        }else if (currentRow === 2){
            console.log(sequence[currentIndex%10] + "----"
                +sequence[currentIndex%10 + 1]);
            currentIndex+=2;
        }
    }
}

helix(10);