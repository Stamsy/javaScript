function solve(input) {
    input = input.sort((a, b) => a.localeCompare(b))
    for(let i = 0; i < input.length;i++){
        console.log(`${i+1}${"."}${input[i]}`);
    }
}
solve(["John", "Bob", "Christina", "Ema"])

/* funtion solve(arr){
    let sorted = arr.sort((a,b) => a.localeCompare(b));

    let orderNumber = 1;

    sorted.forEach((name) => {
        console.log(`${orderNumber}.${name}`);
        orderNumber++
    });
}*/