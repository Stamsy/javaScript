function excursionCalculator(input) {
    let numPeople = Number(input[0]);
    let season = input[1];
    let price = 0;

    if (numPeople <= 5) {
        switch (season) {
            case "spring":
                price = numPeople * 50;
                break;
            case "summer":
                price = numPeople * 48.50 * 0.85;

                break;
            case "autumn":
                price = numPeople * 60;
                break;
            case "winter":
                price = numPeople * 86 * 1.08;
                break;
        }

    }
    if (numPeople > 5) {
        switch (season) {
            case "spring":
                price = numPeople * 48;
                break;
            case "summer":
                price = numPeople * 45 * 0.85;

                break;
            case "autumn":
                price = numPeople * 49.50;
                break;
            case "winter":
                price = numPeople * 85 * 1.08;
                break;
        }
    }
    console.log(`${price.toFixed(2)} leva.`);
}
excursionCalculator(["5",
    "spring"])