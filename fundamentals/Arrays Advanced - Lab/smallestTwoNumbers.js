function smallestTwoNumbers(numbers) {
    let sort = numbers.sort((a,b) => a - b);
    let result = numbers.slice(0,2);
    console.log(result.join(" "));
}
smallestTwoNumbers([30, 15, 50, 5])