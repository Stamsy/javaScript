function bombNumbers(input1, input2) {
    let bomb = Number(input2[0]);
    let radius = Number(input2[1]);
    let sum = 0;
    while (input1.includes(bomb)) {
        let start = input1.indexOf(bomb) - radius;
        let detonator = input1.indexOf(bomb) - radius;
        let end = input1.indexOf(bomb) + radius;
        for (let i = start; i <= end; i++) {
            if (detonator < 0) {
                detonator = 0;
            }
            input1.splice(detonator, 1);

        }

    }
    for (let j = 0; j < input1.length; j++) {
        sum += input1[j]
    }

    console.log(sum);
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1])