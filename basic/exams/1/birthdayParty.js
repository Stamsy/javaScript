function birthdayParty(arg1){
    let rent = Number(arg1);

    let cakePrice = rent*0.2;
    let drinks = cakePrice - cakePrice*0.45;
    let animator = rent/3;

    let needMoney = cakePrice+drinks+animator+rent;
    console.log(needMoney);

}
birthdayParty(["2250"])