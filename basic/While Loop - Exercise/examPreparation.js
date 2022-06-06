function examPreparation(input) {
    let index = 0;
    let countNum = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let curentNegativeGrade = 0;
    let sumGrade = 0;
    let countProblems = 0;
    let lastName = "";
    let NeedBreak = false;

    while (command !== "Enough") {
        let problemName = command;
        let grade = Number(input[index]);
        index++;

        lastName = problemName
        countProblems++;
        sumGrade += grade;

        if (grade <= 4) {
            curentNegativeGrade++;
        }

        if (curentNegativeGrade === countNum) {
            console.log(`You need a break, ${countNum} poor grades.`)
            NeedBreak = true;
            break;
        }
        command = input[index];
        index++;
    }
    if (!NeedBreak) {
        let avg = sumGrade / countProblems;
        console.log(`Average score: ${avg.toFixed(2)}`)
        console.log(`Number of problems: ${countProblems}`)
        console.log(`Last problem: ${lastName}`)
    }
}

examProblems(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])