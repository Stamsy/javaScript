function hotelRoom(input) {
    let month = input[0];
    let numberOfNights = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    if (month === "May" || month === "October") {
        studioPrice = 50;
        apartmentPrice = 65;
        if (numberOfNights > 14) {
            studioPrice = studioPrice * 0.70;
            apartmentPrice = apartmentPrice * 0.90;
        } else if (numberOfNights > 7) {
            studioPrice = studioPrice * 0.95;
        }

    } else if (month === "June" || month === "September") {
        studioPrice = 75.20;
        apartmentPrice = 68.70;
        if (numberOfNights > 14) {
            studioPrice = studioPrice * 0.8;
            apartmentPrice = apartmentPrice * 0.90;
        }
    } else if (month === "July" || month === "August") {
        studioPrice = 76;
        apartmentPrice = 77;
        if (numberOfNights > 14) {
            apartmentPrice = apartmentPrice * 0.90;
        }

    } console.log(`Apartment: ${(apartmentPrice * numberOfNights).toFixed(2)} lv.`)
    console.log(`Studio: ${(studioPrice * numberOfNights).toFixed(2)} lv.`)

}
hotelRoom (["May","15"])