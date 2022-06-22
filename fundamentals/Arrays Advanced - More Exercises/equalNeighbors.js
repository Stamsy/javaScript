function equalNeighbors(matrix) {
    let equalPairs = 0;
 
    for (let row = 0; row < matrix.length; row++) {
        let currentRow = matrix[row];
        let nextRow;
        if (row + 1 < matrix.length) {
            nextRow = matrix[row + 1];
        } else {
            nextRow = [];
        }
        for (let j = 0; j < currentRow.length; j++) {
            if (currentRow[j] === currentRow[j + 1] || currentRow[j] === nextRow[j]) {
                if (
                    currentRow[j] === currentRow[j + 1] &&
                    currentRow[j] === nextRow[j]
                ) {
                    equalPairs += 2;
                } else {
                    equalPairs++;
                }
            }
        }
    }
 
    console.log(equalPairs);
}
equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])