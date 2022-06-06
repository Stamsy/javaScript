function demo(input) {

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let liters = Number(input[2]);
    let discount = Number(input[3]);

let finalPriceForPens = pens * 5.80;
let finalPriceForMarkers = markers * 7.2;
let finalPriceForLiquid = liters * 1.20;

let finalPrice = finalPriceForPens + finalPriceForMarkers + finalPriceForLiquid;
let priceAfterDiscount =  finalPrice - (finalPrice * (discount/100));
console.log(priceAfterDiscount);
}
demo(["2", "3", "4", "25"]);