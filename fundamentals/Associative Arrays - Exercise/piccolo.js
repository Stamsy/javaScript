function piccolo(arr) {
    let parking = new Set();

    for (let line of arr) {
        let tokens = line.split(", ");
        let command = tokens[0];
        let carNumber = tokens[1];
        switch (command) {
            case "IN":
                parking.add(carNumber);
                break;

            case "OUT":
                parking.delete(carNumber);
                break;
        }
    }
    if (parking.size === 0) {
        return console.log(`Parking Lot is Empty`)
    }
    let sortParking = Array.from(parking.values()).sort()
    console.log(sortParking.join('\n'));
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)