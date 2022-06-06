function sumOfTwoNumbers(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let isFound = false;
    let counter = 0;
    let numberOne = 0;
    let numberTwo = 0;
    for (let a = startNumber; a <= endNumber; a++) {
        for (let b = startNumber; b <= endNumber; b++) {
            let sum = a + b;
            counter++;
            if (sum === magicNumber) {
                numberOne = a;
                numberTwo = b;
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (isFound) {
        console.log(`Combination N:${counter} (${numberOne} + ${numberTwo} = ${magicNumber})`);
    } else {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}



sumOfTwoNumbers(["23",
    "24",
    "20"])