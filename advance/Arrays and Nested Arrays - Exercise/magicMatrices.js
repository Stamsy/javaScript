function solve(input){
        let rowSums = [];
        let colSums = [];
        for (let i = 0; i < input.length; i++) {
            let row = input[i];
            let sum = row.reduce((a, b) => a + b)
            rowSums.push(sum)

            let newRow = [];
            for (let y = 0; y < input.length; y++) {
                newRow.push(input[y][i]);
            }
            sum = newRow.reduce((a, b) => a + b)
            colSums.push(sum)
        }
        console.log(rowSums.concat(colSums).every((el, i, arr) => el === arr[0]));
    }

    solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])