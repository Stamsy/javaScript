function factorialDivision(numOne, numTwo) {
    let factorialOne = 1;
    let factorialTwo = 1;
    for (let i = 1; i <= numOne; i++) {
        factorialOne *= i;
    }
    for (let j = 1; j <= numTwo; j++) {
        factorialTwo *= j
    }
    let result = factorialOne / factorialTwo
    console.log(result.toFixed(2));
}
factorialDivision(6, 2)