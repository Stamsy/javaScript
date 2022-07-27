function plantDiscovery(input) {
    let num = Number(input.shift())
    let plantsObj = {}

    for (let i = 0; i < num; i++) {
        let tokens = input.shift().split("<->")
        let plant = tokens[0]
        let rarity = Number(tokens[1])
        plantsObj[plant] = {};
        plantsObj[plant]['rarity'] = rarity;
        plantsObj[plant]['rating'] = [];
        plantsObj[plant['counter']] = 0;

    }

    while (input[0] != "Exhibition") {
        let token = input.shift().split(": ")
        let command = token[0];
        let plantInfo = token[1].split(" - ");

        switch (command) {
            case "Rate":
                let plant = plantInfo[0];
                let rating = Number(plantInfo[1]);

                if (plantsObj.hasOwnProperty(plant)) {
                    plantsObj[plant]['rating'].push(rating);
                    plantsObj[plant]['counter']++;
                } else {
                    console.log(`error`);
                }
                break;

            case "Update":

                break;
            case "Reset":
                break;
        }
    }
    console.log(plantsObj);
}
plantDiscovery((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]))