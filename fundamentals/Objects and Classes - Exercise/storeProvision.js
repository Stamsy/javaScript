function storeProvision(currentStoks, forDelivery) {
    let storeProducks = {};
    let currentStoksL = currentStoks.length;
    let forDeliveryL = forDelivery.length

    for (let i = 0; i < currentStoksL; i += 2) {
        let product = currentStoks[i];
        storeProducks[product] = Number(currentStoks[i + 1]);
    }
    for (let j = 0; j < forDeliveryL; j += 2) {
        let product = forDelivery[j];

        if (!storeProducks.hasOwnProperty(product)) {
            storeProducks[product] = 0;
        }
        storeProducks[product] += Number(forDelivery[j + 1])

    }
    for (let product in storeProducks) {
        console.log(`${product} -> ${storeProducks[product]}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])