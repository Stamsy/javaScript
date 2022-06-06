function easterCompetition(input) {
    let index = 0;
    let countEasterBread = Number(input[index]);
    index++;

    let numberOne = "";
    let numberOnePoints = 0;

    for (let i = 0; i < countEasterBread; i++) {
        let name = input[index];
        index++;
        let command = input[index];
        index++;
        let point = 0;

        while (command !== "Stop") {
            let tempPoint = Number(command);
            point += tempPoint;
            command = input[index];
            index++;
        }
        console.log(`${name} has ${point} points.`);
        if (numberOnePoints < point) {
            numberOne = name;
            numberOnePoints = point;
            console.log(`${numberOne} is the new number 1!`);
        }

    }
    console.log(`${numberOne} won competition with ${numberOnePoints} points!`);
}easterCompetition(["3",
"Chef Manchev", "10",
"10",
"10",
"10",
"Stop",
"Natalie",
"8",
"2",
"9",
"Stop",
"George",
"9",
"2",
"4",
"2",
"Stop"])