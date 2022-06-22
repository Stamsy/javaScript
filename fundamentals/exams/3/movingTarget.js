function movingTarget(arr) {

    let targets = arr.shift().split(' ').map(Number);
    let index = 0;
    let command = arr[index];
    index++;

    while (command !== 'End') {
        command = command.split(' ');
        let token = command[0]
        let indexOne = Number(command[1]);
        let indexTwo = Number(command[2]);
        switch (token) {
            case 'Shoot':
                if (indexOne < targets.length) {
                    targets[indexOne] -= indexTwo
                }
                if (targets[indexOne] <= 0) {
                    targets.splice(indexOne, 1);
                }
                break;

            case 'Add':
                if (indexOne >= 0 && indexOne < targets.length) {
                    targets.splice(indexOne, 0, indexTwo)
                } else {
                    console.log("Invalid placement!");
                }
                break;

            case 'Strike':
                let radiusLeft = indexOne - indexTwo;
                let radiusRight = indexTwo * 2 + 1
                if (indexOne + indexTwo <= targets.length - 1 && indexOne - indexTwo >= 0) {
                    targets.splice(radiusLeft, radiusRight);
                } else {
                    console.log("Strike missed!");
                }
                break;
        }
        command = arr[index];
        index++;

    }
    console.log(targets.join('|'));
}
movingTarget
    (["1 2 3 4 5",
        "Strike 0 1",
        "End"]);
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);