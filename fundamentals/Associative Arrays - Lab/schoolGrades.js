function schoolGrades(arr) {
    let result = new Map();
    for (let person of arr) {
        let tokens = person.split(" ");
        let name = tokens.shift();
        let setOFGrade = tokens;

        if (!result.has(name)) {
            result.set(name, setOFGrade)
        } else {
            let oldSet = result.get(name);
            for (let grade of setOFGrade) {
                oldSet.push(grade);
            }
            result.set(name, oldSet)
        }
    }
    let softEntries = Array.from(result.entries()).sort(([keyA], [keyB]) => {
        return keyA.localeCompare(keyB)
    })
    for (let [k, v] of softEntries) {
        let sumGrade = 0;
        for (grade of v) {
            sumGrade += Number(grade)
        }
        let avg = sumGrade / v.length
        console.log(`${k}: ${avg.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])