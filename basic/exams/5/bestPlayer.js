function bestPlayer(input) {
    let index = 0;
    let command = input[index];
    index++;
 
    let hatTrick = false;
 
    let maxGoals = Number.MIN_SAFE_INTEGER;
    let bestPlayer = "";
    let hatTrickPlayer = "";
 
 
    while (command !== "END") {
        let name = command;
        let goals = Number(input[index]);
        index++;
 
 
        if (goals >= 3) {
            hatTrick = true;
            hatTrickPlayer = name;
        }
        if (maxGoals < goals) {
            maxGoals = goals;
            bestPlayer = name;
            
        }
        if (goals >= 10) {
            break;
        }
        command = input[index];
        index++;
    }
    console.log(`${bestPlayer} is the best player!`);
 
    if (hatTrick) {
 
        if (hatTrickPlayer === bestPlayer) {
            console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
 
        } 
    }else {
        console.log(`He has scored ${maxGoals} goals.`);
    }
 
}
bestPlayer(["Silva",
"5",
"Harry Kane",
"10"])