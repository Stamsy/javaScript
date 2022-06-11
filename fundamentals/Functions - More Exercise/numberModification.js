function numberModification(number) {
    let num = number;
    let numToString = num.toString()
    let sum = 0;

    for (let i = 1; i <= numToString.length; i++) {
    
        let currentNum = Number(numToString[i]);
        sum += currentNum;

        if (sum / i < 5) {
            numToString += "9"
        }

    }
    console.log(numToString)
}

numberModification(103)