function solve(input) {
    let first = Number(input.shift())
    let last = Number(input.pop())
    let result = first + last
    return result
}
solve(['20', '30', '40'])