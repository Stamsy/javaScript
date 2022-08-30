function solve(input) {
    let newArr = []
    for (let i = 0; i < input.length; i++) {
        if (newArr.length === 0) {
            newArr.push(input[i]);
            continue
        }
        let last = newArr[newArr.length - 1];
        if (input[i] >= last) {
            newArr.push(input[i])
        }
    }
   return newArr;

}
solve([20, 
    3, 
    2, 
    15,
    6, 
    1])