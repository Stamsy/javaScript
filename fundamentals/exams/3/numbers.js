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
/*function solve(input) {
    let num = input.split(" ").map(Number);
    let sum = 0
    sum = num.reduce((a,b) => a + b, 0 )
    let avg = (sum / num.length).toFixed(2)

    num = num.filter(a => a > avg ).sort((a,b)=> b - a)
    num = num.slice(0,5)
    if (num.length < 1) {
        console.log("No");
        return
      }
    console.log(num.join(" "));
}*/