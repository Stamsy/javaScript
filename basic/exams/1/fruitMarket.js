function fruitMarket(arg1,arg2,arg3,arg4,arg5){
    let priceStrowberry = Number (arg1);
    let poundBananas = Number(arg2);
    let poundOrange =Number(arg3);
    let poundRaspberries = Number(arg4);
    let poundStrowberry = Number(arg5);


    let priceRaspberries = priceStrowberry/2;
    let priceOrange = priceRaspberries - (priceRaspberries*0.4);
    let priceBananas = priceRaspberries - (priceRaspberries*0.8);
    
    let sumRaspberries = priceRaspberries*poundRaspberries;
    let sumOranges = priceOrange*poundOrange;
    let sumBananas = priceBananas*poundBananas;
    let sumStrowberry = priceStrowberry*poundStrowberry;

    let total = (sumRaspberries+sumBananas+sumOranges+sumStrowberry).toFixed(2);
    console.log(total)


}
fruitMarket("48","10","3.3","6.5","1.7")