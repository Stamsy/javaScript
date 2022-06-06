function trekkingMania(input) {
    let index = 0
    let countGroupe = Number(input[index]);
    index++

    let counter = 0;
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    let musalaPercentage = 0;
    let monblanPercentage = 0;
    let kilimandjaroPercentage = 0;
    let k2Percentage = 0;
    let everestPercentage = 0;

    for (let i = 0; i < countGroupe; i++) {
        let groupePeople = Number(input[index]);

        if (groupePeople >= 41) {
            everest += groupePeople;
        }
        if (groupePeople >= 26 && groupePeople <= 40) {
            k2 += groupePeople;
        }
        if (groupePeople >= 13 && groupePeople <= 25) {
            kilimandjaro += groupePeople;
        }
        if (groupePeople >= 6 && groupePeople <= 12) {
            monblan += groupePeople;
        }
        if (groupePeople <= 5) {
            musala += groupePeople
        }
        index++;
        counter += groupePeople

    }
    musalaPercentage = musala / counter * 100;
    monblanPercentage = monblan / counter * 100;
    kilimandjaroPercentage = kilimandjaro / counter * 100;
    k2Percentage = k2 / counter * 100;
    everestPercentage = everest / counter * 100;
    console.log(`${musalaPercentage.toFixed(2)}%`);
    console.log(`${monblanPercentage.toFixed(2)}%`);
    console.log(`${kilimandjaroPercentage.toFixed(2)}%`);
    console.log(`${k2Percentage.toFixed(2)}%`);
    console.log(`${everestPercentage.toFixed(2)}%`);

}
trekkingMania(["5",
    "25",
    "41",
    "31",
    "250",
    "6"])
