function footballResults(input) {
    let firstResult = input[0];
    let secondResult = input[1];
    let thirdResult = input[2];

    let countWon = 0;
    let countLost = 0;
    let countDrawn = 0;

    if (firstResult[0] > firstResult[2]) {
        countWon++;
    } else if (firstResult[0] < firstResult[2]) {
        countLost++;
    } else if (firstResult[0] = firstResult[2] ){
        countDrawn++;

    } if (secondResult[0] > secondResult[2]) {
        countWon++;
    } else if (secondResult[0] < secondResult[2]) {
        countLost++;
    } else if (secondResult[0] = secondResult[2]) {
        countDrawn++;
    }
    if (thirdResult[0] > thirdResult[2]) {
        countWon++;
    } else if (thirdResult[0] < thirdResult[2]) {
        countLost++;
    } else if (thirdResult[0] = thirdResult[2]) {

        countDrawn++;
    }
    console.log(`Team won ${countWon} games.`);
    console.log(`Team lost ${countLost} games.`);
    console.log(`Drawn games: ${countDrawn}`);

}

footballResults(["3:1", "0:2", "0:0"])