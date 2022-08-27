function solve(input) {
    let num = Number(input.shift());
    let plants = {}

    for (let i = 0; i < num; i++) {
        let [plant, rarity] = input.shift().split("<->");
        if (!plants.hasOwnProperty(plant)) {
            plants[plant] = {
                rarity: 0,
                counter: 0,
                sum: 0
            }
            plants[plant].rarity += Number(rarity)
        }
    }

    while (input[0] !== "Exhibition") {
        let tokens = input.shift().split(": ");
        let command = tokens[0];
        let [plant,rating] = tokens[1].split(" - ");
        rating = Number(rating)

        switch (command) {
            case "Rate":
                if(plants.hasOwnProperty(plant)){
                    plants[plant].rating = rating
                } else{
                    console.log(`error`);
                }
               
                break;

            case "Update":
                if(plants.hasOwnProperty(plant)){
                    let newRating = rating
                    plants[plant].rating = newRating
                } else{
                    console.log(`error`);
                }

                break;
            case "Reset":
                if(plants.hasOwnProperty(plant)){
                    delete plants[plant].rating
                } else{
                    console.log(`error`);
                }

                break;
        }
    }
    Object.entries(plants).forEach(([plant,rarity,rating])=>{
        console.log();
    })
}
solve(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
console.log("***************************************");
solve(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])
