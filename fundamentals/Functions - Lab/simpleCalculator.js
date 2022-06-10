function simpleCalculator(numOne,numnTwo,operator) {
    let result = 0;

    switch (operator) {
        case "multiply":result = numOne*numnTwo; break;
        case "divide": result = numOne/numnTwo;  break;
        case "add": result = numOne + numnTwo; break;
        case "subtract": result = numOne - numnTwo; break;
        
    }
    console.log(result);
    
}
simpleCalculator(5,5,'multiply')