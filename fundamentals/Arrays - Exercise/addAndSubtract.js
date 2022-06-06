function addAndSubtract(nums) {

    let sumOriginalArray = 0;
    let sumModifiedArray = 0;
    let numsL = nums.length;


    for (let i = 0; i < numsL; i++) {
        sumOriginalArray += nums[i];
        if (nums[i] % 2 === 0) {
            nums[i] += i;
        } else {
            nums[i] -= i;
        }
        sumModifiedArray += nums[i]
    }

    console.log(nums);
    console.log(sumOriginalArray);
    console.log(sumModifiedArray);

}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);