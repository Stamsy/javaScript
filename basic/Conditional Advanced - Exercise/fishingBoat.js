function fishingBoat(input) {
    let buget = Number(input[0]);
    let season = input[1];
    let fisherman = input[2];

    let boatPrice = 0;
    switch (season) {
        case "Spring": boatPrice = 3000; break;
        case "Summer":
        case "Autumn": boatPrice = 4200; break;
        case "Winter": boatPrice = 2600; break;
    }

    if (fisherman <= 6) {
        boatPrice = boatPrice * 0.9;

    } else if (fisherman <= 11) {
        boatPrice = boatPrice * 0.85;

    } else if (fisherman >= 12) {
        boatPrice = boatPrice * 0.75;

    }
    if (fisherman % 2 === 0 && season !== "Autumn") {
        boatPrice = boatPrice * 0.95;
    }
    if (buget >= boatPrice) {
        console.log(`Yes! You have ${(buget - boatPrice).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(boatPrice - buget).toFixed(2)} leva.`)
    }

}
fishingBoat(["3600","Autumn","6"]);