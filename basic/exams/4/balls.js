function balls(input) {
    let number = Number(input[0]);
    let index = 1;
    let coulrs = input[index];

    let points = 0;
    let sum = 0;
    let counterBalls = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let otherColors = 0;
    let dividesBlackBalls = 0;

    while (index <= number) {
        coulrs = input[index];
        index++
        counterBalls++

        switch (coulrs) {
            case "red":
                points += 5;
                sum = points;
                redBalls++;
                break;
            case "orange":
                points += 10;
                sum = points;
                orangeBalls++;
                break;
            case "yellow":
                points += 15;
                sum = points;
                yellowBalls++;
                break;
            case "white":
                points += 20;
                sum = points;
                whiteBalls++;
                break;
            case "black":
                sum = Math.floor(sum / 2);
                dividesBlackBalls++;
                break;
            default: otherColors++;

        }

    }
    console.log(`Total points: ${sum}`)
    console.log(`Red balls: ${redBalls}`)
    console.log(`Orange balls: ${orangeBalls}`)
    console.log(`Yellow balls: ${yellowBalls}`)
    console.log(`White balls: ${whiteBalls}`)
    console.log(`Other colors picked: ${otherColors}`)
    console.log(`Divides from black balls: ${dividesBlackBalls}`)

}
balls(["10",
    "white",
    "white",
    "ee",
    "red",
    "orange",
    "red",
    "black",
    "black",
    "black",
    "black"])