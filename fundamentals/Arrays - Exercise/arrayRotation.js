function arrayRotation(arr, num) {

    while (num > 0) {
        let rotation = arr.shift();
        arr.push(rotation)
        num--
    }
    console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5)