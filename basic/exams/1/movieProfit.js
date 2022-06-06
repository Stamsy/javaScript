function movie(input){
    let name = input[0];
    let numberOfDays = Number(input[1]);
    let countTicket = Number(input[2]);
    let ticket = Number(input[3]);
    let percentage = Number(input[4]);

    let priceTicket = ticket*countTicket;
    let income = numberOfDays*priceTicket;
    let cinemapercentage = income*percentage/100;
    let incomeMovie = income-cinemapercentage;
    console.log(`The profit from the movie ${name} is ${(incomeMovie).toFixed(2)} lv.`)
}

movie(["The Programmer","20","500","7.50","7"])