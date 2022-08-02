function heroesOfCodeAndLogic(input) {
    let num = Number(input.shift());
    let heroes = {}

    for (let i = 0; i < num; i++) {
        let [hero, hit, mana] = input.shift().split(" ")
        hit = Number(hit);
        mana = Number(mana)
        heroes[hero] = {
            hit,
            mana
        }
    }
    while (input[0] != "End") {
        let tokens = input.shift().split(" - ")
        let command = tokens[0];
        let name = tokens[1];

        let hero = heroes[name];
        switch (command) {
            case "CastSpell":
                let mpNeed = Number(tokens[2]);
                let spellName = tokens[3];

                if (hero.mana >= mpNeed) {
                    hero.mana -= mpNeed
                    console.log(`${name} has successfully cast ${spellName} and now has ${hero.mana} MP!`);
                } else {
                    console.log(`${name} does not have enough MP to cast ${spellName}!`);
                }
                break;

            case "TakeDamage":
                let damage = Number(tokens[2]);
                let attacker = tokens[3];
                if (hero.hit > damage) {
                    hero.hit -= damage;
                    console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${hero.hit} HP left!`);
                } else  { 
                    console.log(`${name} has been killed by ${attacker}!`);
                    delete heroes[name]
                }

                break;
            case "Recharge":
                let amount = Number(tokens[2]);
                let mp = Math.min((200 - hero.mana), amount)
                hero.mana += mp;
                console.log(`${name} recharged for ${mp} MP!`);
                break;
            case "Heal":
                let amountOne = Number(tokens[2]);
                let hp = Math.min((100 - hero.hit), amountOne)
                hero.hit += hp;
                console.log(`${name} healed for ${hp} HP!`);
                break;
        }
    }
    for (let heroData of Object.entries(heroes)) {
        let name = heroData[0];
        let hero = heroData[1]
        console.log(name);
        console.log(`  HP: ${hero.hit}`);
        console.log(`  MP: ${hero.mana}`);
    }

}
heroesOfCodeAndLogic([
    "4",'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'])