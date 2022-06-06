function demo(input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegeMenus = Number(input[2]);

    let chickenMenusPrice = chickenMenus * 10.35;
    let fishMenusPrice = fishMenus * 12.40;
    let vegeMenusPrice = vegeMenus * 8.15;

    let allMenusPrice = chickenMenusPrice + fishMenusPrice + vegeMenusPrice;
    let dessertPrice = allMenusPrice  - (allMenusPrice* 0.80);
    let totalPrice = allMenusPrice + dessertPrice +2.50;

    console.log(totalPrice);
}

    demo(["2", "4", "3"]);