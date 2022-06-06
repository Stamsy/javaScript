function travelAgency(input) {
    let city = input[0];
    let package = input[1];
    let vip = input[2];
    let numDays = Number(input[3]);
    let price = 0;

    if (numDays <= 0) {
        console.log(`Days must be positive number!`);
    } else if (numDays > 7) {
        numDays -= 1;
    }

    if (city === "Bansko" || city === "Borovets") {
        switch (package) {
            case "noEquipment":
                price = numDays * 80;
                if (vip === "yes") {
                    price *= 0.95;
                }
                break;
            case "withEquipment":
                price = numDays * 100;
                if (vip === "yes") {
                    price *= 0.90;
                }
                break;
            default:
                console.log(`Invalid input!`);
                break;
        }
    } else if (city === "Varna" || city === "Burgas") {
        switch (package) {
            case "noBreakfast":
                price = numDays * 100;
                if (vip === "yes") {
                    price *= 0.93;
                }
                break;
            case "withBreakfast":
                price = numDays * 130;
                if (vip === "yes") {
                    price *= 0.88;
                }
                break;
            default:
                console.log(`Invalid input!`);
                break;
        }
    } else {
        console.log(`Invalid input!`);
    }

    if (price > 0) {
        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    }
}
travelAgency(["Barovets",
    "noEquipment",
    "yes",
    "8"])