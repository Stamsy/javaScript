function bakeryShop(input) {
    let shop = {}
let count = 0
    while (input[0] !== "Complete") {
        let [command, quantity, food] = input.shift().split(" ");
        quantity = Number(quantity)
        switch (command) {
            case "Receive":
                if (!shop.hasOwnProperty(food)) {
                    if (quantity <= 0) {
                        continue
                    }
                    shop[food] = {
                        quantity: 0
                    }
                    
                    shop[food].quantity += quantity
                }
                break;
            case "Sell":
                if (!shop.hasOwnProperty(food)) {
                    console.log(`You do not have any ${food}.`);
                }
              else  if (shop[food].quantity < quantity) {
                    console.log(`There aren't enough ${food}. You sold the last ${shop[food].quantity} of them.`);
                    count += shop[food].quantity
                    delete shop[food]
                }else{
                    shop[food].quantity -= quantity;
                    count += quantity
                    console.log(`You sold ${quantity} ${food}.`);
                    if(shop[food].quantity <= 0){
                        delete shop[food]
                    }
                }
                break;
        }
    }
    Object.entries(shop).forEach(([food,quantity])=>{
        console.log(`${food}: ${quantity.quantity}`);
        
    })
    console.log(`All sold: ${count} goods`);

}
bakeryShop([
    "Receive -5 donuts",
    "Sell 15 donuts",
    "Sell 1 bread",
    "Complete"])