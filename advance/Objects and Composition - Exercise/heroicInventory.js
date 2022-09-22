function solve(input) {
    let heroes = [];

 while(input.length > 0){
    let [name, level, items] = input.shift().split(" / ");
    
    //items = items ? items.split(', ') : [];
    if (items = items) {
        items.split(', ')
    } else {
        [];
    }
    
    heroes.push({name,level:Number(level),items})
 }
    return JSON.stringify(heroes)
}
solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])