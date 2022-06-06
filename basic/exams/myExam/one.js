function excursion (input){
    let people = Number(input[0]);
    let countOvernight = Number(input[1]);
    let cards = Number(input[2]);
    let tickets = Number(input[3]);


    let pricePersenOvernight = countOvernight*20;
    let priceCards = cards*1.60;
    let priceTicket = tickets*6;
    let total = (pricePersenOvernight + priceCards + priceTicket)*20;
    let totalPrice = total *1.25;
    console.log(totalPrice);
}
excursion(["131",
"9",
"33",
"46"])