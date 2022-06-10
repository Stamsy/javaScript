function orders(product, num) {
    let result = 0;
    for (let i = 0; i < num; i++) {
        switch (product) {
            case "coffee": result = num * 1.5; break;
            case "water": result = num * 1; break;
            case "coke": result = num * 1.4; break;
            case "snacks": result = num * 2; break;
        }
    }

    console.log(result.toFixed(2));
}
orders("water", 5)