function wildZoo(input) {
    let zoo = {}
 
   for(const line of input){
        if(line === 'EndDay'){
            break;
        }
    while (input[0] != "EndDay") {
        let tokens = input.shift().split(":");
        let command = tokens[0];
        let token = tokens[1].split("-")
        let name = token[0];
        switch (command) {
            case "Add":
                let needFood = Number(token[1]);
                let area = token[2];
                if (!zoo[name]) {
                    zoo[name] = { needFood, area }
                } else {
                    zoo[name].needFood += needFood;
                    zoo[name].area = area;
 
                }
                break;
 
 
            case "Feed":
                let food = Number(token[1]);
                if (zoo.hasOwnProperty(name)) {
                    zoo[name].needFood -= food;
                    if (zoo[name].needFood <= 0) {
                        delete zoo[name]
                        console.log(`${name} was successfully fed`);
                    }
                }
                break;
        }
    }
 
    console.log(`Animals:`);
    for (let anim in zoo) {
        console.log(`${anim} -> ${zoo[anim].needFood}g`);
 
    }
    console.log(`Areas with hungry animals:`)
    let aria;
    let count = 0
    for (aria in zoo) {
        if (zoo[aria].needFood > 0) {
            count++
        } else {
            break;
        }
    }
    console.log(`${zoo[aria].area}: ${count}`);
}
}
wildZoo(["Add: Adam-4500-ByTheCreek",
"Add: Maya-7600-WaterfallArea",
"Add: Maya-1230-WaterfallArea",
"Feed: Jamie-2000",
"EndDay"])