function distinctArray(numbers) {
    let num = [];
    for (let i = 0; i < numbers.length; i++) {
        if (!num.includes(numbers[i])) {
            num.push(numbers[i]);
        }
    }
    console.log(num.join(' '));
}
distinctArray([1, 2, 3, 3, 4])