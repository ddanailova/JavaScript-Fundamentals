function calculate(minAge, nameA, ageA, nameB, ageB) {
    let firstPerson = {name: nameA, age: parseInt(ageA)};
    let secondPerson = {name: nameB, age: parseInt(ageB)};

    if (firstPerson.age >= minAge) {
        console.log(firstPerson);
    }
    if(secondPerson.age>=minAge){
        console.log(secondPerson);
    }
}

calculate(12, 'Ivan', 15, 'Asen', 9);