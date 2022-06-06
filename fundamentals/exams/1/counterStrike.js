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