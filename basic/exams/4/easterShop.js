function easterShop(input){
    let index = 0;
    let countEggs =Number(input[index]);
    index++
    let command = input[index];
    
    let counter = 0;
    while(command !== "Close"){
        let text = input[index];
        index++
        let count = Number(input[index]);
       
             if(text === "Buy" && countEggs < count){
                console.log(`Not enough eggs in store!`);
                console.log(`You can buy only ${countEggs}.`);
                break;
             
             } else if(text === "Buy"){
                countEggs -= count;
                counter += count;
            }
              else if(text === "Fill"){
                countEggs += count;
             }
            index++;
            command = input[index];
            } if(command === "Close"){
                 console.log(`Store is closed!`);
                 console.log(`${counter} eggs sold.`);
    }
}
easterShop(["13",
"Buy",
"8",
"Fill",
"3",
"Buy",
"10"])