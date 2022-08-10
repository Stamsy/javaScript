function shootForTheWin(input) {
    let targets = input.shift().split(" ").map(x => Number(x));
    input.pop()
    let shots = input.map(x => Number(x));
    let count = 0;
    for (let i = 0; i < targets.length; i++) {
        let currentShot = shots[i];
        let currentTarget = targets[currentShot];
        
        if (currentTarget > -1) {
            targets[currentShot] = -1;
            count++
            for (let j = 0; j < targets.length; j++) {
                if (targets[j] > -1) {
                    if (targets[j] > currentTarget) {
                        targets[j] -= currentTarget;
                    } else {
                        targets[j] += currentTarget;
                    }
                }
            }
        }
    }

    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);
}
shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])

    /*function solve(input) {
    let targets = input.shift().split(" ").map(Number);
    let counter = 0
    while (input[0] !== "End") {
        let shot = input.shift();
        if (shot >= 0 && shot < targets.length) {
            let count = targets[shot]
            for (let i = 0; i < targets.length; i++) {
                if (targets[i] > count) {
                    
                    targets[i] -= count
                } else {
                    if (targets[i] === -1) {
                        continue
                    }
                    targets[i] += count
                }
            }
            targets[shot] = -1
            counter++
        }
    }

    console.log(`Shot targets: ${counter} -> ${targets.join(" ")}`)
} */