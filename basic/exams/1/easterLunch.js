function easterLunch(input) {
    let countEasterBread = Number(input[0]);
    let eggs = Number(input[1]);
    let cookies = Number(input[2]);

    let priceEasterBread = countEasterBread * 3.2;
    let priceEggs = eggs * 4.35;
    let priceCookies = cookies * 5.4;
    let colorEggs = eggs * 12 * 0.15;

    let total = priceEasterBread + priceEggs + priceCookies + colorEggs;
    console.log(total.toFixed(2));

}
easterLunch(["2",
    "3",
    "2"])
