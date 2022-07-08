function catalogue(arr) {
    let catalogue = {}
    for(let i = 0; i< arr.length; i+=2){
        let product = arr[i];
        catalogue[product] = arr[i];
        console.log(catalogue);
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ])