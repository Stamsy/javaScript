function solve(input){
   
let sum = input.reduce((a,b)=> a + b);
let sumTwo = 0;
for(let i = 0; i < input.length; i++){
    sumTwo += 1/input[i]
}
let string = input.join("");
console.log(sum);
console.log(sumTwo);
console.log(string);
}
solve([2, 4, 8, 16])