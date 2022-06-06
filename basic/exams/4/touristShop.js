function touristShop(input) {
    let buget = Number(input[0]);
    let index = 1;
    let command = input[index];
    let counter = 0;
    let price = 0;
    let productSum = 0;

    while (command !== "Stop") {
        counter++;
        let nameProduct = command;
        index++;
        price = Number(input[index]);

        if (counter % 3 === 0) {
            price /= 2;
        }
        
        productSum += price;

        index++;
        command = input[index];
    
    if (command === "Stop" || productSum >buget )
        break;
    } 
    if(buget >= productSum){
        console.log(`You bought ${counter} products for ${productSum.toFixed(2)} leva.`);
    }
    if(productSum > buget){
        let diff = Math.abs(buget - productSum)
        console.log(`You don't have enough money!`)
        console.log(`You need ${(productSum - buget).toFixed(2)} leva!`)
    }
}

touristShop(["153.20",
    "Backpack",
    "25.20",
    "Shoes",
    "54",
    "Sunglasses",
    "30",
    "Stop"])