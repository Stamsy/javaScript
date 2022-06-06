function costFood(input){
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);

    let priceDogFood = dogFood * 2.50;
    let priceCatFood = catFood * 4;
    let total = priceDogFood + priceCatFood;
    console.log(total)
}
 costFood(["13", "9"])