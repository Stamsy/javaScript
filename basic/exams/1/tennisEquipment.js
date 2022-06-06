function tennisEquipment(input){
    let priceTennisRacket = Number (input[0]);
    let countTennisRacket = Number(input[1]);
    let countsneakers = Number(input[2]);
 
    let tennisRacket = priceTennisRacket*countTennisRacket;
    let sneakers = (priceTennisRacket/6)*countsneakers;
 
    let otherЕquipment = (tennisRacket+sneakers)*0.2;
    let total = tennisRacket+sneakers+otherЕquipment;
    let priceDjokovic = total/8;
    let priceSponsors = (total*7)/8;
    console.log(`Price to be paid by Djokovic ${Math.floor(priceDjokovic)}`)
    console.log(`Price to be paid by sponsors ${Math.ceil(priceSponsors)}`)
 
 
}
tennisEquipment("850","4","2")