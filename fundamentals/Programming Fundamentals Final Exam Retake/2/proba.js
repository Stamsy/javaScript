function solve(input) {
    let pirateShip = input.shift().split(">").map(Number);
    let warship = input.shift().split(">").map(Number);
    let maxHealth = Number(input.shift());

    while (input[0] !== "Retire") {
        let [command, ...rest] = input.shift().split(" ");

        switch (command) {
            case "Fire":
                let index = Number(rest[0]);
                let damage = Number(rest[1]);

                if (index > 0 && index <= warship.length) {
                    warship[index] -= damage
                    if (warship[index] <= 0) {
                        return `You won! The enemy ship has sunken.`;
                    }
                }
                break;

            case "Defend":
                let start = Number(rest[0]);
                let end = Number(rest[1]);
                let demages = Number(rest[2]);
                if ((start >= 0 && start < pirateShip.length) && (end >= 0 && end < pirateShip.length)) {
                    for (let i = start; i <= end; i++) {
                        pirateShip[i] -= demages
                        if (pirateShip[i] <= 0) {
                            console.log(`You lost! The pirate ship has sunken.`);
                            return
                        }
                    }


                }

                break;
            case "Repair":
                let i = Number(rest[0]);
                let health = Number(rest[1]);
                if (i >= 0 && i < pirateShip.length) {
                    let chek = Math.min((maxHealth - pirateShip[i]), health);
                    pirateShip[i] += chek
                }
                break;
            case "Status":
                let breakPoint = maxHealth * 0.20;
                let result = pirateShip.filter(el => el < breakPoint)
                console.log(result.length + " sections need repair.")
                break;
        }
    }
    let warShipResult = 0;
    let pirateShipResult = 0;
    for (let sections of warship) {
        warShipResult += sections;
    }
    for (let section of pirateShip) {
        pirateShipResult += section
    }

    console.log(`Pirate ship status: ${pirateShipResult}\nWarship status: ${warShipResult}`)
}
solve(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])


