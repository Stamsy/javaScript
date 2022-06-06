function safari(input){
    let budget = Number(input[0]);
    let literOfFuel = Number(input[1]);
    let  day = (input[2]);
    
    let Fuilprice = literOfFuel*2.1;
    let allPrice = Fuilprice + 100;

    if(day === "Sunday"){
    allPrice=allPrice*0.8;

    }
    if(day ==="Saturday"){
    allPrice = allPrice*0.9;
    }
    if(budget>allPrice){
        console.log(`Safari time! Money left: ${(budget-allPrice).toFixed(2)} lv. `)
    } else{
        console.log(`Not enough money! Money needed: ${(allPrice-budget).toFixed(2)} lv.`)
    }
}
safari(["120", "30", "Saturday"])