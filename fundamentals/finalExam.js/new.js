function solve(input) {
 
    let currComm = input.shift();
    let obj = {};
    let areaObj = {}
    while (currComm !== "EndDay") {
        currComm = currComm.split(": ");
        let comm = currComm.shift();
        let [name, food, area] = currComm.join("").split("-");
        switch(comm) {
            case "Add":
                if(obj.hasOwnProperty(name)) {
                    obj[name].food += +food;
                } else {
                    obj[name] = {food: +food, area: area};
                    if(areaObj.hasOwnProperty(area)) {
                        areaObj[area]++;
                    } else {
                        areaObj[area] = 1;
                    }
                }
                break;
            case "Feed":
                if(obj.hasOwnProperty(name)) {
                    obj[name].food -= +food;
                    if(obj[name].food <= 0) {
                        let currArea = obj[name].area
                        areaObj[currArea]--;
                        if(areaObj[currArea] <= 0) {
                            delete areaObj[currArea];
                        }
                        delete obj[name];
                        console.log(`${name} was successfully fed`);
                    }
                }
                break;
        }
        currComm = input.shift();
    }
    if(Object.entries(obj).length > 0) {
        console.log("Animals:");
        for(let [key,value] of Object.entries(obj)) {
            console.log(`${key} -> ${value.food}g`);
        }
    }
    if(Object.entries(areaObj).length > 0) {
        console.log("Areas with hungry animals:");
    for(let [key,value] of Object.entries(areaObj)) {
        console.log(`${key}: ${value}`);
    }
    }
}
solve(["Add: Adam-4500-ByTheCreek",
"Add: Maya-7600-WaterfallArea",
"Add: Maya-1230-WaterfallArea",
"Feed: Jamie-2000",
"EndDay"])