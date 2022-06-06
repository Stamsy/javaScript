function cleverLily(input) {
    let ageLily = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let countToyPrice = Number(input[2]);

    let savedMoney = 0;
    let toysCounter = 0;
    let stolenMoney = 0;
    let addedMoney = 10;

    for (let i = 1; i <= ageLily; i++) {
        if (i % 2 === 0) {
            savedMoney += addedMoney;
            stolenMoney++;
            addedMoney += 10;

        } else {
            toysCounter++;
        }
    }
    let totalMoneyFromToys = toysCounter * countToyPrice;
    let totalSavedMoney = (savedMoney + totalMoneyFromToys) - stolenMoney;

    if (totalSavedMoney >= priceWashingMachine) {
        console.log(`Yes! ${(totalSavedMoney - priceWashingMachine).toFixed(2)}`)
    } else {
        console.log(`No! ${(priceWashingMachine - totalSavedMoney).toFixed(2)}`)
    }

}
cleverLily(["21",
"1570.98",
"3"])