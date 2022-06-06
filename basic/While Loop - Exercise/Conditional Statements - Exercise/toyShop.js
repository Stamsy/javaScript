function toyShop(input) {
    let excursion =Number(input[0]);
    let puzzle = Number(input[1]);
    let doll = Number(input[2]);
    let bear = Number(input[3]);
    let minion= Number (input[4]);
    let truck = Number(input[5]);
    let puzzlePrice = puzzle * 2.6;
    let dollPrice = doll* 3;
    let bearPrice = bear * 4.10;
    let minionsPrice = minion* 8.2;
    let truckPrice = truck * 2;
    let sum = puzzlePrice + dollPrice + bearPrice + minionsPrice + truckPrice;
    let countToy = puzzle + doll + bear + minion + truck;
    
    if (countToy>=50){
        sum*= 0.75;
        
    }
    let moneyAfterRent =sum*0.9;
if(moneyAfterRent>= excursion){
    console.log(`Yes! ${(moneyAfterRent -excursion).toFixed(2)} lv left.`);
} else{
    console.log(`Not enough money! ${(excursion - moneyAfterRent).toFixed(2)} lv needed.`);
}
}

   
toyShop(["320","8","2","5","5","1"]);
