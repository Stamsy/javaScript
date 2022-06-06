function aluminumJoinery(input) {
    let numberJoinery = Number(input[0]);
    let typeJoinery = input[1];
    let delivery = input[2];
    
    let price = 0;
    let total = 0;
    
    if (numberJoinery < 10) {
        console.log(`Invalid order`);
    
    }else if (numberJoinery >= 10){

        switch(typeJoinery){
            case "90X130":
                price = 110;
                total = price * numberJoinery;

                if(numberJoinery > 60){
                    total *= 0.92;
                }else if (numberJoinery > 30){
                    total *= 0.95;
                }
                break;

                case "100X150":
                price = 140;
                total = price * numberJoinery;

                if(numberJoinery > 80){
                    total *= 0.90;
                }else if (numberJoinery > 40){
                    total *= 0.94;
                }
                break;
                case "130X180":
                price = 190;
                total = price * numberJoinery;

                if(numberJoinery > 50){
                    total *= 0.88;
                }else if (numberJoinery > 20){
                    total *= 0.93;
                }
                break;
                case "200X300":
                price = 250;
                total = price * numberJoinery;

                if(numberJoinery > 50){
                    total *= 0.86;
                }else if (numberJoinery > 25){
                    total *= 0.91;
                }
                break;
        }
         if (delivery === "With delivery") {
            total += 60;
            
        } if (numberJoinery > 99) {
            total = total* 0.96;
        
        }
    
            console.log(`${total.toFixed(2)} BGN`);
    }
}

aluminumJoinery(["2",
"130X180",
"With delivery"])