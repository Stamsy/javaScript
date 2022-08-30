function solve(input) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
 
    for (let i = 0; i < input.length; i++) {
        mainDiagonal += input[i][i];
        secondaryDiagonal += input[i][input.length - 1 - i];
    }
    console.log(mainDiagonal, secondaryDiagonal);
}
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   )