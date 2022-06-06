function oscarCeremony(input){
    let rent = Number(input[0]);
    
    let figurinesPrice = rent*0.70;
    let cateringPrice = figurinesPrice*0.85;
    let soundSystemPrice = cateringPrice/2;

    let total = (rent + figurinesPrice+cateringPrice+soundSystemPrice).toFixed(2);
    console.log(total)

}
oscarCeremony(["3500"])