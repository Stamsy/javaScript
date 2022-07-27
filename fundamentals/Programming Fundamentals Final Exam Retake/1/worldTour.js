function worldTour(input) {
    let stops = input.shift();

    while (input[0] != "Travel") {
        let tokens = input.shift().split(":")

        let command = tokens[0];
        switch (command) {
            case 'Add Stop':
                let index = Number(tokens[1]);
                let string = tokens[2];
                if (index >= 0 && index < stops.length) {
                    stops = stops.substring(0, index) + string + stops.substring(index);
                    console.log(stops);
                }
                break;

            case "Remove Stop":
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);

                if (startIndex >= 0 && startIndex < stops.length && endIndex >= 0 && endIndex < stops.length) {
                    stops = stops.substring(0, startIndex) + stops.substring(endIndex + 1)
                }

                console.log(stops);
                break;
            case "Switch":
                let oldString = tokens[1];
                let newString = tokens[2];
                stops = stops.replace(oldString, newString);
                console.log(stops);
                break;
        }

    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);

}
worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]))