function agencyProfit(input) {
    let name = input[0];
    let adultTicket = Number(input[1]);
    let kidTicket = Number(input[2]);
    let clearPriceAdult = Number(input[3]);
    let tax = Number(input[4]);

    let clearPriceKid = clearPriceAdult - clearPriceAdult * 0.70;
    let adultTax = clearPriceAdult + tax;
    let kidTax = clearPriceKid + tax;
    let total = adultTax * adultTicket + kidTax * kidTicket;
    let earnMoney = total * 0.2;
    console.log(`The profit of your agency from ${name} tickets is ${earnMoney.toFixed(2)} lv.`);

}
agencyProfit(["WizzAir",
    "15",
    "5",
    "120",
    "40"])