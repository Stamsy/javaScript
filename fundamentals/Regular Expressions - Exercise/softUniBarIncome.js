function softUniBarIncome(input) {
    let text = input.join("-");

    let pattern = /%(?<name>[A-Z][a-z]*)%[^$%|.]*\<(?<product>\w+)\>[^$%|.0-9]*\|(?<count>\d+)\|[^$%|.0-9]*(?<price>\d+(\.\d+)?)\$/g;
    let current = pattern.exec(text);
    let total = 0;
    while (current) {
        let currentPrice = current.groups.count * current.groups.price;
        console.log(`${current.groups.name}: ${current.groups.product} - ${currentPrice.toFixed(2)}`);

        total += currentPrice
        current = pattern.exec(text)

    }
    console.log(`Total income: ${total.toFixed(2)}`);

}

softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])
