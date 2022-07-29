function plantDiscovery(array){
    let num = Number(array.shift());
    let plantInfo = {};
 
    for (let i = 0; i < num; i++){
        let infoPlants = array[i].split(`<->`);
        let plant = infoPlants[0];
        let rarity = infoPlants[1];
 
        if(!plantInfo.hasOwnProperty(plant)){
            plantInfo[plant] = {};
        }
 
        if(!plantInfo[plant].hasOwnProperty(rarity)){
            plantInfo[plant]['rarity'] = rarity;
        }
    }
 
    let index = num;
 
    let command = array[index];
    index++;
 
    while (command !== `Exhibition`){
        let currLine = command.split(`: `)
        let currCommnad = currLine[0];
        let elements = currLine[1].split(` - `)
        let currPlant = elements[0];
 
        if(!plantInfo.hasOwnProperty(currPlant)){
            console.log(`error`)
        } else {
 
            switch(currCommnad) {
                case 'Rate':
                    let currRating = Number(elements[1]);
 
                    if(!plantInfo[currPlant].hasOwnProperty('rating')) {
                    plantInfo[currPlant]['rating'] = [];
                    }
 
                    plantInfo[currPlant]['rating'].push(currRating)
                    break;
 
                case 'Update':
                    let newRarity = Number(elements[1]);
                    plantInfo[currPlant]['rarity'] = newRarity;
                    break;
 
                case 'Reset':
                    plantInfo[currPlant]['rating'] = [];
                    break;
            }   
        }
        command = array[index];
        index++;
    }
 
    console.log(`Plants for the exhibition:`); 
 
    for (let [key, value] of Object.entries(plantInfo)){
        let count = 0;
        let sum = 0;
        let avr = 0
 
        for (let [k, type] of Object.entries(value)){
            if(k === 'rating'){
                for (let i = 0; i < type.length; i++){
                    count++;
                    sum +=Number(type[i]);
 
                    if(sum === 0) {
                        avr = 0;
                    } else {
                        avr = sum / count
                    }
                }
            } else {
                rarity = Number(type)
            }
        }
        console.log(`- ${key}; Rarity: ${rarity}; Rating: ${avr.toFixed(2)}`)
    }
}
plantDiscovery((["3",
        "Arnoldii<->4",
        "Woodii<->7",
        "Welwitschia<->2",
        "Rate: Woodii - 10",
        "Rate: Welwitschia - 7",
        "Rate: Arnoldii - 3",
        "Rate: Woodii - 5",
        "Update: Woodii - 5",
        "Reset: Arnoldii",
        "Exhibition"]))