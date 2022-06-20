function manOWar(arr) {

    let pirateShip = arr.shift().split('>').map(Number);
    let warShip = arr.shift().split('>').map(Number);
    let maximumHealthCapacity = arr.shift().split().map(Number);
    let index = 0;
    let command = arr[index].split(' ');
    index++;

    while (command[0] !== 'Retire') {
        let action = command[0];
        let indexOne = Number(command[1]);
        let indexTwo = Number(command[2]);

        switch (action) {
            case 'Fire':
                if (warShip.length < indexOne) {
                    break;
                } else {
                    warShip[indexOne] -= indexTwo;
                    if (warShip[indexOne] <= 0) {
                        console.log(`You won! The enemy ship has sunken.`);
                    }
                }
                break;
            case 'Defend': let indexThree = Number(command[3]);
                if (pirateShip.length < indexOne || pirateShip.length < indexTwo) {
                    break;
                } else {
                    for (let i = indexOne; i <= indexTwo; i++) {
                        pirateShip[i] -= indexThree;
                        if (pirateShip[i] <= 0) {
                            console.log(`You lost! The pirate ship has sunken`);
                        }
                    }


                }
                break;
            case 'Repair':
                break;
            case 'Status':
                break;
            default: break;


        }
        command = arr[index].split(' ');
        index++;
    }

}
manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]
);