function processOddNumbers(input) {
    let result = [];
    let final = 0;
    for (let i = 0; i < input.length; i++) {
        let num = input[i];
        if (i % 2 !== 0) {
            result.push(num);
            final = result.map(x => x * 2);

        }
    }
    console.log(final.reverse().join(" "));

}
processOddNumbers([3,0,10,4,7,3])