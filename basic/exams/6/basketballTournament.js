function basketballTournament(input) {
    let index = 0;
    let nameTournament = input[index];
        index++;
        let numTournament = Number(input[index])
        index++
    for (let i = 1; i <= numTournament; i++) {
        let pointsOne = Number(input[index]);
            index++;
            let pointsTwo = Number(input[index]);
            index++;
        let tournament = nameTournament
        while (tournament !== "End of tournaments") {
           
        

        if (pointsOne > pointsTwo) {
            console.log(`Game  of tournament ${nameTournament}: win with ${(pointsOne - pointsTwo).toFixed(2)} points.`);

        } else if (pointsOne < pointsTwo) {
            console.log(`Game  of tournament ${nameTournament}: lost with ${(pointsTwo - pointsOne).toFixed(2)} points.`);
        }
        index++;
    }
    }
}
basketballTournament(["Dunkers",
    "2",
    "75",
    "65",
    "56",
    "73",
    "Fire Girls",
    "3",
    "67",
    "34",
    "83",
    "98",
    "66",
    "45",
    "End of tournaments"])