function demo(input) {

    let tax = Number(input[0]);
    let shoes = tax * 0.60;
    let outfit = shoes * 0.80;
    let ball = outfit / 4;
    let extra = ball / 5;
    let total = tax + shoes + outfit + ball + extra
    console.log(total);

}
demo(["365"]);