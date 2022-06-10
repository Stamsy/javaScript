function signCheck(numOne, numTwo, numTree) {

    let negative = 0;
    let num = [];
    num.push(numOne, numTwo, numTree)
  
    for (let i = 0; i < num.length; i++) {
let n = num[i]
        if (n < 0) {
            negative++;
        }
    }
    if (negative % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }

}
signCheck(-6, -12, 14)