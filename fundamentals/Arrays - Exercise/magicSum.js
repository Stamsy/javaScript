function magicSum(arr, num) {

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        let numOne = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let numTwo = arr[j];
            sum = numOne + numTwo;
            if (sum === num) {
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }

}
magicSum([14, 20, 60, 13, 7, 19, 8],
    27)