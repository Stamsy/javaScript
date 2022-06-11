function oddAndEvenSum(num) {
    let odd = 0;
    let even = 0;

    let numAsString = num.toString();

    for (let i = 0; i < numAsString.length; i++) {
        let n = Number(numAsString[i]);

        if (n % 2 === 0) {
            even += n;
        } else {
            odd += n;
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);

}
oddAndEvenSum(1000435)