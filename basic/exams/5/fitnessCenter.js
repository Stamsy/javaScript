function fitnessCenter(input) {
    let index = 0;
    let count = Number(input[index]);
    index++;

    let countBack = 0;
    let countChest = 0;
    let countLegs = 0;
    let countAbs = 0;
    let countProteinShake = 0;
    let countProteinBar = 0;

    for (let i = 0; i < count; i++) {
        let sport = input[index];
        index++;
        switch (sport) {
            case "Back": countBack++;
                break;
            case "Chest": countChest++;
                break;
            case "Legs": countLegs++;
                break;
            case "Abs": countAbs++;
                break;
            case "Protein shake": countProteinShake++;
                break;
            case "Protein bar": countProteinBar++;
                break;
        }
    }
    console.log(`${countBack} - back`);
    console.log(`${countChest} - chest`);
    console.log(`${countLegs} - legs`);
    console.log(`${countAbs} - abs`);
    console.log(`${countProteinShake} - protein shake`);
    console.log(`${countProteinBar} - protein bar`);
    let countNotWork = countProteinShake + countProteinBar;
    let countWork = count - countNotWork;
    let procentageWork = countWork / count * 100;
    let procentageNotWork = countNotWork / count * 100;
    console.log(`${procentageWork.toFixed(2)}% - work out`);
    console.log(`${procentageNotWork.toFixed(2)}% - protein`);
}
fitnessCenter(["10",
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs"])