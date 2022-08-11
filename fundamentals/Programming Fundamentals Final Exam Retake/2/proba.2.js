function solve(input) {
    let money = Number(input.shift());
    let users = Number(input[0]);
    let sum = 0;
    let count = 0;
 
    for (let i = 1; i <= users; i++) {
        let numSearch = Number(input[i]);
        count++;
        if (i % 3 === 0) {
            if (numSearch <= 1) {
               continue;
            } else if (numSearch > 5) {
                sum += numSearch * money * 6;
            } else {
                sum += numSearch * money * 3;
            }
        } else if (i % 3 !== 0) {
            if (numSearch <= 1) {
                continue;
            } else if (numSearch > 5) {
                sum += numSearch * money * 2;
            } else {
                sum += numSearch * money;
            }
        }
    }
    console.log(`Total money earned: ${sum.toFixed(2)}`);
}
solve(["3.0",
"7",
"0",
"1",
"2",
"3",
"4",
"6",
"15"])