function coffeeMachine(input) {
    let drink = input[0];
    let suger = input[1];
    let numDrink = Number(input[2]);
    let price = 0;
    if (drink === "Espresso") {
        switch (suger) {
            case "Without":
                price = numDrink * 0.90 * 0.65;
                if (numDrink > 5) {
                    price *= 0.75;
                    if (price >= 15) {
                        price *= 0.8;
                    }
                }; break;
            case "Normal":
                price = numDrink * 1;
                if (numDrink > 5) {
                    price *= 0.75;
                    if (price >= 15) {
                        price *= 0.8;
                    }
                }; break;
            case "Extra":
                price = numDrink * 1.2;
                if (numDrink > 5) {
                    price *= 0.75;
                    if (price >= 15) {
                        price *= 0.8;
                    }
                }; break;
        }

    }
    else if (drink === "Cappuccino") {
        switch (suger) {
            case "Without":
                price = numDrink * 1*0.65;
                if (price >= 15) {
                    price *= 0.8;
                }; break;
            case "Normal":
                price = numDrink * 1.2;
                if (price >= 15) {
                    price *= 0.8;
                }; break;
            case "Extra":
                price = numDrink * 1.6;
                if (price >= 15) {
                    price *= 0.8;
                }; break;
        }

    }
    else if (drink === "Tea") {
        switch (suger) {
            case "Without":
                price = numDrink * 0.5*0.65;
                if (price >= 15) {
                    price *= 0.8;
                }; break;
            case "Normal":
                price = numDrink * 0.6;
                if (price >= 15) {
                    price *= 0.8;
                }; break;
            case "Extra":
                price = numDrink* 0.70;
                if (price >= 15) {
                    price *= 0.8;
                }; break;
        }
    }
    console.log(`You bought ${numDrink} cups of ${drink} for ${price.toFixed(2)} lv.`);
}
coffeeMachine(["Tea",
"Extra",
"3"])