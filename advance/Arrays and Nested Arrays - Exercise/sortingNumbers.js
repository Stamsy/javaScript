function solve(input) {
    let newArr = [];
let sortArr = input.sort((a, b) => a - b)
    for(let i = 0; i < input.length; i++){
        let first = sortArr.shift();
        let last = sortArr.pop();
        newArr.push(first,last)
        i--
    }
    return newArr
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])