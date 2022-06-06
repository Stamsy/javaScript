function careOfPuppy(input) {
    let index = 0;
    let food = Number(input[index]) * 1000;
    index++;
    let command = input[index];
    let totalEatenFood = 0;
    while (command !== "Adopted") {
        let eatenFood = Number(input[index]);

        totalEatenFood += eatenFood;
        index++;
        command = input[index];

        if (command === "Adopted")
            break;
    }
    if (totalEatenFood <= food) {
        console.log(`Food is enough! Leftovers: ${Math.abs(totalEatenFood - food)} grams.`);
    } else if (totalEatenFood >= food) {
        console.log(`Food is not enough. You need ${Math.abs(food - totalEatenFood)} grams more.`);
    }
}
careOfPuppy(["3",
"1000",
"1000",
"1000",
"Adopted"])