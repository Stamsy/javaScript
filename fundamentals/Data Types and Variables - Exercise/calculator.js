function calculator(numOne, operator, numTwo) {
    let result = 0
    switch (operator) {
        case '+': result = numOne + numTwo; break;
        case '-': result = numOne - numTwo; break;
        case '*': result = numOne * numTwo; break;
        case '/': result = numOne / numTwo; break;
    }
    console.log(result.toFixed(2));
}
calculator(5,
    '+',
    10)