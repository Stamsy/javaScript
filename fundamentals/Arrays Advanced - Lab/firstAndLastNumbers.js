function firstAndLastNumbers(input) {
    let numK = input.shift();

    let firstNums = input.slice(0,numK);
    let lastNums = input.slice(-numK);
    console.log(firstNums.join(" "));
    console.log(lastNums.join(" "));

}
firstAndLastNumbers([2, 
    7, 8, 9])