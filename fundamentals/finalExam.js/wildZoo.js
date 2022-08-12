function wildZoo(input) {
    let zoo = {};
    let areas = {};

    for (let el of input) {
        if (el === "EndDay") {
            break;
        }
        let [command, rest] = el.split(": ");
        let [animalName, food, area] = rest.split("-");
        food = Number(food);
        switch (command) {
            case "Add":
                if (!zoo.hasOwnProperty(animalName)) {
                    zoo[animalName] = {
                        food: 0,
                        area
                    };

                }
                zoo[animalName].food += food
                if (!areas.hasOwnProperty(area)) {
                    areas[area] = new Set();
                }
                areas[area].add(animalName)
                break;

            case "Feed":

                if (!zoo.hasOwnProperty(animalName)) {
                  continue
                }
                zoo[animalName].food -= food
                if (zoo[animalName].food <= 0) {
                    area = zoo[animalName].area
                    delete zoo[animalName];

                    areas[area].delete(animalName)
                    if(areas[area].size === 0){
                        delete areas[area]
                    }
                    console.log(`${animalName} was successfully fed`);
                }
                break;
        }
    }
    console.log("Animals:");
    Object.entries(zoo).forEach(([animal, obj]) => {
        console.log(` ${animal} -> ${obj.food}g`);
    })
    console.log("Areas with hungry animals:");
    Object.entries(areas).forEach(([area, set]) => {
        console.log(` ${area} -> ${set.size}`);
    })
}
    wildZoo(["Add: Bonie-3490-RiverArea",
    "Add: Sam-5430-DeepWoodsArea",
    "Add: Bonie-200-RiverArea",
    "Add: Maya-4560-ByTheCreek",
    "Feed: Maya-2390",
    "Feed: Bonie-3500",
    "Feed: Johny-3400",
    "Feed: Sam-5500",
    "EndDay"])
    
