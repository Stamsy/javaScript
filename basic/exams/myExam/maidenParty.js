function maidenParty(input) {
    let priceParty = Number(input[0]);
    let numLoveMessages = Number(input[1])
    let numWaxRoses = Number(input[2]);
    let numKeychains = Number(input[3]);
    let numCartoons = Number(input[4]);
    let numSurprises = Number(input[5]);
    let earnedMoney = 0;

    let sum = numLoveMessages * 0.6 + numWaxRoses * 7.20 + numKeychains * 3.60 + numCartoons * 18.20 + numSurprises * 22;
    let countItems = numLoveMessages + numWaxRoses + numKeychains + numCartoons + numSurprises;

    if (countItems >= 25) {
        sum *= 0.65;
        let hosting = sum * 0.10;
         earnedMoney = sum - hosting;

    }if (earnedMoney >= priceParty) {
            console.log(`Yes! ${(earnedMoney - priceParty).toFixed(2)} lv left.`);
        } else {
            console.log(`Not enough money! ${(priceParty - earnedMoney).toFixed(2)} lv needed.`);
        }
    
}
maidenParty(["320",
"8",
"2",
"5",
"5",
"1"])