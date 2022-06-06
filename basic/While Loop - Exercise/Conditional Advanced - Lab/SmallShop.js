function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let count = Number(input[2]);
    let price = 0;

    if (city === "Sofia") {

        switch (product) {
            case "coffee": price = count * 0.5; break;
            case "water": price = count * 0.8; break;
            case "beer": price = count * 1.2; break;
            case "sweets": price = count * 1.45; break;
            case "peanuts": price = count * 1.6; break;

        }

    } else if (city === "Plovdiv") {
        switch (product) {
            case "coffee": price = count * 0.4; break;
            case "water": price = count * 0.7; break;
            case "beer": price = count * 1.15; break;
            case "sweets": price = count * 1.3; break;
            case "peanuts": price = count * 1.5; break;
        }

    } else if (city === "Varna") {

        switch (product) {
            case "coffee": price = count * 0.45; break;
            case "water": price = count * 0.7; break;
            case "beer": price = count * 1.1; break;
            case "sweets": price = count * 1.35; break;
            case "peanuts": price = count * 1.55; break;
        }
    }
    console.log(price);
}
smallShop (["coffee","Varna","2"])