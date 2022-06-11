function perfectNumber(number) {
    let sum = 1;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    if (sum === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
perfectNumber(27)