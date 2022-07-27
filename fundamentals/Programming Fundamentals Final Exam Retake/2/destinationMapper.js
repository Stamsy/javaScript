function destinationMapper(input) {

    let pattern = /(=|\/)(?<destination>[A-Z]{1}[A-Za-z]{2,})\1/g
    let match = pattern.exec(input)

    let destinations = [];
    let travelPoints = 0;

    while (match != null) {
        let curenntDestination = match.groups["destination"];
        destinations.push(curenntDestination)
        travelPoints += Number(curenntDestination.length)
        match = pattern.exec(input)
    }

    console.log(`Destinations: ${destinations.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")