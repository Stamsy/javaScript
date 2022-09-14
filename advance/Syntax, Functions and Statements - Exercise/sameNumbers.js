function solve(number) {
    number = String(number)
    number = number.split("")
    for (let i = 0; i < number.length; i++) {
        if (number[i] != number[i+1]) {
            console.log(false);
            return
        } else {
            console.log(true);
            return
        }
    }
}
solve(2232222)