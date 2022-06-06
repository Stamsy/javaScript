function sumOfNumbers(input) {
    let numText = "" + input[0];
    let sum = 0;

    for (i = 0; i < numText.length; i++) {
        let n = Number(numText.charAt(i));
        sum += n;
    } console.log(`The sum of the digits is:${sum}`)
}
sumOfNumbers(["1234"])