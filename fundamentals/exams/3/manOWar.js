function manOWar(arr) {
 
    let pirateShip = arr.shift().split('>').map(Number);
    let warShip = arr.shift().split('>').map(Number);
    let maximumHealthCapacity = arr.shift().split().map(Number);
    let index = 0;
    let command = arr[index].split(' ');
    index++;
    let isLost = false;
 
 
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
 
                            console.log(`You lost! The pirate ship has sunken.`);
                            isLost = true;
                            break;
 
                        }
                    }
                } break;
            case 'Repair':
                if (pirateShip.length < indexOne) {
                    break;
                } else {
                    pirateShip[indexOne] += indexTwo;
                    if (pirateShip[indexOne] > maximumHealthCapacity) {
                        pirateShip[indexOne] = maximumHealthCapacity;
                    }
                } break;
            case 'Status':
                let max20 = maximumHealthCapacity * 0.2;
                let counter = 0;
                for (let el of pirateShip) {
                    if (el < max20) {
                        counter++;
                    }
                } console.log(`${counter} sections need repair.`);
                break;
        }
 
        command = arr[index].split(' ');
        index++;
    }
 
 
 
    let pirateShipSum = 0;
    for (let el of pirateShip) {
        pirateShipSum += el;
    }
    let warshipSum = 0;
    for (let el of warShip) {
        warshipSum += el;
    }
    if (isLost === false) {
        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warshipSum}`);
    }
 
 
}
 
manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]);