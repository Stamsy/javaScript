function skiTrip(input) {
    let days = Number(input[0]);
    let room = input[1];
    let rating = input[2];

    let price = 0;
    let nights = days - 1;

    if (days < 10) {
        switch (room) {
            case "room for one person": price = nights * 18; break;
            case "apartment": price = nights * 25 * 0.70; break;
            case "president apartment": price = nights * 35 * 0.90; break;
        } if (rating === "positive") {
            price = price + (price * 0.25);
        } else {
            price = price - (price * 0.1);
        }

    } else if (days >= 10 && days < 15) {
        switch (room) {
            case "room for one person": price = nights * 18; break;
            case "apartment": price = nights * 25 * 0.65; break;
            case "president apartment": price = nights * 35 * 0.85; break;
        } if (rating === "positive") {
            price = price + (price * 0.25);
        } else {
            price = price - (price * 0.1);
        }

    } else if (days > 15) {
        switch (room) {
            case "room for one person": price = nights * 18; break;
            case "apartment": price = nights * 25 * 0.50; break;
            case "president apartment": price = nights * 35 * 0.80; break;
        } if (rating === "positive") {
            price = price + (price * 0.25);
        } else {
            price = price - (price * 0.1);
        }

    } console.log((price).toFixed(2))
} 

skiTrip(["2",
"apartment",
"positive"])
