function deckOfCards(arr) {
    let stateArr = arr.shift().split(", ")
    let numberOfCommands = Number(arr.shift());


    for (let i = 0; i < numberOfCommands; i++) {
        let token = arr.shift().split(", ");
        let command = token[0];
        switch (command) {
            case "Add":
                let card = token[1];

                if (!stateArr.includes(card)) {
                    stateArr.push(card)
                    console.log(`Card successfully added`);
                } else {
                    console.log(`Card is already in the deck`);
                }
                break;
            case "Remove":
                let card1 = token[1];

                if (stateArr.includes(card1)) {
                    let indexOfC = stateArr.indexOf(card1);
                    stateArr.splice(indexOfC, 1);
                    console.log(`Card successfully removed`);
                } else {
                    console.log(`Card not found`);


                    break;
                }
                break;
            case "Remove At":
                let card2 = Number(token[1]);
                if (card2 < 0 || card2 > stateArr.length) {
                    console.log(`Index out of range`);
                    break;
                } else {
                    stateArr.splice(card2, 1);
                    console.log(`Card successfully removed`);
                    break;
                }
            case "Insert":
                let card3 = Number(token[1]);
                let cardOfName = token[2];
                if (card3 < 0 || card3 > stateArr.length) {
                    console.log(`Index out of range`);
                    break;
                } else {
                    if (stateArr.includes(cardOfName)) {
                        console.log(`Card is already in the deck`);
                        break;
                    } else {
                        stateArr.splice(card3, 0, cardOfName)
                        console.log(`Card successfully added`);
                    }
                }

        }

    }
    let result = stateArr.join(", ");
    console.log(result);
}
deckOfCards((["Ace of Diamonds, Queen of Hearts, King of Clubs", "3", "Add, Ace of Diamonds", "Insert, 2, Anna", "Remove, Ace of Diamonds"]))