function filmPremiere(input) {
    let movie = input[0];
    let packageMovie = input[1];
    let ticket = Number(input[2]);

    let price = 0;

    if (movie === "John Wick") {

        switch (packageMovie) {
            case "Drink": price = ticket * 12; break;
            case "Popcorn": price = ticket * 15; break;
            case "Menu": price = ticket * 19; break;
        }

    } else if (movie === "Star Wars" || ticket >4) {
       
        switch (packageMovie) {
            case "Drink": price = ticket * 18; break;
            case "Popcorn": price = ticket * 25; break;
            case "Menu": price = ticket * 30; break;
        }if(ticket >=4){
            price = price*0.7;}
    
    } else if (movie === "Jumanji") {
        switch (packageMovie) {
            case "Drink": price = ticket * 9; break;
            case "Popcorn": price = ticket * 11; break;
            case "Menu": price = ticket * 14; break;
        }if(ticket == 2){
        price = price* 0.85;
        }
    }
    console.log(`Your bill is ${price.toFixed(2)} leva.`)


}


filmPremiere(["Jumanji",
    "Popcorn",
    "1"])