function carWash(input) {
    let result = 0;
    for (let i = 0; i < input.length; i++) {
        let wash = input[i];

        switch (wash) {
            case "soap": result += 10; break;
            case "water": result = result + (result * 0.20); break;
            case "vacuum cleaner": result = result + (result * 0.25); break;
            case "mud": result = result - (result * 0.1); break;
        }
    }
    console.log(`The car is ${result.toFixed(2)}% clean.`);

}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])