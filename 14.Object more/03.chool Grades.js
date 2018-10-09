function solution(inputArr) {

    let keyWords = ['Student', 'name:', 'name', 'Grade:', 'Grade', 'Graduated', 'with', 'an', 'average', 'score:', 'score', ':', ''];
    let studentsLog = inputArr
        .map((line) => line.split(/\s+|,/).filter(e => !keyWords.includes(e)))
        .reduce((acc, cur) => {
            let name = cur[0];
            let grade = +cur[1];
            let score = +cur[2];

            if (score >= 3) {
                if (!acc[grade + 1]) {
                    acc[grade + 1] = {
                        totalScore: 0,
                        students: []
                    }
                }
                acc[grade + 1].totalScore += score;
                acc[grade+1].students.push(name);
            }
            return acc;
        }, {});

    Object.keys(studentsLog).sort((a,b)=>a-b).forEach(key=>{
        console.log(`${key} Grade `);
        console.log(`List of students: ${studentsLog[key].students.join(", ")}`);
        let avrgScore = studentsLog[key].totalScore/studentsLog[key].students.length;
        console.log(`Average annual grade from last year: ${avrgScore.toFixed(2)}`);
        console.log();

    })
}

solution(['Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
    'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
    'Student name: George, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
    'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
    'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
    'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
    'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
    'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
    'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
    'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
    'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00']);