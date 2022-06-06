function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let fightCount = 0;
    let shieldCount = 0;
    let expenses = 0;

    for (let i = 1; i <= lostFights; i++) {
        fightCount++

        if (fightCount % 2 === 0) {
            expenses += helmetPrice;
        }
        if (fightCount % 3 === 0) {
            expenses += swordPrice;
        }
        if (fightCount % 6 === 0) {
            expenses += shieldPrice;
            shieldCount++;
            if (shieldCount % 2 === 0) {
                expenses += armorPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200)