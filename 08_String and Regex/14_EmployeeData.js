function employeeData(input) {
    let pattern=/^([A-Z][a-zA-Z]*)\s-\s([1-9][0-9]*)\s-\s([\w- ]+)$/;
    //let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;
    for (let line of input) {
        let exec = pattern.exec(line);
        if (exec){
            console.log(`Name: ${exec[1]}`);
            console.log(`Position: ${exec[3].trim()}`);
            console.log(`Salary: ${exec[2]}`);
        }
    }
}

employeeData([
    'Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee']);