function solve(input) {
    input = input.sort((a, b) => a.localeCompare(b));

    let current = [];

    let char = "";

    for (let i = 0; i < input.length; i++) {
        current = input[i].split(" : ")
        if (input[i][0] !== char) {
            console.log(input[i][0]);
        }
        console.log(`  ${current[0]}: ${current[1]}`);
        char = input[i][0]
    }
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])