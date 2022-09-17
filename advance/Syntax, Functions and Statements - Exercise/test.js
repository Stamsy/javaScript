function solve(input){
    let result = input.sort((a, b) => a-b);
    let newRes = [];
    newRes = result.slice(result.length / 2);
    console.log(newRes);
}
solve([4, 7, 2, 5]);