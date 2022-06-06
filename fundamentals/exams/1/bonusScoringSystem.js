function bonusScoringSystem(input) {
    let index = 0;
    let countStudents = Number(input[index]);
    index++;
    let numLectures = Number(input[index]);
    index++
    let additionalBonus = Number(input[index]);
    index++;
    let maxPoinStudent = 0;
    let maxLectures = 0;

    for (let i = 0; i < countStudents; i++) {
        let attendanceStudent = Number(input[index]);
        index++;
        if (maxLectures < attendanceStudent) {
            maxLectures = attendanceStudent;
        }
        let totalBonus = (attendanceStudent / numLectures) * (5 + additionalBonus);
        if (maxPoinStudent < totalBonus) {
            maxPoinStudent = totalBonus;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxPoinStudent)}.`);
    console.log(`The student has attended ${maxLectures} lectures.`);

}
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
])