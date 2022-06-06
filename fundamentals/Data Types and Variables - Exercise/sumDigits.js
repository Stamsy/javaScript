function sumDigits(num) {
    let numToString = num.toString();
    let digit = 0;
    for (let n = 0; n < numToString.length; n++) {
        digit += Number(numToString[n]);
    }

    console.log(digit);
}
sumDigits(97561)