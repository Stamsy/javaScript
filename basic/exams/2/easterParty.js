function easterParty(input) {
    let countGuest = Number(input[0]);
    let priceForOne = Number(input[1]);
    let budget = Number(input[2]);

    let priceCake = budget * 0.1

    if (countGuest > 20) {
        priceForOne *= 0.75;
    }
    else if (countGuest > 15 && countGuest <= 20) {
        priceForOne *= 0.8
    }
    else if (countGuest >= 10 && countGuest <= 15) {
        priceForOne *= 0.85;
    }
    let price = countGuest * priceForOne
    let totalPrice = priceCake + price;

    if (totalPrice > budget) {
        console.log(`No party! ${(totalPrice - budget).toFixed(2)} leva needed.`);
    } else if (totalPrice <= budget) {
        console.log(`It is party time! ${(budget - totalPrice).toFixed(2)} leva left.`);
    }

} easterParty(["8",
"25",
"340"])