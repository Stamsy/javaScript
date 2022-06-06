function addBags(input) {
    let priceLuggage = Number(input[0]);
    let kgLuggage = Number(input[1]);
    let leftDays = Number(input[2]);
    let countLuggage = Number(input[3]);
    let tax = 0;
    let total = 0;
    
    if (kgLuggage < 10) {
        tax = priceLuggage * 0.2;
    } else if (kgLuggage >= 10 && kgLuggage <= 20) {
        tax = priceLuggage * 0.5;
    } else if (kgLuggage > 20) {
        tax = priceLuggage;

    } if (leftDays > 30) {
        tax *= 1.1;

    } else if (leftDays > 7 && leftDays <= 30) {
        tax *= 1.15;
    } else if (leftDays <= 7) {
        tax *= 1.4;
    }

    total = tax * countLuggage;
    console.log(`The total price of bags is: ${total.toFixed(2)} lv.`);
}
addBags(["25.50",
"5",
"36",
"6"])