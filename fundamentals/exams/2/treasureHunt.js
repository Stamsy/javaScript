function treasureHunt(input) {
    let treasureChest = input.shift().split("|");
    let index = 0;
    let token = input[index];
    index++;
    let i;

    while (token !== "Yohoho!") {
        let command = token.split(" ");
        let operation = command.shift();

        switch (operation) {
            case "Loot":
                for (let el of command) {
                    if (!treasureChest.includes(el)) {
                        treasureChest.unshift(el);
                    }
                }
                break;
            case "Drop":
                i = Number(command[0]);
                if(i<0 || i> treasureChest.length){
                    token = input[index];
                    index++
                    continue;
                }
                treasureChest.push(treasureChest.splice(i, 1)[0])
                break;
            case "Steal":
                let count = Number(command[0]);
                let items = treasureChest.splice(-count)
                console.log(items.join(', '));
                break;
        }
        token = input[index];
        index++

    }
    let sum = 0;
    for (let el of treasureChest) {
        sum += el.length;
    }
    if (treasureChest.length > 0) {
        let avg = sum / treasureChest.length;
        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
    } else {
        console.log(`Failed treasure hunt.`);
    }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])