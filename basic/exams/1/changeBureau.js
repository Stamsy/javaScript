function changeBureau(input){
    let countBitcoint = Number(input[0]);
    let countUna = Number(input[1]);
    let commission = Number(input[2]);

    let priceBitcoint = countBitcoint*1168;
    let priceUna = countUna*0.15*1.76;
    let totalLeva = priceBitcoint + priceUna;
    let priceEuro = totalLeva/1.95;
    let priceCommision = priceEuro*commission/100;
    let total = priceEuro - priceCommision;
    console.log(total.toFixed(2));

}
changeBureau(["1",
"5",
"5"])