function solve(input) {
    let newArray = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            newArray.unshift(input[i])
        } else {
            newArray.push(input[i])
        }
    }
    console.log(newArray.join("\n"));
}
solve([3, -2, 0, -1])