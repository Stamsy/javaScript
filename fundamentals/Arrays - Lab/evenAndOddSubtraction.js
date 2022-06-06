function evenAndOddSubtraction(nums) {
    let evenNums = 0;
    let oddNums = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evenNums += nums[i];
        } else if (nums[i] % 2 !== 0) {
            oddNums += nums[i];
        }
    }
    console.log(evenNums - oddNums);

}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);