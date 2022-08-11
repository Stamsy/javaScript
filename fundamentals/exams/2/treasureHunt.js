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
    /*function solve(input) {
    let treasureChest = input.shift().split("|");

    while (input[0] !== "Yohoho!") {
        let [command, ...rest] = input.shift().split(" ");

        switch (command) {
            case "Loot":
                for (let i = 0; i < rest.length; i++) {
                    if (!treasureChest.includes(rest[i])) {
                        treasureChest.unshift(rest[i])
                    }
                }
                break;

            case "Drop":
                let index = Number(rest)
                if (index > 0 && index <= treasureChest.length) {
                    let change = treasureChest[index]
                     treasureChest.splice(index, 1)
                    treasureChest.push(change)
                }
                break;
            case "Steal":
                let steal = treasureChest.splice(-rest[0])
                console.log(steal.join(", "));
                break;

        }
    }
    if(treasureChest.length === 0){
        console.log(`Failed treasure hunt.`);
    } else{
        let sum = 0;
        let count = 0;
        for(let i = 0; i < treasureChest.length;i++){
            let word = Number(treasureChest[i].length)
            sum += word
            count++
        }
        let avr = sum/count
        console.log(`Average treasure gain: ${avr.toFixed(2)} pirate credits.`);
    }
   
}
solve(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])
*/