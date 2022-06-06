function club(input){
    let earnedMoney = Number(input[0]);
    let index = 0;
    index++;
    
    let end = input.length;
    let price = 0;
    let totalPrice = 0
    for (let i = 0; i < end; i++){
        let nameCocteil = input[index];
        index++;
        let countCoctail = Number(input[index]);
        index++;
        price = nameCocteil.length;
         totalPrice = countCoctail*price
    
    
    console.log(totalPrice);
}

    
}
club(["500",
"Bellini",
"6",
"Bamboo",
"7",
"Party!"])