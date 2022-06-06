function poolDay(input){
    let countPeople = Number(input[0]);
    let taxEnter =Number(input[1]);
    let deskchair = Number(input[2]);
    let umbrella = Number(input[3]);

    let moneyForEnter = countPeople*taxEnter;
    let moneyForDeskchair = Math.ceil(countPeople*0.75)*deskchair;
    let moneyForUmbrella = Math.ceil(countPeople*0.5)*umbrella;
    let total =moneyForEnter+moneyForDeskchair+moneyForUmbrella;

    console.log(`${(total).toFixed(2)} lv.`)

}
poolDay(["21","5.50","4.40","6.20"])