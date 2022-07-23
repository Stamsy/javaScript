function race(input) {
    let patternName = /[A-Za-z]/g;
    let patternNum = /[0-9]/g;

    let racersNames = input.shift().split(", ");
    let racers = {};
    for (let name of racersNames) {
        racers[name] = 0;
    }


    while (input[0] !== 'end of race') {
        let participants = input.shift();
        let letters = participants.match(patternName);
        let numbers = participants.match(patternNum);

        let name = letters.join("");
        let distances = numbers.map(Number);

        let totalDistace = 0;
        for (let x of distances) {
            totalDistace += x;
        }
        ; if (racers[name] != undefined) {
            racers[name] += totalDistace
        }

    }
    let result = Object.entries(racers).sort((a, b) => b[1] - a[1]);

    if (result[0]) {
        console.log("1st place: " +result[0][0]);
    }
    if (result[2]) {
        console.log("2nd place: " +result[1][0]);
    }
    if (result[3]) {
        console.log("3rd place: " +result[2][0]);
    }

}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])