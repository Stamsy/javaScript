function bonusScoring2(input) {
    let studentCount = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let initialBonus = Number(input.shift());
    let students = input.map(x => Number(x));

    students = students.sort((a, b) => b - a);
    let maxLectures = students.shift();
    let maxBonus = maxLectures / lecturesCount * (5 + initialBonus);
    maxBonus = Math.ceil(maxBonus);

    if(maxBonus > 0){
    console.log(`Max Bonus: ${maxBonus}.`);
    console.log(`The student has attended ${maxLectures} lectures.`);
} else {
    console.log(`Max Bonus: 0.`);
    console.log(`The student has attended 0 lectures.`);
}
}
bonusScoring2([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
])