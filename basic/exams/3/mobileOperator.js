function mobileOperator(input) {
    let termCotract = input[0];
    let typeContract = input[1];
    let internet = input[2];
    let countMonth = Number(input[3]);
    let tax = 0;

    if (typeContract === "Small") {
        if (termCotract === "one") {
            tax += 9.98;
        } else {
            tax += 8.58;
        }
    } else if (typeContract === "Middle") {
        if (termCotract === "one") {
            tax += 18.99;
        } else {
            tax += 17.09;
        }
    } else if (typeContract === "Large") {
        if (termCotract === "one") {
            tax += 25.98;
        } else {
            tax += 23.59;
        }
    } else if (typeContract === "ExtraLarge") {
        if (termCotract === "one") {
            tax += 35.99;
        } else {
            tax += 31.79;
        }
    } if (internet === "yes") {
        if (tax <= 10) {
            tax += 5.50;
        } else if (tax > 10 && tax <= 30) {
            tax += 4.35;
        } else {
            tax += 3.85;
        }
    }
        if (termCotract === "two") {
            tax *= 0.9625;
        
    }
        tax *= countMonth;
    
    console.log(`${tax.toFixed(2)} lv.`);


}
mobileOperator(["two",
    "Large",
    "no",
    "10"])