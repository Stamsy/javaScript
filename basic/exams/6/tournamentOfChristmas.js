function tournamentOfChristmas(input) {
    let index = 0;
    let dayCount = Number(input[index]);
    index++;
    let money = 0;
    let countWin = 0;
    let countLose = 0;

    for (let i = 0; i < dayCount; i++) {
        let command = input[index];
        index++;
        let tempMoney = 0;
        let tempCountWin = 0;
        let tempCountLose = 0;

        while (command !== "Finish") {
            let name = command;
            let score = input[index];
            index++;

            if (score === "win") {
                tempMoney += 20;
                tempCountWin++;
            } else {
                tempCountLose++;
            }
            command = input[index];
            index++;
        }
        if (tempCountLose < tempCountWin) {
            tempMoney *= 1.10;
            countWin++;
        } else {
            countLose++;
        }
        money += tempMoney;
    }
    if (countWin > countLose) {
        money *= 1.2;
        console.log(`You won the tournament! Total raised money: ${money.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`);

    }

}
tournamentOfChristmas(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"])