function palindromeIntegers(input) {

    for (let i of input) {
        let current = String(i);
        let reverse = String(i).split('').reverse().join('');

        if (current === reverse) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}
palindromeIntegers([123, 323, 421, 121])