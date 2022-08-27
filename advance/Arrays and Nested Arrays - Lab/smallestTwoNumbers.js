function solve(input) {

   input = input.sort((a, b) => a - b)
   let newArray = input.slice(0,2)
    console.log(newArray.join(" "));
}
solve([30, 15, 50, 5])