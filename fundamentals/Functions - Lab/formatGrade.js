function formatGradeOne(grade) {
    let formatGrade;
    let gradeFixed = grade.toFixed(2)

    if (gradeFixed < 3) {
        gradeFixed = 2;
        formatGrade = "Fail";
    } else if (gradeFixed < 3.5) {
        formatGrade = "Poor";
    } else if (gradeFixed < 4.5) {
        formatGrade = "Good";
    } else if (gradeFixed < 5.5) {
        formatGrade = "Very good"
    } else if (gradeFixed >= 5.5) {
        formatGrade = "Excellent"
    }
    console.log(`${formatGrade} (${gradeFixed})`);

}
formatGradeOne(2.99)