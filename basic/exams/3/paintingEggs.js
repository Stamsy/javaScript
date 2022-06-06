function paintingEggs(input) {
    let eggSize = input[0];
    let colour = input[1];
    let countEggs = Number(input[2]);

    let price = 0;

    if (eggSize === "Large") {
        switch (colour) {
            case "Red": price = countEggs * 16; break;
            case "Green": price = countEggs * 12; break;
            case "Yellow": price = countEggs * 9; break;
        }

    } else if (eggSize === "Medium") {
        switch (colour) {
            case "Red": price = countEggs * 13; break;
            case "Green": price = countEggs * 9; break;
            case "Yellow": price = countEggs * 7; break;
        }
    } else if (eggSize === "Small") {
        switch (colour) {
            case "Red": price = countEggs * 9; break;
            case "Green": price = countEggs * 8; break;
            case "Yellow": price = countEggs * 5; break;
        }
    }
    let cost = price * 0.35;
    let total = price - cost;
    console.log(`${total.toFixed(2)} leva.`);
}
paintingEggs(["Large",
    "Red",
    "7"])