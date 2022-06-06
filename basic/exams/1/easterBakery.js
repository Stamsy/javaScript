function easterBakery(input){
    let priceFlour = Number(input[0]);
    let kgFlour = Number(input[1]);
    let kgSuger = Number(input[2]);
    let countEggs = Number(input[3]);
    let countYeast = Number(input[4]);


    let priceSuger = priceFlour*0.75;
    let priceEggs = priceFlour*1.1;
    let priceYeast =priceSuger*0.2;

    let flour = priceFlour * kgFlour;
    let suger = priceSuger * kgSuger;
    let yeast = countYeast * priceYeast;
    let eggs = countEggs * priceEggs;

    let total = flour + suger + yeast + eggs;

    console.log(total.toFixed(2));
}
easterBakery(["63.44",
"3.57",
"6.35",
"8",
"2"])