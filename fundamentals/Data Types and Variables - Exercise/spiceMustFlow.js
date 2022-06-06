function spiceMustFlow(startingYield) {
    let dayCount = 0;
    let totalExtracted = 0;

    while (startingYield >= 100) {
        dayCount++;
        totalExtracted += startingYield - 26;
        startingYield -= 10;
    }
    console.log(dayCount);
    if (dayCount !== 0) {
        console.log(totalExtracted - 26)
    } else {

        console.log(0);
    }
}
spiceMustFlow(111)