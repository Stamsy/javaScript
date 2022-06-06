function easterGuests(input) {
    let numGuest = Number(input[0]);
    let budget = Number(input[1]);

    let countEasterBread = Math.ceil(numGuest / 3);
    let eggs = numGuest * 2;

    let priceEasterBread = countEasterBread * 4;
    let priceEggs = eggs * 0.45;
    let total = priceEasterBread + priceEggs;

    if (total > budget) {
        console.log(`Lyubo doesn't have enough money.`)
        console.log(`He needs ${(total - budget).toFixed(2)} lv. more.`)
    } else if (total <= budget) {
        console.log(`Lyubo bought ${countEasterBread} Easter bread and ${eggs} eggs.`);
        console.log(`He has ${(budget - total).toFixed(2)} lv. left.`);
    }
}
easterGuests(["9",
    "12"])