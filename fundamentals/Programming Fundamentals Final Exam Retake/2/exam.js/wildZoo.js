function wildZoo(input) {
    const list = {};
    let count = 0;
    for(const line of input){
        if(line === 'EndDay'){
            break;
        }
 
        let [command, ...rest] = line.split(':');
        rest = rest.join('-').split('-')
 
        switch(command){
            case `Add`:
                let name = rest[0];
                let food = Number(rest[1]);
                let area = rest[2];
                if(!list.hasOwnProperty(name)){
                    list[name] = {
                        food,
                        area,
                    }
                    break;
                }
                list[name].food += food;
            break;
            case `Feed`:
                let currentName = rest[0];
                let currentFood = Number(rest[1]);
 
                if(list.hasOwnProperty(currentName)){
                    list[currentName].food -= currentFood;
                }else{
                    continue;
                }
 
                if(list[currentName].food <= 0){
                    delete list[currentName];
                    console.log(`${currentName} was successfully fed!`);
                }else{
                    count++;
                }
            break;
        }
    }
 
    Object.entries(list)
    .forEach(el => {
        console.log(`${Object.keys(list)}`);
        console.log(`${el[0]} -> ${list[el[0]].food}`);
    })
 
}
wildZoo((["Add: Adam-4500-ByTheCreek",
"Add: Maya-7600-WaterfallArea",
"Add: Maya-1230-WaterfallArea",
"Feed: Jamie-2000",
"EndDay"]))