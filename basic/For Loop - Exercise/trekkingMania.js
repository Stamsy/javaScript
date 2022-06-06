function trekkingMania(input) {
    let countGroup = Number(input[0]);

    let people = 0;
    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let K2 = 0;
    let everest = 0;
    let group;

    for (let i = 1; i <= countGroup; i++) {

        group = Number(input[i]);
        people += group;

        if (group <= 5) {
            musala += group;
        } else if (group >= 6 && group <= 12) {
            monblan += group;
        } else if (group >= 13 && group <= 25) {
            kilimanjaro += group;
        } else if (group >= 26 && group <= 40) {
            K2 += group;
        } else if (group > 40) {
            everest += group;
        }
    }
    console.log(`${((musala / people) * 100).toFixed(2)}%`)
    console.log(`${((monblan / people) * 100).toFixed(2)}%`)
    console.log(`${((kilimanjaro / people) * 100).toFixed(2)}%`)
    console.log(`${((K2 / people) * 100).toFixed(2)}%`)
    console.log(`${((everest / people) * 100).toFixed(2)}%`)
}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])