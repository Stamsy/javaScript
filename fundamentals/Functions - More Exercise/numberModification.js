function numberModification(modifiedNumber) {
    while (getAvarage(modifiedNumber) < 5) {
        modifiedNumber += "9";
    }
    console.log(modifiedNumber);
 
    function getSum(number) {
        let numToString = number.toString();
        let sum = 0;
        for (let i = 0; i < numToString.length; i++) {
            sum += Number(numToString[i])
        }
        return sum;
    }
 
    function getAvarage(num) {
        return getSum(num) / num.toString().length
    }
}

numberModification(45555)