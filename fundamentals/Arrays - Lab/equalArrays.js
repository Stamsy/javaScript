function equalArrays(arr1, arr2) {
    let sum = 0
    let isEqual = true
    let lengthEqual = true
    let arrLength = Math.min(arr1.length, arr2.length)
    if (arr1.length !== arr2.length) {
        lengthEqual = false
    }

    for (let i = 0; i < arrLength; i++) {
        let currNum = Number(arr1[i])
        sum += currNum
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            isEqual = false;
            break;
        }
    }
    if (isEqual && lengthEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`)
    } else if (isEqual && !lengthEqual) {
        console.log(`Arrays are not identical. Found difference at ${arrLength} index`)
    }

}
equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])
equalArrays(['1'], ['10'])