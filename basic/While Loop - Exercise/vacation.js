function vacation(input) {
    let moneyForTrip = Number(input[0]);
    let availableMoney = Number(input[1]);
    let index = 2;
    let command = input[index];
    let spendDays = 0;
    let totalDeys = 0;


    while (availableMoney < moneyForTrip) {
        totalDeys++;
        index++;
        if (command === "spend") {
            spendDays++;
            if (spendDays === 5) {
                console.log(`You can't save the money.`);
                console.log(totalDeys);
                break;
            }
            let moneyToSpend = Number(input[index]);
            availableMoney -= moneyToSpend;
            if (availableMoney < 0) {
                availableMoney = 0;
            }
        } else if(command === "save"){
            spendDays = 0;
            let moneyToSave = Number(input[index]);
            availableMoney += moneyToSave;
        }
        index ++;
        command = input[index];
    } if(availableMoney >= moneyForTrip){
       console.log(`You saved the money for ${totalDeys} days.`)
    }

}
vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])
