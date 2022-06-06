function movieStars(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let command = input[index];


    while (command !== "ACTION") {
        let nameOfActior = input[index];
        index++

        if (budget <= 0) {
            break;
        }

        if (nameOfActior.length <= 15) {
            let salery = Number(input[index]);
            index++;
            budget -= salery;
        } else {
            budget -= (budget * 0.20);
        }

        command = input[index];

    }

    if (budget >= 0) {
        console.log(`We are left with ${Math.abs(budget).toFixed(2)} leva.`);
    } else {
        console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`)
    }

}
movieStars(["2000000.5",
    "Jet Lee",
    "1000000",
    "Jackie Chan",
    "1000000",
    "ACTION"])