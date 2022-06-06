function divisionWithoutRemainder(input) {
    let index = 0;
    let counter = Number(input[index]);
    index++;

    let countTwo = 0;
    let countTree = 0;
    let countFour = 0;

    let percentTwo = 0;
    let percentTree = 0;
    let percentFour = 0;
    for (let i = 0; i < counter; i++) {
        let num = Number(input[index]);
        index++;
        if (num % 2 === 0) {
            countTwo++;
        }
        if (num % 3 === 0) {
            countTree++;
        } if (num % 4 === 0) {
            countFour++;
        }
        percentTwo = countTwo / counter * 100;
        percentTree = countTree / counter * 100;
        percentFour = countFour / counter * 100;
    } console.log(`${percentTwo.toFixed(2)}%`);
    console.log(`${percentTree.toFixed(2)}%`);
    console.log(`${percentFour.toFixed(2)}%`);

}
divisionWithoutRemainder(["10",
    "680",
    "2",
    "600",
    "200",
    "800",
    "799",
    "199",
    "46",
    "128",
    "65"])
