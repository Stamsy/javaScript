function easterDecoration(input) {
    let index = 0;
    let clients = Number(input[index]);
    index++;
    let sum = 0;

    for (let i = 1; i <= clients; i++) {
        let command = input[index];
        let price = 0;
        let countPurches = 0;

        while (command !== "Finish") {
            let purchase = input[index];
           
            switch (purchase) {
                case "basket":
                    price += 1.50;
                    countPurches ++;
                    break;
                case "wreath":
                    price += 3.80;
                    countPurches ++;
                    break;
                case "chocolate bunny":
                    price += 7;
                    countPurches ++;
                    break;
            }
            command = input[index];
            index++;
        }

        if (command === "Finish") {
            if (countPurches % 2 !== 0) {
                sum += price;
                console.log(`You purchased ${countPurches} items for ${price.toFixed(2)} leva.`);
            } else {
                price -= (price * 0.20);
                sum += price;
                console.log(`You purchased ${countPurches} items for ${price.toFixed(2)} leva.`);
            }
        }

    }
    let avg = sum / clients;
    console.log(`Average bill per client is: ${avg.toFixed(2)} leva.`);
}
easterDecoration(["2",
    "basket",
    "wreath",
    "chocolate bunny",
    "Finish",
    "wreath",
    "chocolate bunny",
    "Finish"])