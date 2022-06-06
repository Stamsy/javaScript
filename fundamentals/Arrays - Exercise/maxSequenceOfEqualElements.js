function maxSequenceOfEqualElements(arr) {
    let longestSequence = [];
    let arrL = arr.length;

    for (let i = 0; i < arrL; i++) {
        let currentNum = [];
        for (let j = i; j < arrL; j++) {
            if (arr[i] === arr[j]) {
                currentNum.push(arr[i])
            } else {
                break;
            }
        }
        if (currentNum.length > longestSequence.length) {
            longestSequence = currentNum
        }
    }
    console.log(longestSequence.join(" "));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])