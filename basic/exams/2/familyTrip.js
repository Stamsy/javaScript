function familyTrip(input) {
    let budget = Number(input[0]);
    let numberOfNights = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let percentageAdditionalCosts = Number(input[3]);
 
 
    if (numberOfNights > 7) {
        pricePerNight = pricePerNight - (pricePerNight * 0.05);
    }
 
    let priceForAllNights = numberOfNights * pricePerNight;
 
    let additionalCosts = budget * (percentageAdditionalCosts / 100);
 
    let allCosts = priceForAllNights + additionalCosts;
 
    let diff = Math.abs(budget - allCosts);
 
    if (budget >= allCosts) {
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${diff.toFixed(2)} leva needed.`);
    }
 
}

familyTrip(["800.5","8","100" ,"2"])