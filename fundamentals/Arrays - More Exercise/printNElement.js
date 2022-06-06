function printNElement(arr) {
    let colection = arr.length
    let step = Number(arr[colection - 1])
    let result = [];
    for (let i = 0; i < colection - 1; i++) {
        if (i % step === 0) {
            result.push(arr[i])

        }

    }
    console.log(result.join(" "));
}
printNElement(['1', '2', '3', '4', '5', '6'])