function sumFirstAndLast(input) {
    let firstNum = Number(input.shift());
    let lastNum = Number(input.pop());
    let sum = firstNum + lastNum
    console.log(sum);
}
sumFirstAndLast(['20', '30', '40'])