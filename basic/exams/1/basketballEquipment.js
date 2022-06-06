function basketballEquipment(input){
    let tax = Number (input[0]);

    let sneakers = tax - tax*0.4;
    let clothes = sneakers*0.8;
    let ball = clothes/4
    console.log(clothes)

}
basketballEquipment(["320"])
