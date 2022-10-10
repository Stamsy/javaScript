function solve(arr) {
    let maxNum = Number.NEGATIVE_INFINITY;
   
    for (let i = 0; i < arr.length; i++) {
        let numArrey= arr[i];
        let num = Math.max(...numArrey)
        if (num > maxNum) {
            maxNum = num
        }
    }

    return maxNum;
}
solve([[-20, -50, -10],
[-8, -33, -145]])