function pirates(input) {
    let citys = {};

    while (input[0] != "Sail") {
        let tokens = input.shift().split("||");
        let city = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);
        
        if (!citys[city]){
            citys[city] = {population,gold}
        } else{
        citys[city].population += population;
        citys[city].gold += gold;
        }
    }

    while (input[0] != "End") {
        let token = input.shift().split("=>");
        let command = token[0];
        let city = token[1];

        switch (command) {
            case "Plunder":
                let people = Number(token[2]);
                let gold = Number(token[3]);
                citys[city].population -= people;
                citys[city].gold -= gold;
                console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                if (citys[city].population <= 0 || citys[city].gold <= 0) {
                    delete citys[city]
                    console.log(`${city} has been wiped off the map!`);
                }
                break;

            case "Prosper":
                let golds = Number(token[2]);

                if (golds < 0) {
                    console.log(`Gold added cannot be a negative number!`);
                } else {
                    citys[city].gold += golds
                    console.log(`${golds} gold added to the city treasury. ${city} now has ${citys[city].gold} gold.`);
                }

                break;
        }
    }
    let count = Object.keys(citys).length;
    if(count === 0){
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
    console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`)

    for (let name in citys) {
        console.log(`${name} -> Population: ${citys[name].population} citizens, Gold: ${citys[name].gold} kg`);
    }
    }
}
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])
