function muOnline(arr) {
    let health = 100;
    let room = 0;
    let bitcoins = 0;
    arr = String(arr)
    let separateRoom = arr.split("|")
    for (let i = 0; i < separateRoom.length; i++) {
        let inRoom = separateRoom[i].split(" ");
        let item = inRoom[0];
        let currentNum = Number(inRoom[1]);
        room++
        switch (item) {
            case "potion":
                let oldHealth = health
                health += currentNum;
                if (health > 100) {

                    health = 100;
                    currentNum = 100 - oldHealth

                }
                console.log(`You healed for ${currentNum} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                console.log(`You found ${currentNum} bitcoins.`);
                bitcoins += currentNum;
                break;
            default:
                health -= currentNum;
                if (health > 0) {
                    console.log(`You slayed ${item}.`);
                } else {
                    console.log(`You died! Killed by ${item}.`);
                    console.log(`Best room: ${room}`);
                    break;

                }

        }

        if (health <= 0) {
            break
        }
    }
    if (health > 0) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);

    }
}
muOnline(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])
/*function solve(input) {
    let health = 100;
    let bitCoint = 0;
    let rooms = input.split("|");
    let room = 0;
    for (let i = 0; i < rooms.length; i++) {
        let [command, number] = rooms[i].split(" ");
        room++
        number = Number(number);
        switch (command) {
            case "potion":
                let healed = Math.min((100 - health), number);
                health += healed
                console.log(`You healed for ${healed} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                bitCoint += number
                console.log(`You found ${number} bitcoins.`);
                break;
            default:
                health -= number;
                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${room}`);
                    return
                }
                break;
        }
    }
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitCoint}`);
    console.log(`Health: ${health}`);
}*/