function solve(num) {
    num = num.toString();
    let firstDigit = num[0];

    let sum = Number(firstDigit);

    for (let i = 1; i < num.length; i++) {
        if (num[i] !== firstDigit) {
            console.log(false);
            result = num.split("")
            .map(Number)
            .reduce((a,b)=> a+b)
            console.log(result);
            return
        }
        sum += Number(num[i]);
    }
    console.log(true);
    console.log(sum);
}
solve(1234);
