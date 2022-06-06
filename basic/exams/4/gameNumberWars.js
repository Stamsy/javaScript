function gameNumberWars(input) {
    let playerOne = input[0];
    let playerTwo = input[1];

    let index = 2;
    let command = input[index];

    let pointsPlayerOne = 0;
    let pointsPlayerTwo = 0;
    let pointsOne = 0;
    let pointsTwo = 0;
    let win = "";

    while (command !== "End of game") {
        let cardPlayerOne = Number(input[index]);
        index++;
        let cardPlayerTwo = Number(input[index]);
        index++;

        if (cardPlayerOne > cardPlayerTwo) {

            pointsPlayerOne = cardPlayerOne - cardPlayerTwo;
            pointsOne += pointsPlayerOne;

        } else if (cardPlayerTwo > cardPlayerOne) {
            pointsPlayerTwo = cardPlayerTwo - cardPlayerOne;
            pointsTwo += pointsPlayerTwo;
        } else if (cardPlayerOne === cardPlayerTwo) {
            
           
            console.log(`Number wars!`){
                break;
            }

            console.log(`${win} is winner with ${points} points`)
            break;}

          
            command = input[index];
        
        }if (command === "End of game") {
        console.log(`${playerOne} has ${pointsOne} points`)
        console.log(`${playerTwo} has ${pointsTwo} points`)
    
}
}
gameNumberWars(["Desi",
"Niki",
"7",
"5",
"3",
"4",
"3",
"3",
"5",
"3"])

