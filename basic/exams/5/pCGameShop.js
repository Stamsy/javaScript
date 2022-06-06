function pCGameShop(input) {
    let index = 0;
    let gameCount = Number(input[index]);
    index++;

    let counterFornite = 0;
    let counterHearthstone = 0;
    let counterOverwatch = 0;
    let counterOther = 0;


    for (let i = 0; i < gameCount; i++) {
        let name = input[index];
        index++;

        switch (name) {
            case "Fornite": counterFornite++; break;
            case "Hearthstone": counterHearthstone++; break;
            case "Overwatch": counterOverwatch++; break;
            default: counterOther++; break;
        }

    }
    let forniteP = counterFornite / gameCount * 100;
    let heartstoneP = counterHearthstone / gameCount * 100;
    let overwatchP = counterOverwatch / gameCount * 100;
    let otherP = counterOther / gameCount * 100;

    console.log(`Hearthstone - ${heartstoneP.toFixed(2)}%`);
    console.log(`Fornite - ${forniteP.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchP.toFixed(2)}%`);
    console.log(`Others - ${otherP.toFixed(2)}%`);
}
pCGameShop(["4",
    "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike"])