function solve(input) {
    let arrey = []
    let num = 0;
    for (let i = 0; i < input.length; i++) {
        if (i % 2 !== 0 && i !== 0) {
            num = input[i] * 2
            arrey.push(num)
        }
    }
    arrey = arrey.reverse();
    return arrey;
}
solve([10, 15, 20, 25])