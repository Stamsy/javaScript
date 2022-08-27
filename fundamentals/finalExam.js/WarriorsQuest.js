function WarriorQuest(input) {
    let skills = input.shift()

    while (input[0] !== "For Azeroth") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];

        switch (command) {
            case "GladiatorStance":
                skills = skills.toUpperCase();
                console.log(skills);
                break;

            case "DefensiveStance":
                skills = skills.toLowerCase()
                console.log(skills);
                break;
            case "Dispel":
                let index = Number(tokens[1]);
                let letter = tokens[2];
                if (index < 0 && index >= skills.length) {
                    console.log(`Dispel too weak.`);
                } else {
                    skills = skills.substring(0, index) + letter + skills.substring(index + 1);
                    console.log(`Success!`);
                   
                }
                break;
            case "Target":
                let com = tokens[1];

                if (com === "Change") {
                    let first = tokens[2];
                    let second = tokens[3];

                    if (skills.includes(first)) {
                        skills = skills.split(first).join(second);
                        console.log(skills);
                    } else {
                        console.log(skills);
                    }
                }
                else  if(com === "Remove"){
                    let subs = tokens[2]
                    if (skills.includes(subs)) {
                        skills = skills.split(subs).join("")
                        console.log(skills);
                    } 

                }

                break;

            default:
                console.log(`Command doesn't exist!`);
                break;
        }

    }
}
WarriorQuest(["DYN4MICNIC",
"Target change d D",
"target change D d",
"For Azeroth"])