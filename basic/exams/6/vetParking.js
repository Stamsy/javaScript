function vetParking(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let hours = Number(input[index]);

    let tax = 0;
    let countHours = 0;
    let totalSum = 0;

    for (let i = 1; i <= days; i++) {
        let countDay = Number(i)
        let sum = 0;
        for (let j = 1; j <= hours; j++) {
            countHours = Number(j);
            if (countDay % 2 === 0 && countHours % 2 !== 0) {
                tax = 2.5;
                sum += tax
            } else if (countDay % 2 !== 0 && countHours % 2 == 0) {
                tax = 1.25;
                sum += tax
            } else {
                tax = 1;
                sum += tax;
            }
        }
        totalSum += sum
        console.log(`Day: ${countDay} - ${sum.toFixed(2)} leva`);
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}
vetParking(["5",
    "2"])