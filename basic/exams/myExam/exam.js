function exam(input) {
    let index = 0;
    let countStudents = Number(input[index]);
    index++;

    let countFailStudent = 0;
    let countGoodStudent = 0;
    let countVeryGoodStudent = 0;
    let countTopStudent = 0;
    let avr = 0;

    for (let i = 0; i < countStudents; i++) {
        let assessment = Number(input[index]);
        avr += assessment;
        if (assessment >= 5) {
            countTopStudent++;


        } else if (assessment >= 4 && assessment <= 4.99) {
            countVeryGoodStudent++;

        } else if (assessment >= 3 && assessment <= 3.99) {
            countGoodStudent++;

        } else if (assessment < 3) {
            countFailStudent++

        }
        assessment = Number(input[index])
        index++;
    }
    let failStudent = countFailStudent / countStudents * 100;
    let goodStudent = countGoodStudent / countStudents * 100;
    let veryGoodStudent = countVeryGoodStudent / countStudents * 100;
    let topStudent = countTopStudent / countStudents * 100;
    let avrerage = avr / countStudents;

    console.log(`Top students: ${topStudent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${veryGoodStudent.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${goodStudent.toFixed(2)}%`);
    console.log(`Fail: ${failStudent.toFixed(2)}%`);
    console.log(`Average: ${avrerage.toFixed(2)}`);

}
exam(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"])