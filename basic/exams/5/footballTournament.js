function footballTournament(input) {
    let index = 0;
    let nameTeam = input[index];
    index++;
    let numGames = Number(input[index]);
    index++;

    let points = 0;
    let countW = 0;
    let countD = 0;
    let countL = 0;

    let succses = 0;

    for (let i = 0; i < numGames; i++) {
        let resultGame = (input[index]);
        index++;

        switch (resultGame) {
            case 'W':
                points += 3;
                countW++; break;
            case 'D':
                points += 1;
                countD++; break;
            case 'L':
                countL++; break;

        }
    }
    succses = (countW / numGames) * 100;

    if (numGames === 0) {
        console.log(`${nameTeam} hasn't played any games during this season.`);
    }
    else {
        console.log(`${nameTeam} has won ${points} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${countW}`);
        console.log(`## D: ${countD}`);
        console.log(`## L: ${countL}`);
        console.log(`Win rate: ${succses.toFixed(2)}%`);
    }
}
footballTournament(["Barcelona",
    "7",
    "W",
    "D",
    "L",
    "L",
    "W",
    "W",
    "D"])