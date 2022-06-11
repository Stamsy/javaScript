function nxNMatrix(num) {
    let matrix = [];

    for (let i = 0; i < num; i++) {
        let row = []
        for (let j = 0; j < num; j++) {
            row.push(num);
        }
        matrix.push(row.join(' '))
    }
    console.log(matrix.join("\n"));
}
nxNMatrix(3)