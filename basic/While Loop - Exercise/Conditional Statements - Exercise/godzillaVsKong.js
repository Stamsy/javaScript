function filming(input){
    let budget = Number(input[0]);
    let numberOfExtras = Number(input[1]);
    let outfitPrice = Number(input[2]);

    let decor = budget*0.1;
    let sumClothing = numberOfExtras*outfitPrice;

    if(numberOfExtras>150){
        sumClothing = sumClothing*0.9;
    }
    let totalSum = sumClothing + decor;
    
     if (budget>=totalSum){
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget- totalSum).toFixed(2)} leva left.`)
        } else {
            console.log(`Not enough money!`)
            console.log(`Wingard needs ${(totalSum - budget).toFixed(2)} leva more.`);
        }
}
          

filming(["9587.88","222","55.68"])
