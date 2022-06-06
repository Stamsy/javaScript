function maxNumber(arr) {
    let arrL = arr.length;
    let maxNum = []

    for (let i = 0; i < arrL; i++) {
        let numOne = arr[i];
        let isLargets = true;
        for (let j = i + 1; j < arrL; j++) {
            let numTwo = arr[j]
            if (numOne <= numTwo) {
                isLargets = false
            }
        }
        if (isLargets) {
            maxNum.push(numOne);
        }
    }
    console.log(maxNum.join(" "));

}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);