function equalNeighbors(matrix) {
    let equalPairs = 0;
 
    for (let row = 0; row < matrix.length; row++){
        
        let currentRow = matrix[row];
        let nextRow;
        if (row + 1 < matrix.length) {
            nextRow = matrix[row + 1]
        } else {
            nextRow = [];
        }
        for (let j = 0; j < currentRow.length; j++){
            if (currentRow[j] == currentRow[j + 1] && currentRow[j]== nextRow [j]) {
                equalPairs++;
            }
        }
    }
 
 
console.log(equalPairs);
 
}
equalNeighbors([['test', 'yo', 'yo', 'ho'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']]

)