function calc(count) {
    let color = "";

    console.log('<ul>');
    for (let i = 1; i <= count; i++) {
        if(i%2===0){
            color="blue";
            console.log(`<li><span style='color:${color}'>${i}</span></li>`);
        }else{
            color="green";
            console.log(`<li><span style='color:${color}'>${i}</span></li>`);
        }
    }
    console.log('</ul>');
}

calc(10);