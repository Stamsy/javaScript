function cinema(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let column = Number(input[2]);

    let price = 0;

    if (type == "Premiere") {
        console.log(`${(price = rows * column * 12).toFixed(2)} leva`);
    } else if (type == "Normal") {
        console.log(`${(price = rows * column * 7.5).toFixed(2)} leva`);
    } else if (type == "Discount") {
        console.log(`${(price = rows * column * 5).toFixed(2)} leva`);
    }

}
cinema(["Discount",
    "12",
    "30"])
