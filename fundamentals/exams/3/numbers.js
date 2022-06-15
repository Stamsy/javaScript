function numbers(input) {
    let nums = input.split(" ").map(Number)
    let sum = 0;
    let averege = 0;
    let count = 0;
   
    let numbers = [];
    for (let i = 0; i < nums.length; i++) {
      count++;
      sum += nums[i];
      averege = sum / count;
    }
    for (let num of nums) {
      if (num > averege) {
        numbers.push(num);
        numbers.sort((a, b) => b - a);
      }
      if (numbers.length > 5) {
        numbers.pop();
      }
    }
    if (numbers.length < 1) {
      console.log("No");
    }
    console.log(numbers.join(" "));
  }
numbers('-1 -2 -3 -4 -5 -6')