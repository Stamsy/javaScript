function solve(input) {
    input = input.sort((a,b)=> a - b)
    let half = Math.floor(input.length/2);
    let newArray = input.slice(half)
    return newArray
}
solve([3, 19, 14, 7, 2, 19, 6])