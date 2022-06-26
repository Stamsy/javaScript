function blackFlag(input) {
    let index = 0;
    let days = Number(input[index]);
    index++
    let dailyPlunder = Number(input[index]);
    index++
    let expectedPlunder = Number(input[index]);
    index++

    let totalPlunder = 0;
    for (let i = 1; i <= days; i++) {
        totalPlunder += dailyPlunder;
        if (i % 3 === 0) {
            totalPlunder += dailyPlunder * 0.5;
        }

        if (i % 5 === 0) {
            totalPlunder = totalPlunder * 0.7;
        }
    } if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${((totalPlunder/expectedPlunder) * 100).toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["10",
"20",
"380"])