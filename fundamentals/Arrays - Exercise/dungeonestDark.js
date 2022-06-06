function dungeonestDark(arr) {
    let health = 100;
    let room = 0;
    let coins = 0;
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
                console.log(`You found ${currentNum} coins.`);
                coins += currentNum;
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
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);

    }
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])