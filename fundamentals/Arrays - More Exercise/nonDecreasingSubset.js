function nonDecreasingSubset(arrey) {
    let result = []
    biggestNum = 0;
    for (let i = 0; i < arrey.length; i++) {
        let num = arrey[i];

        if (num >= biggestNum) {
            biggestNum = num;
            result.push(biggestNum)
        } else {
            continue
        }
    }
    console.log(result.join(' '));

}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]
)