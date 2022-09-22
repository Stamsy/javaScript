function solve(input) {
    let fruits = {};

    for (let i = 0; i < input.length; i++) {
        let fruit = input.shift()
        let calories = Number(input.shift())
        fruits[fruit] = calories
        i--
    }
    console.log(fruits);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])