function excursion(input) {
    let people = Number(input[0]);
    let countOvernight = Number(input[1]);
    let cards = Number(input[2]);
    let tickets = Number(input[3]);

    let overnightOnePerson = countOvernight * 20;
    let priceCardsPerson = cards * 1.6;
    let priceTicket = tickets * 6;

    let priceOnePerson = overnightOnePerson + priceCardsPerson + priceTicket;
    let discountPrice = priceOnePerson * people;
    let totalPrice = discountPrice + discountPrice * 0.25;
    console.log(totalPrice.toFixed(2));

} excursion(["131",
"9",
"33",
"46"])