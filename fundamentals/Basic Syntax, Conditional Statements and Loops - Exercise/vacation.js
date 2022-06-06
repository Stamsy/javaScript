function vacation(num, typeGroup, day) {
    num = Number(num);
    let price = 0;

    if (typeGroup === 'Students') {
        switch (day) {
            case 'Friday':
                price = num * 8.45;
                if (num >= 30) {
                    price *= 0.85;
                }
                break;
            case 'Saturday': price = num * 9.80;
                if (num >= 30) {
                    price *= 0.85;
                }
                break;
            case 'Sunday': price = num * 10.46;
                if (num >= 30) {
                    price *= 0.85;
                }
                break;

        }
    } else if (typeGroup === 'Business') {
        if (num > 100) {
            num -= 10;
        }
        switch (day) {
            case 'Friday': price = num * 10.90; break;
            case 'Saturday': price = num * 15.60; break;
            case 'Sunday': price = num * 16; break;
        }
    } else if (typeGroup === 'Regular') {
        switch (day) {
            case 'Friday': price = num * 15;
                if (num >= 10 && num <= 20) {
                    price *= 0.95;
                }
                break;
            case 'Saturday': price = num * 20;
                if (num >= 10 && num <= 20) {
                    price *= 0.95;
                }
                break;
            case 'Sunday': price = num * 22.50;
                if (num >= 10 && num <= 20) {
                    price *= 0.95;
                }
                break;
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation (40,
    "Regular",
    "Saturday")