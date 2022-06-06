function computerStore(input) {
    let index = 0;
    let command = input[index];
    index++
    let price = 0;
    let finish = true;
    let discount = 0;
    let sum = 0;
    let totalSum = 0;

    while (command !== "special" && command !== "regular") {
        price = Number(command);
        if (price < 0) {
            console.log("Invalid price!");
            command = input[index];
            index++;
            continue
        }
        sum += price;
        discount = sum * 0.2;
        command = input[index];
        index++;
    }

    if (command === "regular" && sum > 0) {
        totalSum = (discount + sum);
        console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${sum.toFixed(2)}$
    Taxes: ${discount.toFixed(2)}$
    -----------
    Total price: ${totalSum.toFixed(2)}$`);
    }
    if (command === "special" && sum > 0) {
        totalSum = (discount + sum) * 0.9;
        console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${sum.toFixed(2)}$
    Taxes: ${discount.toFixed(2)}$
    -----------
    Total price: ${totalSum.toFixed(2)}$`);
    }
    if (command === "regular" && price === 0 || command === "special" && sum === 0) {
        console.log("Invalid order!");
    }

}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])

