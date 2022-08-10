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
    /*function solve(input) {
    let targets = input.shift().split(" ").map(Number);

    while (input[0] !== "End") {
        let [command, index, power] = input.shift().split(" ");
        index = Number(index);
        power = Number(power)
        switch (command) {
            case "Shoot":
                if (index < targets.length) {
                    targets[index] -= power
                    if (targets[index] <= 0) {
                        targets.splice(index, 1)
                    }
                }
                break;

            case "Add":
                if (index >= 0 && index < targets.length) {
                    targets.splice(index, 0, power)
                } else {
                    console.log(`Invalid placement!`);
                }
                break;
            case "Strike":
                let left = index - power;
                let rigth = power*2 + 1;
                let chek = index + power;
                let chek2 = index - power
                if(chek <= targets.length -1 && chek2 >= 0){
                    targets.splice(left,rigth)
                } else{
                    console.log(`Strike missed!`);
                    break;
                }
                break;
        }
    }
    console.log(targets.join("|"));
}*/