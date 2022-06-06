function energyBooster(input) {
    let fruit = input[0];
    let size = input[1];
    let order = Number(input[2]);

    let price = 0;

    if (size === "small") {
        switch (fruit) {
            case "Watermelon": price = 2 * 56 * order; break;
            case "Mango": price = 2 * 36.66 * order; break;
            case "Pineapple": price = 2 * 42.10 * order; break;
            case "Raspberry": price = 2 * 20 * order; break;
        }
    }
    else if (size === "big") {
        switch (fruit) {
            case "Watermelon": price = 5 * 28.70 * order; break;
            case "Mango": price = 5 * 19.60 * order; break;
            case "Pineapple": price = 5 * 24.80 * order; break;
            case "Raspberry": price = 5 * 15.20 * order; break;

        }
    }
    if (price > 1000) {
        price *= 0.5;
    } else if (price >= 400 && price <= 1000) {
        price *= 0.85;
    }
    console.log(`${price.toFixed(2)} lv.`);
}

energyBooster(["Raspberry",
"small",
"50"])