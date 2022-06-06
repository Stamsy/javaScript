function easterTrip(input) {
    let destination = input[0];
    let date = input[1];
    let night = Number(input[2]);

    let price = 0;

    if (destination === "France") {
        switch (date) {
            case "21-23": price = night * 30; break;
            case "24-27": price = night * 35; break;
            case "28-31": price = night * 40; break;
        }

    } else if (destination === "Italy") {
        switch (date){
            case "21-23": price = night * 28; break;
            case "24-27": price = night * 32; break;
            case "28-31": price = night * 39; break;
        }
    } else if (destination === "Germany") {
        switch (date){
            case "21-23": price = night * 32; break;
            case "24-27": price = night * 37; break;
            case "28-31": price = night * 43; break;
        }
    }
    console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`);

}
easterTrip(["France",
"28-31",
"8"])