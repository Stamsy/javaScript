function condenseArrayToNumber(nums) {
    let sum = [];
    for (let i of nums) {
        sum.push(i)
    }
    while (sum.length > 1) {
        let tempArr = [];
        for (let j = 0; j < sum.length - 1; j++) {
            tempArr[j] = sum[j] + sum[j + 1]
        }
        sum = tempArr;
    }
    console.log(sum.join());
}
condenseArrayToNumber([2, 10, 3])
condenseArrayToNumber([5, 0, 4, 1, 2])