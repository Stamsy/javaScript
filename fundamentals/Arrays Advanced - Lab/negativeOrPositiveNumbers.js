function negativeOrPositiveNumbers(input) {
    let sort = [];

    for (let i = 0; i < input.length; i++) {
        let num = Number(input[i]);
        if (num >= 0) {
            sort.push(num)
        }
        else {
            sort.unshift(num)
        }
    }
    console.log(sort.join("\n"));

}
negativeOrPositiveNumbers([3,
    ,-2
    ,0
    ,-1])