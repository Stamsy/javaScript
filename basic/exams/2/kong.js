function filming(input){
    let budget = Number(input[0]);
    let  statist = Number(input[1]);
    let priceforClothing = Number(input[2]);

    if (statist>150){
        priceforClothing = priceforClothing*0.9;
    }
    let clothingsum = statist*priceforClothing;
    let decor = budget*0.1;
    let total = decor+ clothingsum;

    if (total>budget){
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${(total-budget).toFixed(2)} leva more.`)
    } else{
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${(budget-total).toFixed(2)} leva left.`)
    }
}
filming(["15437.62","186","57.99"])