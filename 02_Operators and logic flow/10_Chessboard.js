function chess(size) {

    console.log("<div class=\"chessboard\">");
    for (let row = 0; row < size; row++) {
        console.log(" <div>");
        let color = (row % 2 === 0) ? 'black' : 'white';
        for (let col = 0; col < size; col++) {
            console.log(`  <span class="${color}"></span>`);
            color = (color === 'black') ? 'white' : 'black';
        }
        console.log(" </div>");
    }
    console.log("</div>");
}

chess(10);