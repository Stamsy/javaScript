function solve(month, yaer) {
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        console.log(31);
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        console.log(30);
    } else if (month == 2) {
        if (yaer % 4 === 0) {
            console.log(29);
        } else {
            console.log(28);
        }
    }
}
solve(1, 2012)