function counterStrike(input) {
    let index = 0;
    let energy = Number(input[index]);
    index++
    let command = input[index];
    index++;
 
 
    let countWin = 0;
    while (command !== "End of battle") {
        let distance = Number(command);
        if (energy < distance) {
            console.log(`Not enough energy! Game ends with ${countWin} won battles and ${energy} energy`);
            break;
        }
 
        energy -= distance;
        if (energy >= 0) {
            countWin++;
        } 
 
        if (countWin % 3 === 0) {
            energy += countWin;
 
        }
        command = input[index];
        index++;
 
    }
    if (command === "End of battle") {
        console.log(`Won battles: ${countWin}. Energy left: ${energy}`);
    }
 
}
counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])

    /*function solve(input) {
    let energy = Number(input.shift());
    let won = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "End of battle") {
            console.log(`Won battles: ${won}. Energy left: ${energy}`);
        }
        let distance = Number(input[i])
        if (energy < distance) {
            
            console.log(`Not enough energy! Game ends with ${won} won battles and ${energy} energy`);
            break;
        }
        if (energy >= 0) {
            energy -= distance
            won++
        }
            if (won % 3 === 0) {
                energy += won
            }
    }
}*/