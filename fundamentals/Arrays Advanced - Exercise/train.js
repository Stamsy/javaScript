function train(input) {
    let wagons = input.shift().split(" ").map(Number);
    let maxCapacity = +input.shift();

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");

        if (command[0] === "Add") {
            wagons.push(Number(command[1]))
        }
        else {
            for (let a = 0; a < wagons.length; a++) {
                if (Number(command[0]) + wagons[a] <= maxCapacity) {
                    wagons[a] += Number(command[0])
                    break;
                }
            }
        }
    }

    console.log(wagons.join(" "));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])