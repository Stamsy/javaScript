function degustationParty(input) {
    let guests = {}
    let count = 0;
    while (input[0] !== "Stop") {
        let [command, name, meal] = input.shift().split("-");
        
        switch (command) {
            case "Like":
                if (!guests.hasOwnProperty(name)) {
                    guests[name] = []
                    guests[name].push(meal)
                }
                else if(!guests.hasOwnProperty(meal)){
                    guests[name].push(meal)
                }
                break;

            case "Dislike":
                if (!guests.hasOwnProperty(name)) {
                    console.log(`${name} is not at the party.`);
                }
                else if (guests[name].includes(meal)) {
                    count++
                     let index = guests[name].indexOf(meal)
                     guests[name].splice(index,1)
                    console.log(`${name} doesn't like the ${meal}.`);
                } else{
                    console.log(`${name} doesn't have the ${meal} in his/her collection.`);

                break;
        }
    }
}
    Object.entries(guests).forEach(([name, meal]) => {
        console.log(`${name}: ${meal}`);
    })
    console.log(`Unliked meals: ${count}`);

}
degustationParty([
    "Like-Krisi-shrimps",
    "Dislike-Vili-carp",
    "Dislike-Krisi-salad",
    "Stop"
  ]);
  
  /*
    Vili is not at the party.
    Krisi doesn't have the salad in his/her 
    collection.
    Krisi: shrimps
    Unliked meals: 0
  */