
function birthdayParty(input) {
    let rentPrice = Number(input[0]);
 
    let priceForCake = rentPrice * 0.20;
    let priceForDrinks = priceForCake * 0.55;
    let animator = rentPrice /3;

    let neededSum = (rentPrice + priceForCake + priceForDrinks + animator);
 
    console.log(neededSum)
}

 birthdayParty(["2250"])